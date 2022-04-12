import React from 'react'
import SkeletonBox from '../Skeleton/SkeletonBox';
import Grid from "@mui/material/Grid";
function ProductsLoad() {
  return (
    
          <>
            <Grid
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 280px)",
                justifyContent: "center",
              }}
            >
            <SkeletonBox/>
            <SkeletonBox/>
            <SkeletonBox/>
            <SkeletonBox/>
            </Grid>
          </>
      
  )
}

export default ProductsLoad