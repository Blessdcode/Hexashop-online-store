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

const Slider = () => {
  return (
    <Container>
      <Slide>
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
