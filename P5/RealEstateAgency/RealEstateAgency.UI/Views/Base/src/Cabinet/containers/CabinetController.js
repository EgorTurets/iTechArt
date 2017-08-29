import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions/CabinetActionCreators'
import PersonalCabinet from '../components/PersonalCabinetView'

function mapStateToProps(state) {
    return {
        currentUser : state.userInfoState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        UserInit: bindActionCreators(ActionCreators.UserInit, dispatch),
        Delete: bindActionCreators(ActionCreators.Delete, dispatch),
        LogOut: bindActionCreators(ActionCreators.LogOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);
