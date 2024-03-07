/* The while loop

syntax:
while (condition){
    // loop body
}
-> while the condition is true, the code from the loop body is executed

*/

let i = 0

while (i < 3) {
    console.log(i) //0, 1, 2
    i++
}

/*
The condition check can be moved below the loop body using the do while loop

do {
    // loop body
} while(condition)

The do while syntax/loop is used when you want the body of loop to execute at least once regardless of the condition being true
*/

do {
    console.log(i)
    i++
} while (i < 3)