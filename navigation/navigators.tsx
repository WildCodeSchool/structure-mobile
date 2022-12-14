import * as React from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ListProjectsScreen from "../screens/Projects/ListProjectsScreen";
import ProjectDetailScreen from "../screens/Projects/ProjectDetailScreen";
import CreateProjectScreen from "../screens/Projects/CreateProjectScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  AuthContextType,
} from "../types";
import ListTicketsScreen from "../screens/Tickets/ListTicketsScreen";
import TicketDetailScreen from "../screens/Tickets/TicketDetailScreen";
import CreateTicketScreen from "../screens/Tickets/CreateTicketScreen";
import { SimpleLineIcons } from "@expo/vector-icons";
import Style from "../style/Style";
import TicketHeader from "../components/svg/ticketHeader";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

//Routeur d'identification "signIn or not signIn"
export default function RootNavigator() {
  const { signedIn, setSignedIn } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        token ? setSignedIn(true) : setSignedIn(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [signedIn]);
  return (
    <Stack.Navigator initialRouteName="IsNotSignedIn">
      {signedIn === false ? (
        <Stack.Screen
          name="IsNotSignedIn"
          component={WelcomeNavigator}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: Colors.green,
            },
          }}
        />
      ) : (
        <Stack.Screen
          name="IsSignedIn"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: Colors.green,
            },
          }}
        />
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

//Routes pour l'auhtentification
function WelcomeNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "",
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "",
          headerTintColor: Colors.white,
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerStyle: {
          elevation: 10,
        },
        headerTintColor: Colors[colorScheme].text,
        headerTitleStyle: [Style.header],
        headerTitleAlign: "center",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={DashboardStack}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Tableau de bord",
          headerLeft: () => <TicketHeader />,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <SimpleLineIcons
                name="settings"
                size={24}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Projects"
        component={ProjectStack}
        options={{
          headerLeft: () => <TicketHeader />,
          title: "Projets",
          tabBarIcon: ({ color }) => <TabBarIcon name="trello" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => <TicketHeader />,
          title: "Profil",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function DashboardStack() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors[colorScheme].background },
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={DashboardScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: Colors.green,
        }}
        name="Project_details"
        component={ProjectDetailScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerTintColor: Colors.green,
        }}
        name="Ticket_details"
        component={TicketDetailScreen}
      />
    </Stack.Navigator>
  );
}

function ProjectStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: Colors.green,
        }}
        name="Projects_list"
        component={ListProjectsScreen}
      />
      <Stack.Screen
        options={{
          headerTintColor: Colors.green,
        }}
        name="Project_details"
        component={ProjectDetailScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerTintColor: Colors.green,
        }}
        name="Create_project"
        component={CreateProjectScreen}
      />
    </Stack.Navigator>
  );
}

function TicketStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tickets_list" component={ListTicketsScreen} />
      <Stack.Screen name="Ticket_details" component={TicketDetailScreen} />
      <Stack.Screen name="Create_ticket" component={CreateTicketScreen} />
    </Stack.Navigator>
  );
}
