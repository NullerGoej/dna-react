import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, decrementQuantity, deleteItemFromCart } from '../features/cart/cartSlice';
import Loading from './Loading';


function CartItem({ title, price, image, item_id, category_id }) {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const [category, setCategory] = useState(null);
    useEffect(() => {
        fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/item_categories/${category_id}`)
        .then(response => response.json())
        .then(data => setCategory(data))
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        setQuantity(cart[item_id]);
    }, [cart, item_id]);

    const handleAddToCart = () => {
        dispatch(addItemToCart(item_id));
    };

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(item_id));
    };

    const handleDeleteItem = () => {
        dispatch(deleteItemFromCart(item_id));
    };

    if (!category) {
        return (<Loading />);
    }

    return (
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100" src={image} alt={title} style={{objectFit: 'cover', aspectRatio: 1 / 1}} />
                </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{title}</h5>
                            <p className="mb-3 text-muted text-uppercase small">{category.category_name}</p>
                        </div>
                        <div>
                            <div className="def-number-input number-input safari_only mb-0 w-100">
                                <button onClick={handleDecrementQuantity} className="minus">-</button>
                                <input className="quantity" name="quantity" value={quantity} onChange={() => { }} type="number" />
                                <button onClick={handleAddToCart} className="plus">+</button>
                            </div>
                            <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                (Antal)
                            </small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3" onClick={handleDeleteItem}>
                                <i className="fas fa-trash-alt mr-1"></i> Fjern vare
                            </a>
                        </div>
                        <p className="mb-0"><span><strong>${price * quantity}</strong></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;