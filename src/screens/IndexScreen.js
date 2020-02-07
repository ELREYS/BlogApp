import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BlogContext, { BlogProvider } from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { data, addBlogPosts } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={data => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
      <Button title={"Add BlogPost"} onPress={addBlogPosts} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
