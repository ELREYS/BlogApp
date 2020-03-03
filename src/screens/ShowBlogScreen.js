import React, { useContext } from "react";

import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowBlogScreen = ({ navigation }) => {
  const state = useContext(Context);
  const id = navigation.getParam("id");
  console.log(state.state);
  const blogDetails = state.state.find(blog => blog.id === id);
  console.log(blogDetails);

  return (
    <View>
      <Text>{blogDetails.title}</Text>
      <Text>{blogDetails.content}</Text>
    </View>
  );
};

ShowBlogScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: () => (
      <Feather
        name="edit"
        size={30}
        onPress={() => navigation.navigate("Edit", { id })}
      />
    )
  };
};

const styles = StyleSheet.create({});

export default ShowBlogScreen;
