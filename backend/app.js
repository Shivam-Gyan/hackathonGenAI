import express from 'express';
import cors from 'cors';
import userRoute from './router/user.router.js';
import drRouter from './router/dr.router.js';
import bookRouter from './router/book.router.js';
import cookieParser from 'cookie-parser';

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/api/user',userRoute);
app.use('/api/dr',drRouter)
app.use('/api/book',bookRouter)


export default app;