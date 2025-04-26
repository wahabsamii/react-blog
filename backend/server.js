import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();
const dbString = process.env.MONGODB;
mongoose
  .connect(dbString)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    // console.log(err);
    console.log("Not connected")
  });

const __dirname = path.resolve();

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // your local frontend
  // 'https://your-frontend.vercel.app', // your deployed frontend
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // if you are sending cookies
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(cookieParser());

app.get('/', (req,res) => {
  res.send('Hello Blogs Server');
})
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

export default app;
// app.listen(3000, () => console.log("Server is run"))

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
