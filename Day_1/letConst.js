function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const r = parseFloat(readLine());
    const PI = Math.PI;
    // Print the area of the circle:
    console.log(PI * Math.pow(r, 2));
    // Print the perimeter of the circle:
    console.log(2 * PI * r);
}