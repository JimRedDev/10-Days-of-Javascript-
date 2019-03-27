// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// Finds the initial values of  and  by plugging the area and perimeter values into the formula:
// where  is the rectangle's area and  is its perimeter.
// Creates an array consisting of  and  and sorts it in ascending order.
// Returns the sorted array.

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

 
function sides(literals, ...expressions) {
    const [A, P] = expressions;
    const s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    const s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    return [s1, s2].sort();
}