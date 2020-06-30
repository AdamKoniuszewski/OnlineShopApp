import React from 'react';

//styles
import './cart-dropdown.style.scss'
//Redux
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
//Selectors
import {createStructuredSelector} from 'reselect' 
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
//Router
import {withRouter} from 'react-router'
//Components
import CustomButton from '../custom-button/custom-button.comp'
import CartItem from '../cart-item/cart-item.comp'

const CartDropdown = ({cartItems, history, total,dispatch}) => {
    console.log({dispatch});
    return (
    <div className={`${cartItems.length? '':'shrink'} cart-dropdown`}>
        {cartItems.length?
        (<div><div className='cart-items'>
            {    
                cartItems.map(cartItem=>
                    <CartItem key={cartItem.id} item={cartItem}/>)
            } 
        
        </div>
        <div className='total'>
            <p>TOTAL: ${total}</p>
        </div>
        <CustomButton buttonPlace='cart' onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())}}> 
            GO TO CHECKOUT
            </CustomButton></div>)
            :
        (<span className='empty-message'>Your cart is empty</span>) 
        }
    </div>
)};


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

