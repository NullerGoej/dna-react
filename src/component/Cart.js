import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import Footer from './Footer';
import CartItem from './CartItem';


function Cart() {
    const [products, setProducts] = useState(null);

    const cart = useSelector((state) => state.cart);
    const items = Object.keys(cart);

    useEffect(() => {
        fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
    }, []);
    

    if (!products) {
        return (<Loading />);
    }


    let totalPrice = 0;

    items.forEach(id => {
        const item = products.find((p) => p.item_id === parseInt(id));
        totalPrice += item.price * cart[id];
    });

    return (
        <div className="Cart">
            <Navbar />

            <main className="pb-5 py-5 my-5">
                <div className="container">
                    <h1 className="mb-4">Indkøbskurv</h1>
                    <div className="row">
                        <div className="col-md-8">
                            {items.length === 0 && <div className="alert alert-info">Din indkøbskurv er tom</div>}
                            {items.map((id) => {
                                const item = products.find((p) => p.item_id === parseInt(id));
                                return <CartItem key={id} {...item} />;
                            })}
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Subtotal</h4>
                                    <p className="card-text">Total pris: ${totalPrice.toFixed(2)}</p>
                                    <button className="btn btn-primary btn-block">Fortsæt til Betaling</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
export default Cart;