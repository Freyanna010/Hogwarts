import { routeConfig } from "@config/routeConfig/routeConfig";
import { Spin } from "antd";



import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={<Suspense fallback={<Spin />}>{element}</Suspense>}
      />
    ))}
  </Routes>
);

export default AppRouter;
