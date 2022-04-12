import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductsLoad from "./Loading/ProductsLoad";
import ShowProducts from "./ShowProducts";
import {useQuery} from 'react-query'

const Products = () => {

  const fetchProducts=()=>{
    return axios.get("https://fakestoreapi.com/products")
}
  const {isLoading, data}= useQuery('products',fetchProducts)

  return (
    <>
      <Box textAlign="center" sx={{ display: { xs: "block" } }}>
        <Typography gutterBottom variant="h3" component="div">
          Latest Products
        </Typography>
      </Box>
      <hr />

      <Box textAlign="center">{isLoading ? <ProductsLoad/> : 
      <ShowProducts 
      data={data}
      />}</Box>
    </>
  );
};

export default Products;
