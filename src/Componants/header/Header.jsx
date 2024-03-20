import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center mt-10 gap-4 text-3xl mb-5  text-green-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;
