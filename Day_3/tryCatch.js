// Complete the reverseString function; it has one parameter, s. You must perform the following actions:

// Try to reverse string s using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.


/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
       s = s.split('').reverse().join("");
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}