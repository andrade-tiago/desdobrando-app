import { Text, TextProps } from "react-native"

type ErrorTextProps = Omit<TextProps, 'className'>

const ErrorText: React.FunctionComponent<ErrorTextProps> = (props) => {
  return (
    <Text className="text-red-800" {...props} />
  )
}

export default ErrorText
