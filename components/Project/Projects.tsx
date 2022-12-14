import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GET_ME, GET_PROJECTS, GET_ALL_USER_PROJECTS } from '../../apollo/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import Style from '../../style/Style';
import navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../constants/Colors';

import {MeData} from '../../types'

export default function Projects() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const [Get_user_projects, { data, loading, error, refetch }] = useLazyQuery(GET_ALL_USER_PROJECTS);

  let projectsUserIsMemberOf = data?.user?.projects ?? []
  let projectsUserCreated = data?.user?.projects_author ?? [];
  let allUserProjects = projectsUserIsMemberOf.concat(projectsUserCreated)


  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery<MeData>(GET_ME, {
    onCompleted: (data) => {
      //console.log(data.me)
      Get_user_projects({
        variables: {
          where: {
            id: data.me.id,
          },
        },
      });
    },
  });

  const handleRefresh = async () => {
    refetch();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    handleRefresh();
    console.log('projects', projects);
    setProjects(allUserProjects);
  }, []);

  if (loading)
    return (
      <View>
        <ActivityIndicator size='large' color={Colors.green} />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Erreur lors du chargement des projets...</Text>
      </View>
    );
  if (allUserProjects.length === 0 )
    return <Text>Pas de projets pour l'instant !</Text>;
 
  return (
    <FlatList
      data={allUserProjects}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Project_details', {
              projectId: item.id,
              
            })
          }
        >
          <ProjectCard
            id={item.id}
            title={item.title}
            subject={item.subject}
            createdAt={item.createdAt}
            tickets={item.tickets}
          />
        </TouchableOpacity>
      )}
    />
  );
}
