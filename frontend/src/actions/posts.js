import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts()

    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post); // post api request to a backend server
    dispatch({ type: 'CREATE', payload: data});

  } catch (err) {
    console.log(err);
  };
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data});
  } catch (err) {
    console.log(err);
  }
}


export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};