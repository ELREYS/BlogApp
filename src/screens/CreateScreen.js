import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.title}> Enter Title: </Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
      />
      <Text style={styles.title}> Enter Content: </Text>
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
        onPress={() =>
          addBlogPost({ title, content }, navigation.navigate("Index"))
        }
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

export default CreateScreen;
