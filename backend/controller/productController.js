import productModel from "../model/productModel.js"


export const addProduct=async(req,res)=>{
try {
    const {image, name, description, category, price}=req.body;
    if (!image || !name || !description || !category || !price) {
        return res.status(400)
        .json({success:false, message:"All fields required"})
    }
   

    const product=new productModel({
        image,
        name,
        description,
        category,
        price
    })

const savedProducts=await product.save()

res.status(201)
.json({success:true,savedProducts})
} catch (error) {
    console.log(error);
    res.status(500)
.json({success:false, message:"Error"})
}
}

export const listProduct=async(req,res)=>{
try {
    const product_list=await productModel.find({})
res.json({success:true,data:product_list})
} catch (error) {
 console.log(error);
 res.json({success:false,message:"Error"})
   
}
}