import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoadng = navigation.state === "loading";

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
