// import JWT from 'jsonwebtoken'

// export const accessToken = (user) => JWT.sign({id: user.id},process.env.TOKEN_SECRET ,{expiresIn:'3m'})

// export default accessToken

// import jwt from 'jsonwebtoken'
// import CustomError from './customError.js';
// import { CODES } from '../config/constants.js';


// const verifyToken = (req, res, next) => {
//   try {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (!token) {
//       throw new CustomError()
//     }
//     jwt.verify(token, process.env.TOKEN_SECRET, async (err, decode) => {
//       if (err) throw new CustomError()

//       req.decode = decode
//       next();
//     });
//   } catch (err) {
//     throw new CustomError('Invalid Token', CODES['UA'])
//   }

// }

// export default verifyToken