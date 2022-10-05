/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

//Paramètres de "RootNavigator"
export type RootStackParamList = {
  IsNotSignedIn: undefined;
  IsSignedIn: NavigatorScreenParams<RootTabParamList> | { userId: string };
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Dashboard: undefined;
  Modal: undefined;
  NotFound: undefined;
  Project_details: undefined;
  Ticket_details: undefined;
};
//Props des Screen de "RootNavigator"
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

//Paramètres de "BottomTab"
export type RootTabParamList = {
  navigate(arg0: string): unknown;
  Home: undefined;
  Projects: { userId: string };
  Profile: { userId: string };
};
//Props des screen "BottomTab"
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

//Le CONTEXT
export type Auth = boolean;

export type AuthContextType = {
  signedIn: Auth;
  setSignedIn: (signedIn: Auth) => void;
};
