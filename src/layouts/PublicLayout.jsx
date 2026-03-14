import { Outlet } from "react-router";
// import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Navbars from "../components/shared/Navbars";

export default function PublicLayout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbars />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
