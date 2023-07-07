import Layout from "@/components/Layout";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
    const [price, setPrice ] = useState('');
    const [goToProducts,setGoToProducts] = useState('');
    const router= useRouter();
    
    async function createProduct(ev){
        ev.preventDefault();
        const data={title,description,price};
        await axios.post("/api/products",data)
        setGoToProducts(true);
    }
    if(goToProducts){
        router.push("/Products");
    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New product</h1>
                <label>Product Name:</label>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />
                 
                <label>Description:</label>
                <textarea
                    placeholder="Product description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}>
                </textarea>

                <label>Price in USD:</label>
                <input
                    type="number"
                    placeholder="Price "
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}>
                </input>
                
                <button type="submit" className="btn-primary">Save</button>
            </form>

        </Layout>
    )
}