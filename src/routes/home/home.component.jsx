import { Outlet } from "react-router-dom";

import DirectoryItem from "../../components/directory-items/directory-items";

const Home = () => {
  return (
    <>
      <DirectoryItem />
      <Outlet />
    </>
  );
};

export default Home;
