import React from 'react';

import SignUp from '../../Components/sign-up/sign-up.comp'
import SignIn from '../../Components/sing-in/sign-in.comp'
import './sign-in-and-sign-up.style.scss';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

);


export default SignInAndSignUpPage;