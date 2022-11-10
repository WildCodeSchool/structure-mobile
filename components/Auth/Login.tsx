import * as React from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LOGIN_MUTATION } from "../../apollo/queries";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { RootTabParamList, AuthContextType, User, ValidatorForm } from "../../types";


type ILoginFormData = Pick<User, "email" | "password">;
type ValidatorLogin = ValidatorForm<keyof ILoginFormData>


export default function Login() {
  const navigation = useNavigation<RootTabParamList>();

	const validators: ValidatorLogin = {
		email: {
			required: {
				value: true,
				message: "L'email est requis"
			},
			pattern: {
				value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
				message: 'Adresse email non valide'
			}
		},
		password: {
			required: {
				value: true,
				message: 'Le mot de passe est requis'
			}
		}
	}


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const [mutateLogin, { data, loading, error: ApolloError }] =
    useMutation(LOGIN_MUTATION);
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;
  const onSubmit: SubmitHandler<ILoginFormData> = (payload) => {
    mutateLogin({
      variables: {
        data: payload,
      },
    })
      .then((data) => {
        if (data) {
          AsyncStorage.setItem("token", data.data.login);
          AsyncStorage.setItem("userId", data.data.id);
          AsyncStorage.setItem("name", data.data.firstname);

          setSignedIn(true);
          navigation.navigate("IsSignedIn");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
   			<InputGroup<ILoginFormData>
        Controller={Controller}
        control={control}
        field="email"
        label={"Votre email"}
        validators={validators}
        errors={errors}
      />
      {errors.email && <Text>{errors.email?.message}</Text>}

      <InputGroup<ILoginFormData>
        Controller={Controller}
        control={control}
        field="password"
        label={"Votre mot de passe"}
        validators={validators}
        errors={errors}
      />
      {errors.password && <Text>{errors.password?.message}</Text>}

      <Button onPress={handleSubmit(onSubmit)}>Se connecter</Button>
    </View>
  );
}
