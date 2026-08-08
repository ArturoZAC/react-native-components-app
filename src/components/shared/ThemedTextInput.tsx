import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className={`px-2 py-4 text-black dark:text-white ${className}`}
      placeholderTextColor={"gray"}
      {...rest}
    />
  );
};

export default ThemedTextInput;
