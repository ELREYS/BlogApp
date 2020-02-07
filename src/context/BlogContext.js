import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  // state === {blogPosts}
  // action === {type:"Add","Remove","Edit",payload: blogPost}

  switch (action.type) {
    case "add_BlogPost":
      return [...state, { title: `Blog Post # ${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "add_BlogPost" });
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  []
);
