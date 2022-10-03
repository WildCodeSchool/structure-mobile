import { Text, View } from "react-native";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";
import { useForm, Controller } from "react-hook-form";

export const SignInScreen = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <View>
      <Text>Se connecter</Text>

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
            placeholder="votre password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Button onPress={handleSubmit(onSubmit)}>Se connecter</Button>
    </View>
  );
};
