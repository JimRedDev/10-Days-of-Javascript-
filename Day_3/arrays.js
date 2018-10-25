/*
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
*/


function getSecondLargest(nums) {
    let x = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > x && nums[i] < Math.max(...nums)) {
            x = nums[i];
        }
    }
    return x;
   
}
