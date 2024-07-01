import express from "express"
import { addProduct, listProduct } from "../controller/productController.js";

const productRouter=express.Router()

productRouter.post("/add", addProduct)
productRouter.get("/list", listProduct)

export {productRouter}

