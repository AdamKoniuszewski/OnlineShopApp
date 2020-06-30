import React from 'react';

import './custom-button.style.scss';



const CustomButton = ({children, buttonPlace, ...otherProps}) => (
    <button className={`${buttonPlace? buttonPlace:''} custom-button`} {...otherProps}>{children}</button>
);

export default CustomButton;



