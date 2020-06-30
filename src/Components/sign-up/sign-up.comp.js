import React from 'react';

import CustomButton from '../custom-button/custom-button.comp';
import FormInput from '../form-input/form-input.comp';
import './sign-up.style.scss';
import {auth, createUserProfileDocument} from '../../Firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;}
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);


            await createUserProfileDocument(user, {displayName});

            this.setState={
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            };
        } catch(error){
            console.error(error);
        }
}

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
       return(<div className='sign-up'>
            <h2>I don't have an account!</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="displayName"
                    type="text"
                    value={displayName} 
                    handleChange={this.handleChange}
                    label="Display Name"
                    required />
                <FormInput 
                    name="email"
                    type="email"
                    value={email} 
                    handleChange={this.handleChange}
                    label="Email"
                    required />
                <FormInput 
                    name="password" 
                    type="password"
                    value={password} 
                    handleChange={this.handleChange}
                    label="Password"
                    required />
                <FormInput 
                    name="confirmPassword" 
                    type="password"
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    label="Confirm Password"
                    required />
                <CustomButton type="submit" >JOIN</CustomButton>
            </form>
       </div> )
    } 
}

export default SignUp;