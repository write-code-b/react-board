import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

const Routes = () => {
  const { token } = useAuth();

  //전체 공개 페이지
  const routesForPublic = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  //로그인 인증시 공개 페이지
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  //로그인 미인증시 공개 페이지
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter([...routesForPublic, ...(!token ? routesForNotAuthenticatedOnly : []), ...routesForAuthenticatedOnly]);

  return <RouterProvider router={router} />;
};

export default Routes;
