import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../Footer";

export default function ProjectLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
