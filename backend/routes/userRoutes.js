import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User.js'
import cookieParser from "cookie-parser";
import { jwtSecret } from "../config.js";

const router = express.Router();
router.use(cookieParser());

router.get('/', (req, res) => {
    return res.status(201).send("USER Connection SUCCESS");
  });

router.post('/register', async (req, res) => {
  try {
      const newUser = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      };
      const user = await User.create(newUser);
      return res.status(201).send(user)
      } catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
      }
});

//User Login
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userDoc = await User.findOne({username});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        const accessToken = jwt.sign({
          username: userDoc.username,
          id:userDoc._id}, jwtSecret, {expiresIn: "1h"});
        const {name,username,_id} = userDoc
        res.cookie('token', accessToken).json({name,username,_id});
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.status(422).json('not found');
    }
});
  
router.post('/logout', (req,res) => {
  res.cookie('token', '').json(true);
});

router.get('/profile', async(req,res) => {
  const {name,username,_id} = await User.findById(req.userId);
  res.json({name,username,_id});
}); 

export default router