import React from 'react'

//Style
import './checkout-page.style.scss'

//Components

//Router

//Redux
import {connect} from 'react-redux'

//Selectors
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../Components/checkout-item/checkout-item.comp'
import CustomButton from '../../Components/custom-button/custom-button.comp'



const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <CustomButton>Check out!</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);