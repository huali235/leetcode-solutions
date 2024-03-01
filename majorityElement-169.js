/*
    * @param {number []} nums
    * @return {number}
*/

function majorityElement(nums) {
    let hashmap = new Map();

    for(let i = 0; i < nums.length; i++){
        if(hashmap.has(String(nums[i]))){
            let currentValue = hashmap.get(String(nums[i]));
            hashmap.set(String(nums[i]), currentValue + 1);
        } else {
            hashmap.set(String(nums[i]), 1);
        }
    }

    let maxKey = null;
    let maxValue = 0;

    for([key, value] of hashmap){
        if(value > maxValue){
            maxValue = value;
            maxKey = key;
        }
    }

    return Number(maxKey);
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
