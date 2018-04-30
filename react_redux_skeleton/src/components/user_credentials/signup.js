import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CredentialsForm from './credentials_form';
import * as userActions from '../../actions/user-actions';

class Signup extends Component {
    handleSubmit() {
        e.preventDefault();
        const formBody = new FormData(e.target);
    }

    render() {
        return (
            <div>
                <CredentialsForm 
                    handler={this.handleSubmit.bind(this)}
                    action={'./users/signup'}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        routerProps: bindActionCreators({ changePage: () => { push('/') }, dispatch}),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

