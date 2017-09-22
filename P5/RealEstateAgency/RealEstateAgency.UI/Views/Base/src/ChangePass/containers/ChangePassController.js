import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions/ChangePassActionCreators'
import ChangePass from '../components/ChangePassView'

function mapStateToProps(state) {
    return {
        changePassState : state.changePassState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ChangePassInit: bindActionCreators(ActionCreators.ChangePassInit, dispatch),
        PasswordUpdate: bindActionCreators(ActionCreators.PasswordUpdate, dispatch),
        ConfirmUpdate: bindActionCreators(ActionCreators.ConfirmUpdate, dispatch),
        SubmitForm: bindActionCreators(ActionCreators.ChangePassSubmit, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);
