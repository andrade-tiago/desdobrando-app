import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { gray } from "tailwindcss/colors";

type InputFieldProps = Omit<TextInputProps, 'className' | 'placeholderTextColor'>

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <TextInput
      className="w-full text-gray-800"
      placeholderTextColor={gray[400]}
      {...props}
    />
  )
}

export default InputField
