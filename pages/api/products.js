import { product } from "@/models/product";
import { mongooseConnect } from "./mongoose";
export default async function handle(req,res){

    const {method} =req;
    await mongooseConnect();
    if(method === "GET"){
        res.json(await product.find());
    }
    if(method==="POST"){
        const {title,description,price} =req.body;
        const productDoc= await product.create({
            title,description,price
        } );
        res.json(productDoc);       
    }
}