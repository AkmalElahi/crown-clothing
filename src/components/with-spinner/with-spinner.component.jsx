import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';


const WithSpinner = WrapperComponent => {
    const Spinner = ({ isloading, ...otherProps }) => {
    return isloading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) :
        (
            <WrapperComponent {...otherProps} />
        )
}
return Spinner
}

export default WithSpinner