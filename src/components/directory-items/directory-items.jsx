import { Fragment } from "react";
import { useNavigate } from "react-router-dom";


import { CATEGORIES } from "../../shop-data";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  DirectoryContainer,
  ImageBody,
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  Title,
} from "./directory.styles";

const DirectoryItem = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Title>Shop by category</Title>

      <DirectoryContainer>
        {CATEGORIES.map(({ title, image, route, id }) => (
          <DirectoryItemContainer key={id} onClick={() => navigate(route)}>
            <BackgroundImage>
              <ImageBody src={image} alt={"directory-img"} />
            </BackgroundImage>
            <Body>
              <h2>{title}</h2>
              <Button buttonType={BUTTON_TYPE_CLASSES.outline}>Shop Now</Button>
            </Body>
          </DirectoryItemContainer>
        ))}
      </DirectoryContainer>
    </Fragment>
  );
};

export default DirectoryItem;
