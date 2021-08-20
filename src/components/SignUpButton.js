import React from 'react';
import './SignUpButton.css';

const SignUpButton = () => {
    return (
        <>
            <button>
                <h1 className="signup"
                    onClick={() => console.log("Signup clicked")} >
                    Sign Up
                </h1>
            </button>
        </>
    )
}

export default SignUpButton
