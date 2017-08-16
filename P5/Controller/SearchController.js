import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../Model/ActionCreators'
import Search from '../View/SearchView'

function mapStateToProps(state) {
    return {
        searchParams : state.searchState.searchParams,
        searchResult : state.searchState.searchResultPart,
        currentPage : state.searchState.currentPage,
        resultsCount : state.searchState.resultsCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        SearchInit: bindActionCreators(ActionCreators.SearchInit, dispatch),
        MinPriceUpdate: bindActionCreators(ActionCreators.SearchMinPriceUpdate, dispatch),
        MaxPriceUpdate: bindActionCreators(ActionCreators.SearchMaxPriceUpdate, dispatch),
        MinMetricUpdate: bindActionCreators(ActionCreators.SearchMinMetricUpdate, dispatch),
        MaxMetricUpdate: bindActionCreators(ActionCreators.SearchMaxMetricUpdate, dispatch),
        Search: bindActionCreators(ActionCreators.SearchNotifications, dispatch),
        PageChange: bindActionCreators(ActionCreators.SearchPageChange, dispatch),
        ForRentChange: bindActionCreators(ActionCreators.SearchForRentChange, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);