import { Components } from "@mui/material";

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides:{
      "body,html":{
        padding: 0,
        margin: 0,
      },
      "*, *:before, *:after":{
        boxSizing: "border-box"
      }
    }
  },
  MuiInput:{
    defaultProps:{
      disableUnderline: true,
    },
    styleOverrides:{
      root: {
        backgroundColor:"#EFEFEF",
        borderRadius: 46,
        color:"#999999",
        height: "65px",
        padding: 20,
        ":placeholder":{ 
          color:"#999999",
        }
      }
    }
  },
  MuiButton:{
    defaultProps:{
      variant: "primary"
    },
    variants:[
      {
        props: { variant: "primary" },
        style:({theme})=>({
          backgroundColor: theme.palette.primary.main,
          color: "white",
          borderRadius: 46,
          fontWeight: "medium",
          fontSize: "18px",
          lineHeight: "22px",
          padding: "21px",
          ":hover": {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.7
          }
        }),
      },
      {
        props: { variant: "sidebar" },
        style:({theme})=>({
          backgroundColor: "transparent",
          color: "#4D4D4D",
          borderRadius: "12px",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          padding: "16px",
          paddingLeft: "31px",
          justifyContent:"flex-start",
          textTransform:"none",
          gap: 4,
          ":hover,:active, &.is-active": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "svg path": {
              fill: "white"
            },
          }
        }),
      },
    ]
  },
  MuiContainer:{
    styleOverrides:{
      root:{
        display: "grid",
        width: "100vw",
        height: "100vh",
        overflow:"hidden",
        paddingLeft:0,
        paddingRight:0, 
        "@media (min-width: 600px)":{
          paddingLeft:0,
          paddingRight:0, 
        }
      }
    }
  }
};

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    sidebar: true;
  }
}