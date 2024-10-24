import { useEffect, useState } from "react";
import { db } from "../../utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import {
  Container,
  Title,
  ItemCard,
  ItemImage,
  ItemName,
  ItemPrice,
  Footer,FooterContainer
} from "./accesseories.style";

import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Accessories = () => {
  const [trandingItems, setTrandingItems] = useState([]);

  const fetchDataFromFirestore = async () => {
    const collectionRef = collection(db, "tranding");
    try {
      const querySnapshot = await getDocs(collectionRef);
      const data = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setTrandingItems(data);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  return (
    <>
      <Title>Tranding Items</Title>
      <Container>
        {trandingItems.map((item) => (
          <ItemCard key={item.id}>
            <ItemImage src={item.imageUrl} alt={item.name} />
            <FooterContainer>

            <Footer>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>
                {" "}
                <TbCurrencyNaira /> {item.price}
              </ItemPrice>
            </Footer>
            <AiOutlineShoppingCart size={32} />
            </FooterContainer>
          </ItemCard>
        ))}
      </Container>
    </>
  );
};

export default Accessories;
