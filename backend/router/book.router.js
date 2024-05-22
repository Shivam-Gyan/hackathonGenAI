import express from 'express'
import { createBook } from '../controller/book.controller.js';

const bookRouter=express.Router();


bookRouter
.post('/create',bookRouter)

export default bookRouter