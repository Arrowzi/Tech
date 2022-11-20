import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Button } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom:20px;
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 100px;
    
    object-fit: cover;
    margin-left: 40px;
  }
`;

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: FunctionComponent<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
      <img src={item.image} alt={item.title} />
        <div style={{width:"1600px"}}>
            
            <h3>{item.title} - Цена: ₽{item.price} </h3>
            <div style={{width:"200px", height:"50px"}} className='buttons'>
                <Button  variant='contained' onClick={() => removeFromCart(item.id)}>-</Button>
                <p>{item.amount}</p>
                <Button  variant='contained' onClick={() => addToCart(item)}>+</Button>
            </div>          
        </div>
    </Wrapper>
);

export default CartItem;