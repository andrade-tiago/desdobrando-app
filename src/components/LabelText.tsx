import { Text, TextProps } from "react-native"

type LabelTextProps = Omit<TextProps, 'className'>

const LabelText: React.FunctionComponent<LabelTextProps> = (props) => {
  return (
    <Text className="text-gray-600" {...props} />
  )
}

export default LabelText
