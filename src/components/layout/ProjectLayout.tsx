import { Outlet } from "react-router";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function ProjectLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
