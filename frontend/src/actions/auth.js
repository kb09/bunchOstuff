import * as api from "../api";

// google fix ::
export const signin = (formData, navigate) => async (dispatch) => {
// export const signin = (formData, history) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData)

    dispatch({type: "AUTH", data})

    // google fix ::
    // history.push('/');
    navigate("/")

  } catch (error) {

    console.log(error);

  }
};



// google fix ::
export const signup = (formData, navigate) => async (dispatch) => {
// export const signup = (formData, history) => async (dispatch) => {

  try {

    const { data } = await api.signUp(formData)

    dispatch({type: "AUTH", data})

    // google fix ::
    // history.push('/');
    navigate("/")

  } catch (error) {

    console.log(error);
    
  }
};

