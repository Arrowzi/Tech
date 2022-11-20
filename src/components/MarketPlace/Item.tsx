import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  height: 100%;
  button {
  }
  img {
    max-height: 250px;
    object-fit: cover;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: FunctionComponent<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
        </div>
        <Button variant="contained" onClick={() => handleAddToCart(item)}><CurrencyRubleIcon />{item.price}</Button>
    </Wrapper >
);

export default Item;