import jwt from "jsonwebtoken";
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

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

// export async function verifyUserClaim(req, res, next) {
//   const {id} = req.params

//   const claim = await Claims.findById(id);
//   if (!claim) {
//     return res.status(404).send("claim not found")
//   }
//   if(claim.userId != req.userId) {
//     return res.status(404).send("Unauthorised Token")
//   }
//   res.claimId = id;
//   next()
// };

