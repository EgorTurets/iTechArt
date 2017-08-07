import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../Model/ActionCreators'
import PersonalCabinet from '../View/PersonalCabinetView'

function mapStateToProps(state) {
    return {
        currentUser : state.userInfoState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        UserInit: bindActionCreators(ActionCreators.UserInit, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);
