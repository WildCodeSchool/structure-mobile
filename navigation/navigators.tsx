import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProjectScreen from "../screens/ProjectScreen";
import TicketScreen from "../screens/TicketScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

//Routeur d'identification "signIn or not signIn"
export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      /> */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

//Routes pour l'auhtentification
function WelcomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Bon retour parmis nous" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Inscrivez-vous" }}
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
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={({ navigation }: RootTabScreenProps<"Dashboard">) => ({
          title: "Tableau de bord",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Project_details" component={ProjectScreen} />
      <Stack.Screen name="Ticket_details" component={TicketScreen} />
    </Stack.Navigator>
  );
}

// function ProjectsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Dashboard" component={ProjectsScreen} />
//       <Stack.Screen name="Project_details" component={Project} />
//       <Stack.Screen name="Ticket_details" component={Ticket} />
//       {/* <Stack.Screen name="Create_Project" component={ProjectCreate} />
//         <Stack.Screen name="Create_Ticket" component={TicketCreate} />
//     </Stack.Navigator>
//   );
// }

// function ProfileStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{ userId: user.id }}/>
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
//