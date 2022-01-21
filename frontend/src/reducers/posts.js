// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case "DELETE":
        return state.filter((post) => post._id !== action.payload); 
    case "UPDATE":
    case "LIKE": // both update and like will do the same 
      return state.map((post) => (post._id === action.payload._id ? action.payload : post)); // return an updated post
    case "FETCH_ALL":
        return {
          ...state,
          posts: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages
        }
    case "FETCH_BY_SEARCH":
        return { ...state, posts: action.payload};
    case "CREATE":
        return [...state, action.payload];
    default:
        return state;
  }
}

