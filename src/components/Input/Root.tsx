import { View, ViewProps } from "react-native";

type InputRootProps = Omit<ViewProps, 'className'>

const InputRoot: React.FunctionComponent<InputRootProps> = (props) => {
  return (
    <View
      className="w-full shadow bg-gray-50 gap-2 p-3 justify-between rounded-lg"
      {...props}
    />
  )
}

export default InputRoot
