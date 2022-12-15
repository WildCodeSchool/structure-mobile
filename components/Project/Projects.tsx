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
import { GET_ME, GET_PROJECTS, GET_PROJECTS_WHERE_USER_IS_MEMBER } from '../../apollo/queries';
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

  const [Get_user_projects, { data, loading, error, refetch }] = useLazyQuery(GET_PROJECTS_WHERE_USER_IS_MEMBER);

  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery<MeData>(GET_ME, {
    onCompleted: (data) => {
      console.log(data.me)
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
  if (data.length === 0)
    return <Text>Vous n'avez pas de projet pour l'isntant !</Text>;

  return (
    <FlatList
      data={data}
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
              title: item.title,
              subject: item.subject,
              code: item.code,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
              tickets: item.tickets,
              members: item.members,
              user_author_project: item.user_author_project,
              user_author_project_id: item.user_author_project_id,
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
