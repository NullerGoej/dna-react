import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

const Item = ({ title, price, image, item_id, description }) => {
  const dispatch = useDispatch();

    return (
      <div className="item">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button type="button" onClick={() => dispatch(addItemToCart(item_id))} className="btn btn-success btn-block">Add to Cart</button>
      </div>
    );
};

export default Item;
