import { Box } from "@mui/material";

import immunaLogo from "assets/imgs/immuna_logo.svg"; 
export function Header(){
  return (
    <Box sx={{p: 2.5, bgcolor:"white"}} boxShadow="1" gridColumn={"1/13"}>
      <img src={immunaLogo} alt="immuna logo"/>
    </Box>
  );
}