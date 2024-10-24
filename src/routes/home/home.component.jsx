import { Outlet } from "react-router-dom";

import DirectoryItem from "../../components/directory-items/directory-items";
import Slider from '../../components/slides/slide-components'
import Tranding from "../../components/tranding/tranding";

const Home = () => {
  return (
    <>
    <Slider/>
    <Tranding/>
      <DirectoryItem />
      <Outlet />
    </>
  );
};

export default Home;
