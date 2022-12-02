import { DashboardLayout } from "../containers/DashboardLayout";
import { MonitorData } from "../containers/MonitorData";

export function Monitor(){
  return (
    <DashboardLayout>
      <MonitorData  />
    </DashboardLayout>
  );
}