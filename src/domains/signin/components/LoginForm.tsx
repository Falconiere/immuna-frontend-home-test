import { Button, Card, FormControl, FormLabel, Input, Typography } from "@mui/material";
import EthereumLogo from "assets/icons/ethereum_mini_logo.svg";

export function LoginForm() {
  return (
    <Card sx={{ p: 6, minHeight: "654px", width:"100%", maxWidth:"660px", m:"auto"}} >
      <Typography variant="h4" textAlign="center" mt={5}>Welcome to Immuna!</Typography>
      <Typography variant="h5" textAlign="center">
        Connect your wallet
      </Typography>
      <FormControl fullWidth sx={{mt:10}}>
        <FormLabel sx={{ display:"flex", alignItems:"center", gap: 1}}>
          <img src={EthereumLogo} alt="Ethereum logo" />
          Ethereum
        </FormLabel>
        <Input  placeholder="Enter wallet address "/>
        <Button sx={{mt:5}} LinkComponent="a" href="/dashboard/">Connect to Wallet</Button>
      </FormControl>
    </Card>
  );
}