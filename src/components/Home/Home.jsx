import { Outlet } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto py-3.5">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
