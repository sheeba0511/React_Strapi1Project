import Home from "../pages/Home";
import Login from "../pages/Login ";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
