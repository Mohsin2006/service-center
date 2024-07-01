import express from "express"
import cors from "cors"
import { dbConnect } from "./config/config.js";
import { productRouter } from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import multer from "multer";
const port=5000;
const app=express();
const storage=multer.diskStorage({
    destination:function(req,file,cb){
    return cb(null, "./uploads");
    },
    filename:function(req,file,cb){
return cb(null, `${Date.now()}-${file.originalname}`)
    },
})
const upload=multer({storage})

app.use(cors())
app.use(express.json());
//  const upload=multer({dest:"uploads/"})
app.use("/api/product",productRouter)
app.use("/api/user", userRouter)
app.use(express.urlencoded({extended:false}))

app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")

})


dbConnect()



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});