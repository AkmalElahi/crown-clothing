import React from 'react';
import './checkout-item.styles.scss';
import { removeCartItem, addItem, removeItem } from '.././../redux/cart/cart-actions'
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {

    const { name, price, quantity, imageUrl } = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price"> ${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>)
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(removeCartItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)