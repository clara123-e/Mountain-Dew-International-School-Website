import { Routes, Route } from "react-router-dom";
import UnauthLayout from "../layouts/UnauthLayout";
import AuthLayout from "../layouts/AuthLayout";
import { unauthRoutes, authRoutes } from "./routesConfig";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<UnauthLayout />}>
        {unauthRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route element={<AuthLayout />}>
        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoutes;