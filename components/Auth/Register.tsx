import React, { useState } from "react";
import { View } from "react-native";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";

export default function Register() {
  const signup = () => {
    console.log("Create account here...");
  };

  const [firstName, setFirstName] = useState("");

  return (
    <>
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
}
