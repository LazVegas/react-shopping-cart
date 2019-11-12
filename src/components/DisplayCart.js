import React from 'react'
import { useTogg } from '../Redux-Store/Vendors/T-shirts/actions-reducers'
import ICON from "../lib/icon"

export default function DisplayCart(props) {
    const {toggle,toggler}=useTogg()
    return (
        <div>
        <div className={toggler?"open":"closed"}>
        <span className="bag bag--float-cart" onClick={e=>toggler?toggle(false):toggle(true)}>X</span>
        <span className="bag__quantity">0</span>
        <div className="float-cart__content">
            <div className="float-cart__header">
            <span className="bag">
                <span className="bag__quantity">0</span>
            </span>
            <span className="header-title"></span>
            </div>
            <div className="float-cart-shelf-container">
            <p className="shelf-empty">
                "Add some products in the cart "<br />":)"
            </p>
            </div>
            <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">...</div>
                <p className="sub-price__val">$ 0.00</p>
                <small className="sub-price__installment"></small>
            </div>
            <div className="buy-btn">Checkout</div>
        </div>
        </div>
        <div className="cartImage" onClick={e=>toggler?toggle(false):toggle(true)}><ICON icon="shopping-cart"></ICON></div>
        </div>
    )
}