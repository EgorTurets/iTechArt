import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../Model/ActionCreators'
import AddNotificationForm from '../View/AddNotificationView'

function mapStateToProps(state) {
    return {
        currentUser : state.userInfoState,
        newNotification : state.newNotificationState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        TitleUpdate: bindActionCreators(ActionCreators.TitleUpdate, dispatch),
        DescriptionUpdate: bindActionCreators(ActionCreators.DescriptionUpdate, dispatch),
        AddressUpdate: bindActionCreators(ActionCreators.AddressUpdate, dispatch),
        MetricUpdate: bindActionCreators(ActionCreators.MetricUpdate, dispatch),
        PriceUpdate: bindActionCreators(ActionCreators.PriceUpdate, dispatch),
        AddNotice: bindActionCreators(ActionCreators.AddNotice, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNotificationForm);
