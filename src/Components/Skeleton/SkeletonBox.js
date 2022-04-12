import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function SkeletonBox() {
  return (
    <Box
      sx={{
        m: 3,
        display: "flex",
        alignContent: "center",
      }}
    >
      <Skeleton variant="rectangular" width={280} height={350} />
    </Box>
  );
}

export default SkeletonBox;
