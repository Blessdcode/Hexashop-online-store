import { Outlet } from "react-router-dom";

import DirectoryItem from "../../components/directory-items/directory-items";
import Slider from '../../components/slides/slide-components'

const Home = () => {
  return (
    <>
    <Slider/>
      <DirectoryItem />
      <Outlet />
    </>
  );
};

export default Home;
