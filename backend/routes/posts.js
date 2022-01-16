import express from 'express';

//create a new router object
const router = express.Router();

//handle GET requests to the homepage
router.get('/', (req, res) => {
  res.send("This works");
});


export default router