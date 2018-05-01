import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CredentialsForm from './credentials_form';
import * as userActions from '../../actions/user-actions';

class Signup extends Component {
    formHandler(values) {
        this.props.userActions.createUser(values);
        
    }

    render() {
        return (
            <div>
                <CredentialsForm 
                    formHandler={this.formHandler.bind(this)}
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

