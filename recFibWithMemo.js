console.log("Start");
function recFibWithMemo(n, memo = {})
{
    // check memoization
    if(n in memo)
        return memo[n];

    // base condition
    if(n <= 2)
        return 1;

    // new state and saving to memo
    //logic to calculate Fib of n and store it in memo for optimization
    memo[n] = recFibWithMemo(n-1, memo) + recFibWithMemo(n-2, memo);

    // all done retrun nth Fib number
    return memo[n];
}

console.log(`about to call recursive fib with memoization`);
console.log(recFibWithMemo(50));