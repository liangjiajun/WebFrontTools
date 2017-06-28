'use strict';

/*
* @each 遍历dom对象元素
 */
var each = function (arr,callback) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if(callback.call(arr[i],i,arr[i])===false){
            break;
        }
    };
    return arr;
}