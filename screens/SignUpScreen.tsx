import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";

interface CreateAccountProps {}

export const SignUpScreen: React.FunctionComponent<
  CreateAccountProps
> = ({}) => {
  const signup = () => {
    console.log("Create account here...");
  };

  const [firstName, setFirstName] = useState("");

  return (
    <>
      <Text>Création de compte</Text>
      <InputGroup
        label="Prénom"
        value={firstName}
        placeholder="Prénom"
        onChangeText={setFirstName}
      />
      <InputGroup
        label="Nom"
        value={firstName}
        placeholder="Nom"
        onChangeText={setFirstName}
      />
      <InputGroup
        label="Email"
        value={firstName}
        placeholder="mail"
        onChangeText={setFirstName}
        type="email-address"
      />
      <InputGroup
        label="Mot de passe"
        value={firstName}
        onChangeText={setFirstName}
        password
      />
      <InputGroup
        label="Confirmation de mot de passe"
        value={firstName}
        onChangeText={setFirstName}
        password
      />
      <View />
      <Button onPress={signup}>Créer mon compte</Button>
    </>
  );
};
