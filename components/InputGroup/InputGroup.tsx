import React, { JSXElementConstructor, ReactElement } from "react";
import {
  Control,
  Controller,
  ControllerProps,
  ControllerRenderProps,
  Field,
  FieldErrorsImpl,
  FieldValues,
  Path,
} from "react-hook-form";
import { Text, TextInput, View, StyleSheet } from "react-native";
// import { User } from "../../types";
// import { RegisterFormData } from "../Auth/Register";

interface InputGroupProps<T extends FieldValues> {
  Controller: <
    TFieldValues extends FieldValues = FieldValues,
    TName extends Path<TFieldValues> = Path<TFieldValues>
  >(
    props: ControllerProps<TFieldValues, TName>
  ) => ReactElement<any, string | JSXElementConstructor<any>>;
  control: Control<T>;
  field: Path<T>;
  label: string;
  errors: any;
  validators: any;
}

export const InputGroup = <T extends FieldValues>(
  props: InputGroupProps<T>
) => {
  return (
    <View>
      <View>
        <Text>{props.label}</Text>
        <Controller
          control={props.control}
          rules={props.validators[props.field]}
          name={props.field}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
     </View>
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
