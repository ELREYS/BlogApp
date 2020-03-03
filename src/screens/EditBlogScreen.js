import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const EditBlogScreen = ({ navigation }) => {
  const [date, setDate] = useState();
  const { state, editBlogPost } = useContext(Context);

  const id = navigation.getParam("id");

  console.log(id);
  //console.log(state);

  const blogEntry = state.find(blog => blog.id === id);

  const [title, setTitle] = useState(blogEntry.title);
  const [content, setContent] = useState(blogEntry.content);

  console.log(blogEntry);

  return (
    <View>
      <Text style={styles.title}> Enter New Title: </Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
      />
      <Text style={styles.title}> Enter New Content: </Text>
      <TextInput
        multiline
        textAlignVertical={"top"}
        style={styles.inputContent}
        autoCorrect={false}
        autoCapitalize="none"
        value={content}
        onChangeText={newContent => setContent(newContent)}
      />
      <TouchableOpacity
        onPress={() => editBlogPost({ id, title, content }, navigation.pop())}
      >
        <Text style={styles.buttonStyle}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    height: 60,
    margin: 5,
    fontSize: 18
  },
  inputContent: {
    borderColor: "black",
    borderWidth: 2,
    height: 200,
    margin: 5,
    fontSize: 18
  },
  buttonStyle: {
    borderWidth: 2,
    height: 60,
    textAlign: "center",
    margin: 50,
    fontSize: 30,
    paddingTop: 10
  }
});

export default EditBlogScreen;
