import { Box, Typography } from "@mui/material";
const colors = {
  "green":{
    color:"#18A002",
    bgcolor:"rgba(40, 202, 13, 0.15)"
  },
  "red":{
    color:"#C92A2A",
    bgcolor:" rgba(202, 13, 13, 0.2)"
  },
  "yellow":{
    color:"#C7B40E",
    bgcolor:"rgba(248, 255, 168, 0.5);"
  }
 
};
export type ILableRiskProps ={
  type: keyof typeof colors
}
export function LabelRisk({type}:ILableRiskProps){
  const { color, bgcolor}= colors[type];
  return (
    <Box 
      sx={{
        borderRadius: 30,
        p:1,
        width: "100px",
        bgcolor
      }}
    >
      <Typography textTransform="capitalize" color={color} textAlign="center">{type}</Typography>
    </Box>
  );
}