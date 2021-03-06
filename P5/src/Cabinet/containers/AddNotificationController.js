import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions/CabinetActionCreators'
import AddNotificationForm from '../components/AddNotificationView'

function mapStateToProps(state) {
    return {
        currentUser : state.userInfoState,
        newNotification : state.newNotificationState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        TitleUpdate: bindActionCreators(ActionCreators.AddTitleUpdate, dispatch),
        DescriptionUpdate: bindActionCreators(ActionCreators.AddDescriptionUpdate, dispatch),
        AddressUpdate: bindActionCreators(ActionCreators.AddAddressUpdate, dispatch),
        MetricUpdate: bindActionCreators(ActionCreators.AddMetricUpdate, dispatch),
        PriceUpdate: bindActionCreators(ActionCreators.AddPriceUpdate, dispatch),
        AddNotice: bindActionCreators(ActionCreators.AddNotice, dispatch),
        SetProprietor: bindActionCreators(ActionCreators.SetProprietor, dispatch),
        ForRentChange: bindActionCreators(ActionCreators.AddForRentChange, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNotificationForm);
