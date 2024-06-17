import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/slices/cartSlice';
import { RootState } from '../redux/store';
import '../styles/CartList.css';

const CartList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemoveItem = (id:number) => {
        dispatch(removeItem(id));
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    const handleClearItem = () => {
        dispatch(clearCart());
    }

    return(
        <div className="p-6 mt-20 cart-container">
            {cartItems.length === 0 ? (
                <div className="cart-empty-container">
                    <div className="cart-empty">
                        <h2>Your ABC Cart is empty</h2>
                        <p>Looks like you haven't added anything to your cart yet.</p>
                        <img src="/images/img7.png" alt="Empty Cart" className="empty-cart-image" />
                        <Link to="/" className="shop-now-link">
                            <button className="shop-now-button">Shop Now</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <h2>Your Cart</h2>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total Price: ${getTotalPrice()}</h3>
                        <button className="clear-cart-button" onClick={handleClearItem}>Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartList;