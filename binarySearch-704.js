'use strict';


function binarySearch(list, target){
    let count = 0;
    let first = 0;
    let last = list.length - 1;

    while(first <= last){
        let mid = Math.floor((first + last) / 2);
        count++;
        if(list[mid] == target){
            return [count, list[mid]]; 
        }
        else if(list[mid] < target){
            first = mid + 1;
        }
        else {
            last = mid - 1;
        }
    }
    return null;
}

const array = [-1,0,3,5,9,12];
console.log(binarySearch(array, 2));

