import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
  return (
    <div className="text-center">
      <Header></Header>
      <h2 className="text-7xl mb-5">This is home page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
