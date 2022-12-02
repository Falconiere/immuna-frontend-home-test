import { Container, Grid } from "@mui/material";
import { Header } from "domains/signin/components/Header";

import loginIllustration from "domains/signin/assets/imgs/login_bg.png";
export function SigninLayout({children}:{children:React.ReactNode}){
  return (
    <Container maxWidth={false} 
      sx={{
        gridTemplateRows: "65px calc(100% - 20px)",
        gridTemplateColumns:"repeat(12,1fr)",
      }}>
      <Header  />
      <Grid 
        container 
        display="grid" 
        m={0} 
        p={0} 
        sx={{ 
          gridTemplateRows:"calc(100vh - 65px)",
          gridTemplateColumns:"repeat(12,1fr)",
          gridColumn:"1/13", gridRow: "100%"
        }}
      >
        <Grid
          item
          display="grid" 
          gridColumn={"1/7"} 
          sx={{ 
            background:`url(${loginIllustration}) no-repeat center`, 
            backgroundSize:"cover"
          }}
        />
        <Grid item display="grid" gridColumn={"7/13"} p={6}>{children}</Grid>
      </Grid>
    </Container>
  );
}