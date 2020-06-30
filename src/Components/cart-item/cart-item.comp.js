import React from 'react'


//styles
import './cart-item.style.scss'
import { connect } from 'react-redux';


const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);


export default connect()(CartItem);