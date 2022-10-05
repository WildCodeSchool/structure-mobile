import * as React from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { REGISTER_USER } from "../../apollo/queries";
import { useMutation } from "@apollo/client";

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
		register,
    control,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IRegisterFormData>({ mode: 'onTouched' })


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
					localStorage.setItem('token', data.data.register)
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
          pattern: { message: "Not a Valid Name", value: regex.firstname },
					minLength: {message:"",value:minLength.firstName}
					
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
      {errors.firstname && <Text>This is required.</Text>}



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
      {errors.lastname && <Text>This is required.</Text>}


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
      {errors.email && <Text>This is required.</Text>}




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
      {errors.password && <Text>This is required.</Text>}



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
      {errors.confirmPassword && <Text>This is required.</Text>}



      <Button onPress={handleSubmit(onSubmit)}>S'inscrire</Button>
    </View>
  );
}
