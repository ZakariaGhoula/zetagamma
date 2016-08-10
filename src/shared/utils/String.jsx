import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


export function  parseQueryString( queryString ) {
    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    queries = queryString.split("&amp;");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }

    return params;
};

export function ucfirst(str) {
    //  discuss at: http://phpjs.org/functions/ucfirst/
    // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // bugfixed by: Onno Marsman
    // improved by: Brett Zamir (http://brett-zamir.me)
    //   example 1: ucfirst('kevin van zonneveld');
    //   returns 1: 'Kevin van zonneveld'

    str += '';
    var f = str.charAt(0)
        .toUpperCase();
    return f + str.substr(1);
}

export function all_items_present(str, items) {
    var i;
    var found = true;

   var len_items = items.length;

 var retour =[];
     for (i = 0; i < len_items; i++) {
         var length_message  = items[i].messages.length;
         var j;
         for (j = 0; j < length_message; j++) {
             if (items[i].messages[j].user.first_name.toLowerCase().includes(str.toLowerCase())
                 ||
                 items[i].messages[j].user.last_name.toLowerCase().includes(str.toLowerCase())
                 ||
                 (items[i].messages[j].user.last_name.toLowerCase()+" "+items[i].messages[j].user.first_name.toLowerCase()).includes(str.toLowerCase())
                 ||
                 (items[i].messages[j].user.first_name.toLowerCase()+" "+items[i].messages[j].user.last_name.toLowerCase()).includes(str.toLowerCase())

             ) {
                 retour.push(items[i])
                 break;
             }
         }

    }

    return retour;
}