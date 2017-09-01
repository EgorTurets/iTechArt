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

    let jsonForm = JSON.stringify({
        MinPrice: +event.target.minPrice.value,
        MaxPrice: +event.target.maxPrice.value,
        MinMetric: +event.target.minMetric.value,
        MaxMetric: +event.target.maxMetric.value,
        ForRent: event.target.isForRent.value === 'true'
    });

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'API/Listing/SearchListing', false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(jsonForm);

    if(xhr.status !== 200) {

        return {
            type: SearchActions.SEARCH,
            payload: {
                message: 'Server error'
            }
        }
    }

    let searchResults = JSON.parse(xhr.responseText);

    return {
        type: SearchActions.SEARCH,
        payload: {
            searchResults,
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