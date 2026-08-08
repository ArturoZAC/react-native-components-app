import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  className?: string;
  children: string;
}

const ThemedButton = ({ className, children, ...rest }: Props) => {
  return (
    <Pressable
      className={`items-center rounded-xl bg-light-primary px-6 py-2 active:opacity-80 dark:bg-dark-primary ${className}`}
      {...rest}>
      <Text className="text-2xl text-white">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
