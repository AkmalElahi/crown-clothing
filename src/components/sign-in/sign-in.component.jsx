import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SingIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }


    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                    <h1 className='title'>I already have an account</h1>
                    <span>sign in wtih your email and password</span>
                    <FormInput
                        type="email"
                        label="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        type="password"
                        label="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SingIn;