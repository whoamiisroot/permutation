import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SignOut = () => {
  const navigation = useNavigation();

  useEffect(() => {
    handleSignOut();
  }, []);

  const handleSignOut = () => {
    navigation.navigate("Login");
  };

  return null;
};

export default SignOut;

