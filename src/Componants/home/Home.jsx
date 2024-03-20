import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>This is home page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
