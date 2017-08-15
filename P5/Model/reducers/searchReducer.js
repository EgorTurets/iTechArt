import { Actions } from '../Actions'


const initialState = {
    searchParams: {
        minPrice: 0,
        maxPrice: 0,
        minMetric: 0,
        maxMetric: 0
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

            debugger;

            let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
            let searchResults = allNotifications.filter((item) => {
                return ((item.price >= state.searchParams.minPrice) && (item.price <= state.searchParams.maxPrice) &&
                        (item.metric >= state.searchParams.minMetric) && (item.metric <= state.searchParams.maxMetric))
            });

            window.sessionStorage.setItem('SearchResults', JSON.stringify(searchResults));

            return Object.assign({}, state, {
                resultsCount: searchResults.length,
                searchResultPart: searchResults.slice(0, 5)
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

        default:
            return state;
    }

}