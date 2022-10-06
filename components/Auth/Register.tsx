import * as React from "react";
import { Text, View, StyleSheet, TextInput, Alert, } from "react-native";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";
import { useForm, Controller, SubmitHandler,UseFormRegister } from "react-hook-form";
import { REGISTER_USER } from "../../apollo/queries";
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { AuthContextType, RootTabParamList } from "../../types";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

interface IRegisterFormData {
	firstname: string
	lastname: string
	email: string
	password: string
	confirmPassword: string
  register: UseFormRegister<any>
}

export default function RegisterForm() {
	//Form
	const {
		register,
    control,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IRegisterFormData>({ mode: 'onTouched' })
  const navigation = useNavigation<RootTabParamList>();
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;

	const minLength = {
		firstName: 2,
		lastnameInvalid: 2,
		emailInvalid: 5,
		password: 8,
		confirmpassword:8 
	}

	const regex = {
		firstname: /^[a-z ,.'-]+$/i,
		lastname: /^[a-z ,.'-]+$/i,
		email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
	}
	
	const errorMessages = {
		firstName: "Prénom requis",
		lastnameInvalid: "Nom requis",
		emailInvalid: "Email invalide",
		password: "password invalide",
		confirmPassword:"les passwords ne correspondent pas" 
	}




	//Mutation
	const [mutateRegister, { loading, error: ApolloError }] =
		useMutation(REGISTER_USER)


	const onSubmit: SubmitHandler<IRegisterFormData> =  (data => {
		// on enlève confirmPassword de l'objet data
		const { confirmPassword, ...rest } = data
		
		const response = mutateRegister({ variables: { data: rest } })
		response
			.then(data => {
				if (data) {
					console.log(data.data.register)
					AsyncStorage.setItem('token', data.data.register)
          setSignedIn(true);
					navigation.navigate("IsSignedIn");
				}
			})
			.catch(err => {
				console.log(err)
			})
	})


  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: errorMessages.firstName },
          pattern: { message: 'Le prénom doit comporter uniquement des lettres', value: regex.firstname },
					minLength: {message:'Le prénom doit faire au moins 2 caractères',value:minLength.firstName}
					
        }}
        render={({ field: { onChange, onBlur, value } }) => (
					<InputGroup
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					placeholder="votre prénom"
				/>
        )}
        name="firstname"
      />
      {errors.firstname?.message}



			<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="votre nom"
						
          />
        )}
        name="lastname"
      />
      {errors.firstname?.message}


			<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="votre email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>Votre email est requis.</Text>}




      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
						password= {true}
            placeholder="votre password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>Le mot de passe est requis</Text>}



			<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
						password= {true}
            placeholder="confirmez votre password"
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text>La confirmation mot de passe est requise.</Text>}



      <Button onPress={handleSubmit(onSubmit)}>S'inscrire</Button>
    </View>
  );
}
