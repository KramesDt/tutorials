'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    Array(n).fill(0).flatMap((_,ind)=>{
        console.log("#".repeat(ind+1).padStart(n," "))
    })
}

function main() {
    const n = 10//parseInt(readLine().trim(), 10);

    staircase(n);
}

staircase(20);