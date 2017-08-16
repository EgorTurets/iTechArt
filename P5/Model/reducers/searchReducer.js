import { Actions } from '../Actions'


const initialState = {
    searchParams: {
        minPrice: 0,
        maxPrice: 0,
        minMetric: 0,
        maxMetric: 0,
        isForRent: false
    },
    searchResultPart: [],
    resultsCount: 0,
    currentPage: 1
};

export default function searchState(state = initialState, action) {

    switch (action.type) {
        case Actions.SEARCH_INIT: {

            return state;
        }
        case Actions.SEARCH: {

            return Object.assign({}, state, {
                resultsCount: action.payload.resultsCount,
                searchResultPart: action.payload.firstPartOfResults
            })

        }
        case Actions.SEARCH_MIN_PRICE_UPDATE: {
            if (action.payload < 0) {

                return Object.assign({}, state, {
                    searchParams: Object.assign({}, state.searchParams, {
                        minPrice: 0
                    })
                })
            }
            if (action.payload > state.searchParams.maxPrice) {

                return Object.assign({}, state, {
                    searchParams: Object.assign({}, state.searchParams, {
                        minPrice: state.searchParams.maxPrice
                    })
                })
            }

            return Object.assign({}, state, {
                searchParams: Object.assign({}, state.searchParams, {
                    minPrice: action.payload
                })
            })
        }
        case Actions.SEARCH_MAX_PRICE_UPDATE: {
            if (action.payload < state.searchParams.minPrice) {

                return Object.assign({}, state, {
                    searchParams: Object.assign({}, state.searchParams, {
                        maxPrice: state.searchParams.minPrice
                    })
                })
            }

            return Object.assign({}, state, {
                searchParams: Object.assign({}, state.searchParams, {
                    maxPrice: action.payload
                })
            })
        }
        case Actions.SEARCH_MIN_METRIC_UPDATE: {
            if (action.payload < 0) {

                return Object.assign({}, state, {
                    searchParams: Object.assign({}, state.searchParams, {
                        minMetric: 0
                    })
                })
            }
            if (action.payload > state.searchParams.maxMetric) {

                return Object.assign({}, state, {
                    searchParams: Object.assign({}, state.searchParams, {
                        minMetric: state.searchParams.maxMetric
                    })
                })
            }

            return Object.assign({}, state, {
                searchParams: Object.assign({}, state.searchParams, {
                    minMetric: action.payload
                })
            })
        }
        case Actions.SEARCH_MAX_METRIC_UPDATE: {
            if (action.payload < state.searchParams.minMetric) {

                return Object.assign({}, state, {
                    searchParams: Object.assign({}, state.searchParams, {
                        maxMetric: state.searchParams.minMetric
                    })
                })
            }

            return Object.assign({}, state, {
                searchParams: Object.assign({}, state.searchParams, {
                    maxMetric: action.payload
                })
            })
        }
        case Actions.SEARCH_PAGE_CHANGE: {

            debugger;

            let allResults = JSON.parse(window.sessionStorage.getItem('SearchResults'));

            let sliceFrom = (action.payload - 1) * 5;
            let sliceTo = action.payload * 5;
            let partOfSearchResults = allResults.slice(sliceFrom, sliceTo);

            return Object.assign({}, state, {
                currentPage: action.payload,
                searchResultPart: partOfSearchResults
            })
        }
        case Actions.SEARCH_FOR_RENT_CHANGE: {

            return Object.assign({}, state, {
                searchParams: Object.assign({}, state.searchParams, {
                    isForRent: action.payload
                })
            })
        }

        default:
            return state;
    }

}