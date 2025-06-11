import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/menuLoader";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/createOrderAction";
import Order from "./features/order/Order";
import { loader as orderLoadar } from "./features/order/orderLoader";
import { action as updateOrderAction } from "./features/order/UdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          loader: orderLoadar,
          element: <Order />,
          errorElement: <Error />,
          action: updateOrderAction,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
