/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          SignIn: {
            screens: {
              SignInScreen: "one",
            },
          },
          Dashboard: {
            screens: {
              DashboardScreen: "two",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "three",
            },
          },
          SignUp: {
            screens: {
              SignUpScreen: "four",
            },
          },
        },
      },
      // Authentification: {
      //   screens: {
      //     SignIn: {
      //       screens: {
      //         SignInScreen: "one",
      //       },
      //     },
      //     SignUp: {
      //       screens: {
      //         SignUpScreen: "four",
      //       },
      //     },
      //   },
      // },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
