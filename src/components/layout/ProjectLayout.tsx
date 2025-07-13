import { Outlet } from "react-router";
import Header from "../Header";

export default function ProjectLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
