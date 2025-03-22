import { Outlet } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
