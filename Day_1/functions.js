/*
 * Create the function factorial here
 */

function factorial(num) {
    let result = num;
    if (num === 0) {return 1};
    for (var i = num - 1; i >= 1; i--) {
       result *= i; 
    }
    return result;
} 

// With recursion
/*
function factorial(num) {
    if (num === 0) { return 1};
    return num * factorial(n-1);
}
*/