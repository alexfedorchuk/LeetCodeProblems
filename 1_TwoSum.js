/*
*  @param {Array} nums
*  @param {Number} target
*  @return {Array[index, index]
*/

// Did it myself
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Prematurely looked into the solution :(
function twoSumMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i);
  }
}

console.log(twoSumMap([2, 7, 11, 15], 22));
