import { Link } from "react-router-dom";

const LinkButton = ({ children, to, onClick }) => {
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (onClick)
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
