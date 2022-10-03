import React from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";

interface InputGroupProps {
  label?: string;
  placeholder?: string;
  value: string;
  password?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
}

export const InputGroup: React.FunctionComponent<InputGroupProps> = ({
  label,
  placeholder,
  value,
  password,
  type = "default",
  onChangeText,
  onBlur,
}) => {
  return (
    <View>
      {!!label && <Text>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={password}
        keyboardType={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
  },
});
