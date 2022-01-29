import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, LogOut } = useAuth();
  console.log(user);
  return (
    <View>
      <Text>I am the HomeScreen</Text>
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
      <Button title="Log Out" onPress={LogOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
