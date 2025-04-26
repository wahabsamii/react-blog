import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
  const JWT_SECRET = 'sadasdnsjd8347385745893-02931n';
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, JWT_SECRET , (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
