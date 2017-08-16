import { SearchActions } from './SearchActions'






//------Search actions------

export function SearchInit() {



    return {
        type: SearchActions.SEARCH_INIT
    }
}

export function SearchMinPriceUpdate(event) {

    return {
        type: SearchActions.SEARCH_MIN_PRICE_UPDATE,
        payload: +event.target.value
    }
}

export function SearchMaxPriceUpdate(event) {

    return {
        type: SearchActions.SEARCH_MAX_PRICE_UPDATE,
        payload: +event.target.value
    }
}

export function SearchMinMetricUpdate(event) {

    return {
        type: SearchActions.SEARCH_MIN_METRIC_UPDATE,
        payload: +event.target.value
    }
}

export function SearchMaxMetricUpdate(event) {

    return {
        type: SearchActions.SEARCH_MAX_METRIC_UPDATE,
        payload: +event.target.value
    }
}

export function SearchNotifications(event) {
    event.preventDefault();

    debugger;
    let isForRent = event.target.isForRent.value === 'true';

    let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
    let searchResults = allNotifications.filter((item) => {
        return ((item.price >= +event.target.minPrice.value) && (item.price <= +event.target.maxPrice.value) &&
            (item.metric >= +event.target.minMetric.value) && (item.metric <= +event.target.maxMetric.value) &&
            (item.isForRent === isForRent))
    });

    window.sessionStorage.setItem('SearchResults', JSON.stringify(searchResults));
    let firstPartOfResults = searchResults.slice(0, 5);

    return {
        type: SearchActions.SEARCH,
        payload: {
            firstPartOfResults,
            resultsCount: searchResults.length
        }
    }
}

export function SearchPageChange(event) {

    return {
        type: SearchActions.SEARCH_PAGE_CHANGE,
        payload: +event.target.innerText
    }
}

export function SearchForRentChange(event) {

    return {
        type: SearchActions.SEARCH_FOR_RENT_CHANGE,
        payload: event.target.value
    }
}