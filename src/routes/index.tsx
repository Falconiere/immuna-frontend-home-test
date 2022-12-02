import {
  BrowserRouter,
  Routes as Switch,
  Route
} from "react-router-dom";

import { Monitor } from "domains/dashboard/screens/Monitor";
import { Login } from "domains/signin/screens/Login";
import { Alerts } from "domains/dashboard/screens/Alerts";
import { Defend } from "domains/dashboard/screens/Defend";
import { Protect } from "domains/dashboard/screens/Protect";

export const Routes =  () : JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Monitor />} />
      <Route path="/dashboard/alerts" element={<Alerts />} />
      <Route path="/dashboard/defend" element={<Defend />} />
      <Route path="/dashboard/protect" element={<Protect />} />
    </Switch>
  </BrowserRouter>
);