import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User.js'
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

router.get('/', (req, res) => {
    return res.status(201).send("USER Connection SUCCESS");
  });

router.post('/register', async (req, res) => {
  try {
      const newUser = {
        username: req.body.username,
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      };
      const user = await User.create(newUser);
      return res.status(201).send(user)
      } catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
      }
});

  

export default router