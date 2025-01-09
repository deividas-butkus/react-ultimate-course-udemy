import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/menuLoader";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // Opt into startTransition behavior
      v7_relativeSplatPath: true, // Opt into relative splat path behavior
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
