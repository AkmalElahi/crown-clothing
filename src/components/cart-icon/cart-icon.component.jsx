import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
    <div className="cart-icon">
        <ShoppingBag className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">{cartItemsCount}</span>
    </div>
)

const mapStateToProps = state => ({
    cartItemsCount: selectCartItemsCount(state)
})
const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToprops)(CartIcon)