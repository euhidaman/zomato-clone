import React from 'react';
import './LoginButton.css';

const LoginButton = () => {
    return (
        <>
            <button>
                <h1 className="login"
                    onClick={() => console.log("Login clicked")} >
                    Log In
                </h1>
            </button>
        </>
    )
}

export default LoginButton
