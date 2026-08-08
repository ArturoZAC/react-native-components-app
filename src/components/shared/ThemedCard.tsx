import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  className?: string;
}

const ThemedCard = ({ className, children, ...rest }: Props) => {
  return (
    <View
      className={`rounded-2xl bg-white p-2 shadow shadow-black/5 dark:bg-black/10  ${className}`}>
      {children}
    </View>
  );
};

export default ThemedCard;
