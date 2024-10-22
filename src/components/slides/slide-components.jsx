import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { sliderItems } from '../../shop-data'

import {Container, Arrow, Slide, ImgContainer, InfoContainer, Title, Desc, Button, Wrapper, Image} from './slide-component.style'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };


    setTimeout(handleClick, 4000)


    return (
        <Container>
            {/* <Arrow direction="left" onClick={() => handleClick("left")}>
                <AiOutlineArrowLeft />
            </Arrow> */}
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            {/* <Arrow direction="right" onClick={() => handleClick("right")}>
                <AiOutlineArrowRight />
            </Arrow> */}
        </Container>
    )
}

export default Slider
