import React, { Children } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  children: string;
  type?: "primary" | "secondary";
  onPress: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  type = "primary",
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={[]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
