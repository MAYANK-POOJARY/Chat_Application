import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import ChatLayout from "../layouts/ChatLayout";
import { useAuth } from "../../features/auth/hook/useAuth";
import { useEffect } from "react";
import ProtectedRoute from "./protected.route";
import PublicRoute from "./public.route"

const AppRoutes = () => {
  const { handleGetMe } = useAuth();
  useEffect(() => {
    handleGetMe()
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/chat",
      element: <ProtectedRoute />,
      children:[
        {
          path: "",
          element: <ChatLayout />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
