import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";
// import Itinerary from "../models/Itinerary.js"

export function verifyToken(req, res, next) {
  const {token} = req.cookies;
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.id;
    next();
    } catch (error) {
    res.status(401).json(error);
    }
};

// export async function verifyUserForItinerary(req, res, next) {
//   const {id} = req.params

//   const itinerary = await Itinerary.findById(id);
//   if (!itinerary) {
//     return res.status(404).send("not found")
//   }
//   if(itinerary.userId != req.userId) {
//     return res.status(404).send("Unauthorised Token")
//   }
//   res.Id = id;
//   next()
// };

