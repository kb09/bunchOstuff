// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case "DELETE":
        // fix start ::
        // return state.filter((post) => post._id !== action.payload); 
        return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        // end
    case "UPDATE":
    case "LIKE": // both update and like will do the same 
      // fix start ::
      // return state.map((post) => (post._id === action.payload._id ? action.payload : post)); // return an updated post
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
      // end
    case "FETCH_ALL":
        return {
          ...state,
          posts: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages
        }
    case "FETCH_BY_SEARCH":
      // fix start ::
        // return { ...state, posts: action.payload};
        return { ...state, posts: action.payload.data };
        // end
    case "CREATE":
        // fix start ::
        // return [...state, action.payload];
        return { ...state, posts: [...state.posts, action.payload] };
        // end
    default:
        return state;
  }
}

