import {createBrowserRouter} from "react-router-dom";
import {RequireAuth} from "react-auth-kit";
import NotFound from "@/pages/NotFound";
import BlockRoute from "./BlockRoute";
import Login from "@/pages/Login";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth loginPath="/auth/login">
        <App />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/auth/login",
    element: (
      <BlockRoute>
        <Login />
      </BlockRoute>
    ),
  },
]);

export default router;
