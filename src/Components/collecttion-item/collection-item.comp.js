import React from 'react';
import {connect} from 'react-redux'
import {addItem } from '../../redux/cart/cart.actions'

import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.comp.js'


const CollectionItem = ({item, addItem}) => {
        const {name, imageUrl, price } = item;
        return (
        
        <div className='collection-item'>
                <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
                >
                <CustomButton buttonPlace="cartW" onClick={() => addItem(item)}> ADD TO CART</CustomButton>
                </div>
                
                <div className='collection-footer'>
                        <span className='item-name'>{name}</span>
                        <span className='item-price'>${price}</span>
                </div>
                
        </div>
)};

const mapDispatchToProps = dispatch => ({
        addItem: item => dispatch(addItem(item))

})

export default connect(null, mapDispatchToProps)(CollectionItem);