import jwt from 'jsonwebtoken'


const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is required.' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, decode) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token.' });
    }
    req.decode = decode
    next();
  });
}

export default verifyToken