import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import CartItem from './CartItem';
import { Box } from '@mui/material';

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  padding: 50px;
`;

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: FunctionComponent<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    return (
        <Wrapper>
            <h2>Ваша корзина</h2>
            {cartItems.length === 0 ? <p>Корзина пуста.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />

            ))}
            <h2>Итого: ₽{calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
};

export default Cart;