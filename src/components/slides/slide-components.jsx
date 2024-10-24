import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  Container,
  ImgContainer,
  Title,
  SpanEl,
} from "./slide-component.style";

const slideImages = [
  {
    url: "https://i.ibb.co/1dfQ18N/slide-4.png",
    caption: "New Season Styles",
    para: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
  },
  {
    url: "https://i.ibb.co/RcxHcbg/slide-3.png",
    caption: "Big Fashion Festival",
    para: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
  },
  {
    url: "https://i.ibb.co/71Q2BtS/slide-2.png",
    caption: "Best of Styles",
    para: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
  },
];


const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  display: "none",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

const Slider = () => {
  return (
    <Container>
      <Slide {...properties}>
        {slideImages.map(({ url, caption, para }, index) => (
          <ImgContainer key={index} style={{ backgroundImage: `url(${url})` }}>
            <Title>{caption}</Title>
            <SpanEl>{para}</SpanEl>
          </ImgContainer>
        ))}
      </Slide>
    </Container>
  );
};

export default Slider;
