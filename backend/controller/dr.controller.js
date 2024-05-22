import DrModel from "../model/dr.model.js";

export const createDr=async(req,res)=>{
    const data=await DrModel.create({...req.body})
    console.log(data)
    res.json(data)
}
export const getDr=async(req,res)=>{
    const {prompt}=req.body;
    const data=await DrModel.find({specialization: prompt})
    // console.log(data)
    res.json(data)
}
export const allGetDr=async(req,res)=>{
    const data=await DrModel.find({})
    res.json(data)
}


export const getDrById=async(req,res)=>{
    console.log(req.body._id)
    const _id=req.body._id
    const data=await DrModel.findOne({_id})
    res.json(data)
}