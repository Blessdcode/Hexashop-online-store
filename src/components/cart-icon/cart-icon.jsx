import {AiOutlineShopping} from 'react-icons/ai'


import {CartIconContainer, ItemCount} from './cart-icon.styles'
const CartIcon = ({onClick})=>{
    return (
      <CartIconContainer onClick={onClick}>
        <AiOutlineShopping size={32} />
        <ItemCount>10</ItemCount>
      </CartIconContainer>
    );
}

export default CartIcon