import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "react-auth-kit";
import router from "./routes";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider authType={"cookie"} authName={"_auth"} cookieSecure={false}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider>
    </QueryClientProvider>
  </AuthProvider>
);
