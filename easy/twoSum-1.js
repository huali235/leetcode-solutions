/**
    * @param {number []} nums
    * @param {number} target
    * @return {number[]}
*/
function twoSum(nums, target){
    let hashmap = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(hashmap.has(diff)){
            return [hashmap.get(diff), i]
        }
        hashmap.set(nums[i], i);
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))

