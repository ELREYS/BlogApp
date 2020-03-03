import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowBlogScreen from "./src/screens/ShowBlogScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditBlogScreen from "./src/screens/EditBlogScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ShowBlog: ShowBlogScreen,
    Create: CreateScreen,
    Edit: EditBlogScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
