import { RouteProps } from "react-router-dom";
import { lazy } from "react";

export enum AppRoutes {
  HOGWARTS = "hogwarts",
  STUDENT = "student",
  CREATE_STUDENT = "create_student",
  HOUSE = "house",
  FAVORITES = "favorites",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOGWARTS]: "/Hogwarts/",
  [AppRoutes.STUDENT]: "/Hogwarts/students/:id",
  [AppRoutes.CREATE_STUDENT]: "/Hogwarts/students/create-student",
  [AppRoutes.HOUSE]: "/Hogwarts/house/:houseName",
  [AppRoutes.FAVORITES]: "/Hogwarts/students/favorites",
};

const HogwartsPage = lazy(() => import("@pages/HogwartsPage"));
const StudentPage = lazy(() => import("@pages/StudentPage"));
const CreatePage = lazy(() => import("@pages/CreatePage"));
const HousePage = lazy(() => import("@pages/HousePage"));
const FavoritePage = lazy(() => import("@pages/FavoritePage"));

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOGWARTS]: {
    path: RoutePath.hogwarts,
    element: <HogwartsPage />,
  },
  [AppRoutes.STUDENT]: {
    path: RoutePath.student,
    element: <StudentPage />,
  },
  [AppRoutes.CREATE_STUDENT]: {
    path: RoutePath.create_student,
    element: <CreatePage />,
  },
  [AppRoutes.HOUSE]: {
    path: RoutePath.house,
    element: <HousePage />,
  },
  [AppRoutes.FAVORITES]: {
    path: RoutePath.favorites,
    element: <FavoritePage />,
  },
};
