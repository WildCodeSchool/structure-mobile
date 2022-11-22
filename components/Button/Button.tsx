import React, { Children } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Style from "../../style/Style";

interface ButtonProps {
  children: string;
  type?: "primary" | "secondary";
  onPress: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  children,
  onPress,
}) => {
  const typeBtn = type === "primary" ? Style.btnPrimary : Style.btnSecondary;
  return (
    <TouchableOpacity style={typeBtn} onPress={onPress}>
      <View>
        <Text style={[Style.btnText]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
