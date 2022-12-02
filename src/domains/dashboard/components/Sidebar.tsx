import { Box, Button } from "@mui/material";
import immunaLogo from "assets/imgs/immuna_logo.svg"; 

import { ReactComponent as DashboardIcon} from "../assets/icons/dashboard.svg";
import { ReactComponent as AlertsIcon} from "../assets/icons/alerts.svg";
import { ReactComponent as DefendIcon} from "../assets/icons/defend.svg";
import { ReactComponent as ProtectIcon} from "../assets/icons/protect.svg";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    href: "/dashboard/",
    text: "Dashboard",
    Icon:DashboardIcon
  },
  {
    href: "/dashboard/alerts",
    text: "Alerts",
    Icon:AlertsIcon
  },
  {
    href: "/dashboard/defend",
    text: "Defend",
    Icon:DefendIcon
  },
  {
    href: "/dashboard/protect",
    text: "Protect",
    Icon: ProtectIcon
  }
];

export function Sidebar(){
  const location = useLocation();
  return (
    <Box p={4} bgcolor="white" alignItems="center" display="flex" flexDirection="column">
      <img src={immunaLogo} alt="immuna logo" width="200"/>
      <Box width={"100%"} display="flex" flexDirection="column" gap={2} pt={8}>
        {links.map(({Icon,href,text}, index) => (
          <Button
            key={`side-link-${index}`} 
            variant="sidebar" 
            component={Link} 
            to={href}
            className={location.pathname === href ? "is-active" : ""}
            startIcon={
              <Icon />
            }
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
}