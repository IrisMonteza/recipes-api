import dotenv from 'dotenv';
dotenv.config();

export default {
  jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost/recipesbd',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
    PORT: process.env.PORT || 3000,
  },
};
