import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.component.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-button.component';

export class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: "",
            password: "",
            confirmPassword: ""

        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("passwords are not same")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className="sign-up">
                <span className="title">I don't have an account</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        label="Display Name"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
