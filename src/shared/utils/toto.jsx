import React from 'react';

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {

    return (state = initialState, action) => {

        const reduceFn = reducerMap[action.type];
        if (reduceFn) {
            return reduceFn(state, action);
        } else {
            return state;
        }

    };

}
export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {

        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response) {
    return response.json()
}

export function truncate(str, n, useWordBoundary) {
    var singular, tooLong = str.length > n;
    useWordBoundary = useWordBoundary || true;

    // Edge case where someone enters a ridiculously long string.
    str = tooLong ? str.substr(0, n - 1) : str;

    singular = (str.search(/\s/) === -1) ? true : false;
    if (!singular) {
        str = useWordBoundary && tooLong ? str.substr(0, str.lastIndexOf(' ')) : str;
    }

    return tooLong ? str + '...' : str;
}

export function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export function dynamicSortByTime(array_to_sort) {
    var sortOrder = 1;
    var result = 1;

    array_to_sort.map(function(data,i){
        console.log(data.time);
    })
}