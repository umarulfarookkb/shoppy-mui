import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import ProductViewLoad from "./Loading/ProductViewLoad";
import ShowProduct from "./ShowProduct";
import {useQuery} from 'react-query'

const Product = () => {
  
  let { id } = useParams();
  const fetchProduct=()=>{
    return axios.get(`https://fakestoreapi.com/products/${id}`)
  }
  const {isLoading, data}= useQuery(['product',id],()=>fetchProduct(id))


  return (
    <>
      <Box textAlign="center">{isLoading ? <ProductViewLoad/> : 
      <ShowProduct
       id={data?.data.id}
       image={data?.data.image}
       title={data?.data.title}
       category={data?.data.category}
       price={data?.data.price}
       rating={data?.data.rating && data?.data.rating.rate}
       description={data?.data.description}
      />}</Box>
    </>
  );
};

export default Product;
