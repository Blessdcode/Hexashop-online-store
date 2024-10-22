import { ACCESSORIES } from "../../shop-data";

const AccessoriesCard = () => {
  if (!ACCESSORIES || !Array.isArray(ACCESSORIES) || ACCESSORIES.length === 0) {
    return <div>No accessories available.</div>;
  }

  return (
    <div>
      {ACCESSORIES.map((product) => {
        // Check if product has id and price fields
        if (!product.id || product.price === undefined) {
          return null; // Skip rendering if product data is invalid
        }

        return (
          <div key={product.id}>
            <p>Price: {product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AccessoriesCard;
