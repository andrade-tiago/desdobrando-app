import { ActivityIndicator, Text, TouchableOpacityProps } from "react-native"
import { TouchableOpacity } from "react-native"

type ButtonProps = Omit<TouchableOpacityProps, 'className'> & {
  text: string
  isLoading?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text, isLoading, ...props
}) => {
  return (
    <TouchableOpacity
      className="rounded-lg w-full h-16 bg-pink-950 justify-center items-center"
      activeOpacity={.9}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className="text-white">
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
