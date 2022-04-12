import React from 'react';
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function ProductViewLoad() {
  return (
    <>
        <Box
          sx={{
            
            p: 4,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Skeleton
            
            variant="rectangular"
            width={500}
            height={300}
          />
        </Box>
        <Skeleton
          sx={{
            m: 3,
          }}
          variant="rectangular"
          width={1500}
          height={30}
        />
        <Skeleton
          sx={{
            m: 3,
          }}
          variant="rectangular"
          width={900}
          height={30}
        />
        <Skeleton
          sx={{
            m: 3,
          }}
          variant="rectangular"
          width={100}
          height={30}
        />
      </>
  )
}

export default ProductViewLoad