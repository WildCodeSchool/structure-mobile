import { useLazyQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useLayoutEffect } from "react";
import { GET_ME } from "../apollo/queries";
import { MeData, Role, User } from "../types";

interface UseGuardByRole {
  authedUser: User | null;
  isAllowed: boolean;
}

/**
 *
 * @param roles Tableau de Role(enum)
 * @returns  - {authedUser, isAllow} l'utilisateur connecté si autorisé et un boolean autorisé ou non
 */

export function useGuardByRoles(roles: Role[]): UseGuardByRole {
  const navigation = useNavigation();
  const [authedUser, setAuthedUser] = useState<User | null>(null);
  const [getMe] = useLazyQuery<MeData>(GET_ME, {
    fetchPolicy: "no-cache", //Désactive le cache pour cette query
  });

  useLayoutEffect(() => {
    (async () => {
      await getMe().then(({ data }) => {
        console.log(roles);
        if (data && data.me && roles.includes(data.me.roles)) {
          setAuthedUser(data.me);
        } else {
          navigation.navigate("Dashboard");
        }
      });
    })();
  }, []);
  return { authedUser, isAllowed: !!authedUser };
}
