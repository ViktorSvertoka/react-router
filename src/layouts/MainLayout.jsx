import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import "../App.css";

function MainLayout() {
  return (
    <div className="App">
      <Menu />
      <Suspense fallback={"Loader..."}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MainLayout;
