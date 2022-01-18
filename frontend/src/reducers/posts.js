// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
        return posts.filter((post) => post.id !== action.payload); ///////////
    case "UPDATE":
    case "LIKE": // both update and like will do the same 
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); // return an updated post
    case "FETCH_ALL":
        return action.payload;
    case "CREATE":
        return [...posts, action.payload];
    default:
        return posts;
  }
}

