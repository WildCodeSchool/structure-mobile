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
  
}

export default function RegisterForm() {
	//Form
	const {
    control,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IRegisterFormData>({ mode: 'onTouched' })
  
  const navigation = useNavigation<RootTabParamList>();
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;


  const validators = {
		firstname: {
			required: {
				value: true,
				message: 'Le prénom est requis'
			},
			pattern: {
				value: /[A-Za-z]$/g,
				message: 'Le prénom doit comporter uniquement des lettres'
			},
			minLength: {
				value: 2,
				message: 'Le prénom doit faire au moins 2 caractères'
			}
		},
		lastname: {
			required: {
				value: true,
				message: 'Le nom est requis'
			},
			pattern: {
				value: /[A-Za-z]$/g,
				message: 'Le nom doit comporter uniquement des lettres'
			},
			minLength: {
				value: 2,
				message: 'Le nom doit faire au moins 2 caractères'
			}
		},
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
			},
			minLength: {
				value: 8,
				message: 'Le mot de passe doit contenir au moins 8 caractères.'
			},
			maxLength: {
				value: 20,
				message: 'Le mot de passe ne doit pas dépasser 20 caractères.'
			}
		},
		confirmPassword: {
			required: {
				value: true,
				message: 'La confirmation mot de passe est requise'
			},
			minLength: {
				value: 8,
				message: 'Le mot de passe doit contenir au moins 8 caractères.'
			},
			
			validate: (value: string) => value === watch('password'),
			message: 'Les mots de passe ne correspondent pas'	
		
		}
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
     rules={
			validators.firstname
		}
        render={({ field: { onChange, onBlur, value, } }) => (
					<InputGroup
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					placeholder="votre prénom"
				/>
        )}
        name="firstname"
      />
      {errors.firstname && <Text>{errors.firstname?.message}</Text>}



			<Controller
        control={control}
				rules={
					validators.lastname
				}
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
      {errors.lastname && <Text>{errors.lastname?.message}</Text>}


			<Controller
        control={control}
        rules={
					validators.email
        }
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
      {errors.email && <Text>{errors.email?.message}</Text>}




      <Controller
        control={control}
        rules={
					validators.password
				}
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
      {errors.password && <Text>{errors.password.message}</Text>}



			<Controller
        control={control}
        rules={
					validators.confirmPassword
				}
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
      {errors.confirmPassword && <Text>{errors.confirmPassword?.message} </Text>}



      <Button onPress={handleSubmit(onSubmit)}>S'inscrire</Button>
    </View>
  );
}
