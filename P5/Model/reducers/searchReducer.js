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

            let allNotifications = window.sessionStorage.getItem('AllNotifications');
            if (!allNotifications) {
                allNotifications = [{
                    id: 1,
                    title: 'Title-1',
                    description: 'blah-blah-blau',
                    metric: 100,
                    address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
                    price: 1000000
                }, {
                    id: 2,
                    title: 'Title-2',
                    description: 'ysdf;kb sldgjlk lglrg  lg;gk;fg swghf;wfd',
                    metric: 51245,
                    address: 'rtynvfgf sosgl 5 lskg',
                    price: 100000
                }, {
                    id: 3,
                    title: 'Title-3',
                    description: 'blah-blah-blau',
                    metric: 100,
                    address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
                    price: 1000000
                }, {
                    id: 4,
                    title: 'Title-4',
                    description: 'ubaba-ubaba-ubaba',
                    metric: 80,
                    address: 'sosgl 5 lskg',
                    price: 700000
                }, {
                    id: 5,
                    title: 'Title-5',
                    description: 'blah-blah-blau',
                    metric: 7510,
                    address: '124 hful sosgl 5 lskg',
                    price: 652000
                }, {
                    id: 6,
                    title: 'Title-6',
                    description: 'blah-blah-blau',
                    metric: 321,
                    address: 'Txr Uyt 10 Ioma',
                    price: 3210000
                }];
                window.sessionStorage.setItem('AllNotifications', JSON.stringify(allNotifications));
            }

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