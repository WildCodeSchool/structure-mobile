import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";


const { manifest } = Constants;

const httpLink = createHttpLink({
  uri: manifest?.debuggerHost ? `http://${manifest.debuggerHost.split(':').shift()}:4000` : process.env.API_URI,
  credentials: "same-origin",
});



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  
  const token = AsyncStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

// Initialize Apollo Client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
