import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-button.component';

class SingIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="sign-in">
                <form>
                <h1 className='title'>I already have an account</h1>
                <span>sign in wtih your email and password</span>
                <FormInput label="email" value={email} handleChange="" required />
                <FormInput label="password" value={password} handleChange="" required />
                <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SingIn;