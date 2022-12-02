import React from "react";
import { Avatar, Box, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";
import { InputSearch } from "components/InputSearch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props ={ 
  value?: string;
  onChange: (value: string) => void;
}
export function HeaderSearchBar({value,onChange}:Props){
  const [open, setOpen] = React.useState(false);
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef<boolean>(open);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Box 
      bgcolor="white" 
      alignItems="center" 
      px={2} 
      py={1} 
      boxShadow="0px 1px 10px rgba(74, 74, 74, 0.07)" 
      paddingX={4} 
      flexDirection="row" 
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" gap="55px">
        <Typography variant="h6">Dashboard</Typography>
        <InputSearch 
          value={value}
          onChange={onChange}
        /> 
      </Box>
      <Button 
        sx={{
          display:"flex",
          alignItems:"center",
          gap:2,
          border: 0,
          textTransform:"none",
          color:"#2C2C2C",
          "&:hover":{
            border: 0,
          }
        }}
        variant="outlined"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <NotificationsIcon  htmlColor="#62688F" fontSize="medium" />
        <Avatar sx={{ width: 32, height: 32 }}/>
        <Typography variant="body1">Betty Copper</Typography>
        <KeyboardArrowDownIcon  />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
        sx={{
          zIndex: 10
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}