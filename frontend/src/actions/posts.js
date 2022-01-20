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

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try{

    const {data} = await api.fetchPostsBySearch();
    console.log(data);

  } catch(error){
    console.log(error);

  }
}


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

export const deletePost = (id) => async (dispatch) => {
  try {
    
    await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id })

  } catch (error) {
    console.log(error);
  }
};