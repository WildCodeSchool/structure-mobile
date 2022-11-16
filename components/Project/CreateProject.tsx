import * as React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useLazyQuery, useMutation } from "@apollo/client";

import { CREATE_PROJECT, GET_ME } from "../../apollo/queries";

import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "../Button";
import { InputGroup } from "../InputGroup";

import type { MeData, Project, User, ValidatorForm } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextType, RootTabParamList } from "../../types";
import { AuthContext } from "../../context/AuthContext";

export interface CreateProjectForm
  extends Pick<Project, "title" | "subject" | "code"> {}

type ValidatorCreateProjectForm = ValidatorForm<keyof CreateProjectForm>;

export default function CreateProjectForm() {
  const navigation = useNavigation<RootTabParamList>();
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  // -------------- Controles formulaire  ---------------------
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectForm>({ mode: "onTouched" });

  const validators: ValidatorCreateProjectForm = {
    title: {
      required: {
        value: true,
        message: "Veuillez choisir un titre pour votre projet",
      },
    },
    subject: {
      required: {
        value: true,
        message: "Veuillez indiquer le sujet de votre projet",
      },
    },
    code: {
      required: {
        value: true,
        message: "Veuillez indiquer un code pour votre projet. Exemple: 'ABC'",
      },
      pattern: {
        value: /[A-Z]$/g,
        message: "Le code doit comporter uniquement des lettres majuscules",
      },
      minLength: {
        value: 3,
        message: "Le code doit faire moins 3 caractères min.",
      },
      maxLength: {
        value: 3,
        message: "Le code doit faire moins 3 caractères max.",
      },
    },
  };


// -------------- Envoi du projet  ---------------------
  const [getMe,{loading: loadingGetId}] = useLazyQuery<MeData>(GET_ME)
  const [createProjectMutation, { loading, error: ApolloError }] = useMutation(
    CREATE_PROJECT,
    {
      onCompleted: () => {
        setIsSubmited(true);
      },
    }
  );

  const onSubmit: SubmitHandler<CreateProjectForm> = async (payload) => {
    await getMe()
      .then(({ data }) => addProject(data, payload))
      .catch((err) => console.log(err));

    async function addProject(data: MeData | undefined, payload: CreateProjectForm){
      const project = {
        ...payload,
        user_author_project: {
          connect: {
            id: data?.me.id,
          },
        }
      };
      console.log(payload, data?.me.id);
      await createProjectMutation({ variables: { data: project } });
    }
  };

  if (loading) return <Text>Création du projet...</Text>;
  if (ApolloError) return <Text>Erreur lors de la création du projet.</Text>;

  return (
    <View>
      <InputGroup<CreateProjectForm>
        Controller={Controller}
        control={control}
        field="title"
        label="Titre"
        validators={validators}
        errors={errors}
      />
      {errors.title && <Text>{errors.title.message}</Text>}
      <InputGroup<CreateProjectForm>
        Controller={Controller}
        control={control}
        field="subject"
        label="Sujet"
        validators={validators}
        errors={errors}
      />
      {errors.subject && <Text>{errors.subject.message}</Text>}
      <InputGroup<CreateProjectForm>
        Controller={Controller}
        control={control}
        field="code"
        label="Code"
        validators={validators}
        errors={errors}
      />
      {errors.code && <Text>{errors.code.message}</Text>}
      <Button onPress={handleSubmit(onSubmit)}>Valider</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
