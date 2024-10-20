import {
  DropdownComponent,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  return (
    <DropdownComponent>
      <CartItems>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </CartItems>
    </DropdownComponent>
  );
};

export default CartDropdown;
