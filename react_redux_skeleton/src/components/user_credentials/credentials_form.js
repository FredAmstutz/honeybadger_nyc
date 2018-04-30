import React from 'react';

const CredentialsForm = ({ action, handler }) => {
    return (
        <form action={action} method='POST' onSubmit={handler}>
            <input className="email-input" placeholder='email'/>
            <input className="password-input" placeholder='password' type='password'/>
            <button className="credentials-submit">Submit</button>
        </form>
    )
}

export default CredentialsForm;