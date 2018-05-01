import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CredentialsForm = props => {
    const { handleSubmit, formHandler } = props;

    return (
        <form onSubmit={handleSubmit(formHandler)}>
            <Field name='email' component='input' placeholder='email' type='email'/>
            <Field name='password' component='input' placeholder='password' type='password'/>
            <button className="credentials-submit" type="submit">Submit</button>
        </form>
    )
}

CredentialsForm = reduxForm({
    form: 'userCredentials'
})(CredentialsForm);

export default CredentialsForm;