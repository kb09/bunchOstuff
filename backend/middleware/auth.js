import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const isCustomAuth = token.length < 500; // if lenght is less than 500 then the token is our otherwise external providers
      
  } catch (error) {
    console.log(error);
  }
};

export default auth;