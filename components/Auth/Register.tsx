import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {useForm,Controller,SubmitHandler} from "react-hook-form";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Button } from "../Button";
import { IS_EXIST_USER, REGISTER_USER } from "../../apollo/queries";
import { InputGroup } from "../InputGroup";
import { Text, View, StyleSheet, TextInput } from "react-native";

//Types
import type { User, ValidatorForm } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextType, RootTabParamList } from "../../types";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef } from "react";

export interface RegisterFormData
  extends Pick<User, "firstname" | "lastname" | "email" | "password"> {
  confirmPassword: string;
}

type ValidatorRegister = ValidatorForm<keyof RegisterFormData>;

export default function RegisterForm() {
  const [getisExistUser] = useLazyQuery<{ isExistUser: boolean }>(
    IS_EXIST_USER
  );

  //Form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({ mode: "onTouched" });

  const navigation = useNavigation<RootTabParamList>();
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;

  const validators: ValidatorRegister = {
    firstname: {
      required: {
        value: true,
        message: "Le prénom est requis",
      },
      pattern: {
        value: /[A-Za-z]$/g,
        message: "Le prénom doit comporter uniquement des lettres",
      },
      minLength: {
        value: 2,
        message: "Le prénom doit faire au moins 2 caractères",
      },
    },
    lastname: {
      required: {
        value: true,
        message: "Le nom est requis",
      },
      pattern: {
        value: /[A-Za-z]$/g,
        message: "Le nom doit comporter uniquement des lettres",
      },
      minLength: {
        value: 2,
        message: "Le nom doit faire au moins 2 caractères",
      },
    },
    email: {
      required: {
        value: true,
        message: "L'email est requis",
      },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "Adresse email non valide",
      },
      validate: {
        isExist: async (value: string): Promise<boolean | string> => {
          const response = await getisExistUser({
            variables: {
              data: { email: value },
            },
          });
          console.log(response);
          return !response.data?.isExistUser || "Adresse email déjà utilisée";
        },
      },
    },
    password: {
      required: {
        value: true,
        message: "Le mot de passe est requis",
      },
      minLength: {
        value: 8,
        message: "Le mot de passe doit contenir au moins 8 caractères.",
      },
      maxLength: {
        value: 20,
        message: "Le mot de passe ne doit pas dépasser 20 caractères.",
      },
    },
    confirmPassword: {
      required: {
        value: true,
        message: "La confirmation mot de passe est requise",
      },
      minLength: {
        value: 8,
        message: "Le mot de passe doit contenir au moins 8 caractères.",
      },
      validate: {
        isSame: (value: string) =>
          value === watch("password") ||
          "Les mots de passe ne correspondent pas",
      },
    },
  };

  //Mutation
  const [mutateRegister, { loading, error: ApolloError }] =
    useMutation(REGISTER_USER);

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    // on enlève confirmPassword de l'objet data
    const { confirmPassword, ...rest } = data;

    const response = mutateRegister({ variables: { data: rest } });
    response
      .then((data) => {
        if (data) {
          console.log(data.data.register);
          AsyncStorage.setItem("token", data.data.register);
          setSignedIn(true);
          navigation.navigate("IsSignedIn");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <InputGroup<RegisterFormData>
        Controller={Controller}
        control={control}
        field="firstname"
        label={"Votre prénom"}
        validators={validators}
        errors={errors}
      />
      {errors.firstname && <Text>{errors.firstname?.message}</Text>}

			<InputGroup<RegisterFormData>
        Controller={Controller}
        control={control}
        field="lastname"
        label={"Votre nom"}
        validators={validators}
        errors={errors}
      />
      {errors.lastname && <Text>{errors.lastname?.message}</Text>}

			<InputGroup<RegisterFormData>
        Controller={Controller}
        control={control}
        field="email"
        label={"Votre email"}
        validators={validators}
        errors={errors}
      />
      {errors.email && <Text>{errors.email?.message}</Text>}

			<InputGroup<RegisterFormData>
        Controller={Controller}
        control={control}
        field="password"
        label={"Votre mot de passe"}
        validators={validators}
        errors={errors}
      />
      {errors.password && <Text>{errors.password?.message}</Text>}

			<InputGroup<RegisterFormData>
        Controller={Controller}
        control={control}
        field="confirmPassword"
        label={"Confirmez votre mot de passe"}
        validators={validators}
        errors={errors}
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword?.message}</Text>}


      <Button onPress={handleSubmit(onSubmit)}>S'inscrire</Button>
    </View>
  );
}
