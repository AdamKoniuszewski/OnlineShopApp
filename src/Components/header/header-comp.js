import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

//STYLES
import './header-style.scss';

//FIREBASE
import { auth } from '../../Firebase/firebase.utils';

//ROUTER
import { Link } from 'react-router-dom';


//REDUX
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
//COMPONENTS

import CartIcon  from '../cart-icon/cart-icon.comp';
import CartDropdown from '../cart-dropdown//cart-dropdown.comp';



//HEADER COMPONENT

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>        
        <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className='option' to='/contact'>
            CONTACT
            </Link>
            <Link className='option' to='/about'>
            ABOUT
            </Link>
            {currentUser? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signIn'>
            SIGN IN
            </Link>}  
            <CartIcon />
        </div>
        {hidden? null:<CartDropdown />}
    </div>


);

//REDUX STATE
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})


//EXPORT
export default connect(mapStateToProps)(Header);