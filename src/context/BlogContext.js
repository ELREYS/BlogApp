import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  // state === {blogPosts}
  // action === {type:"Add","Remove","Edit",payload: blogPost}

  switch (action.type) {
    case "get_BlogPosts":
      return action.payload;
    case "add_BlogPost":
      return [
        ...state,
        {
          id: `${Math.floor(Math.random() * 99999)}`,
          title: action.payload.title,
          content: action.payload.content,
          date: newTimeStamp()
        }
      ];
    case "edit_BlogPost":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });

    case "delete_blogPost":
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const newTimeStamp = () => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  var date = new Date();
  return date.toLocaleString("ch-CH", options);
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("blogposts.json");
    const blogsData = response.data.blogposts;
    console.log(blogsData);

    dispatch({ type: "get_BlogPosts", payload: blogsData });
  };
};

const addBlogPost = dispatch => {
  return async (title, content) => {
    dispatch({ type: "add_BlogPost", payload: title, content });
    //await jsonServer.post("/blogposts", title, content);
  };
};

const editBlogPost = dispatch => {
  return (id, title, content) => {
    dispatch({
      type: "edit_BlogPost",
      payload: id,
      title,
      content,
      date: newTimeStamp()
    });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
