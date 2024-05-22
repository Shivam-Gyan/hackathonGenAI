import express from 'express'
import { createDr,getDr,getDrById,allGetDr } from '../controller/dr.controller.js';

const drRouter=express.Router();


drRouter
.post('/create',createDr)
.post('/',getDr)
.post('/get',getDrById)
.get('/',allGetDr)

export default drRouter