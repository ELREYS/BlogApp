import React, { useContext, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
  useEffect(() => {
    // Update the BlogPosts
    getBlogPosts();
  }, []);

  const { state, getBlogPosts, addBlogPost, deleteBlogPost } = useContext(
    Context
  );

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginRight: 5,
            fontSize: 18,
            alignSelf: "center",
            color: "red"
          }}
        >
          Posts:{state.length}
        </Text>
      </View>
      <FlatList
        data={state}
        keyExtractor={state => state.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ShowBlog", { id: item.id })}
              >
                <Text>{item.date}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.content.substring(0, 50)}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.iconStyle} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Feather
        name="plus"
        size={30}
        onPress={() => navigation.navigate("Create")}
      />
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  iconStyle: {
    fontSize: 25
  }
});

export default IndexScreen;
