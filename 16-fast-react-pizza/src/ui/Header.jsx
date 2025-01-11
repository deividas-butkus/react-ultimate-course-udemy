import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co</Link>
      <SearchOrder />
      <p>Dave</p>
    </header>
  );
}

export default Header;
