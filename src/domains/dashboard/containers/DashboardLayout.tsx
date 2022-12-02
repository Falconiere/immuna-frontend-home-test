import {  Box, Grid } from "@mui/material";
import { useState } from "react";
import { HeaderSearchBar } from "../components/HeaderSearchBar";
import { Sidebar } from "../components/Sidebar";

export function DashboardLayout({children}:{children: React.ReactNode}){
  const [searched,setSearched] = useState("");
  return (
    <Grid container 
      sx={{ 
        backgroundColor:"background.default", 
        width: "100vw", 
        height:"100vh",
        display: "grid",
        flexDirection: "column",
        gridTemplateColumns:"270px calc(100% - 270px)",
        overflow: "hidden"
      }}
    >
      <Sidebar  />
      <Grid 
        container 
        sx={{ 
          width: "100%", 
          display:"grid", 
          gridTemplateRows:"65px calc(100% - 65px)"
        }}>
        <HeaderSearchBar  value={searched} onChange={setSearched}/>
        <Box px={4} py={2}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}