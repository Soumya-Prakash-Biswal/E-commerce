import Layout from "@/components/Layout"
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

export default function Products() {
  useEffect(()=>{
    axios.get("api/products")
    .then(res =>{
      console.log(res.data);
    });
  },[])
  return (
   <Layout>
     <Link className="bg-blue-900 text-white px-2 py-1 rounded-md" href={"/Products/new"}>
      Add new product
     </Link>
   </Layout>)
}