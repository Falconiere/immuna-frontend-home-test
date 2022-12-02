import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { LabelRisk } from "./LabelRisk";

import { IAssetTable } from "../containers/MonitorData";

type Props ={
  open: boolean,
  onClose: () => void,
  data?: IAssetTable
}
export function ModalDetailAsset({open,onClose, data}:Props){
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor:"white",
          margin: "auto",
          maxWidth: "960px",
          borderRadius:"8px"
        }}
      >
        <Grid container px={4} py={2} justifyContent="space-between" alignItems="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Status
          </Typography>
          <Button variant="text" sx={{p:0, m:0, minWidth: 0}} onClick={onClose}>
            <CancelIcon htmlColor="#B3B3B3"/>
          </Button>
        </Grid>
        <Divider sx={{width:"100%"}}  />
        <Grid container px={4} py={2} >
          <Grid container gap={4} alignItems="center">
            <Typography variant="h6">Risk Status</Typography>
            <LabelRisk  type={data?.status ?? "red"}/>
          </Grid>
        </Grid>
        <Grid container px={2} py={2} sx={{backgroundColor:"#F5F5F5", borderRadius:"8px", mx:2}} gap={4}>
          <Grid container justifyContent="space-between">
            <Box>
              <Typography variant="body2">Trigger:</Typography>
              <Typography variant="body1">The asset's risk profile has changed significantly.</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Event Summary</Typography>
              <Typography variant="body1">A significant amount of Compound were transferred.</Typography>
            </Box>
          </Grid>
          <Grid container>
            <Typography variant="body2">Details:</Typography>
            <Typography variant="body1">
              [Token % out of the entire circulation] 0.58% were transferred. 
              A significant movement is detected when there are more than 1% of the 
              tokens in circulation that were moved in a single transaction. 
              Such a significant movement usually triggers movements in the asset's price and therefor should be monitored closely.
            </Typography>
          </Grid>
        </Grid>
        <Button 
          sx={{
            minWidth:"220px", 
            py:2, 
            fontSize:"16px", 
            textTransform:"none", 
            borderRadius:"46px",
            mx:"auto",
            my: 4
          }}
          onClick={onClose}
        >
          Continue
        </Button>
      </Grid>
    </Modal>
  );
}