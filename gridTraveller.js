console.log(`Traverse m x n grid recursively with memoization`);
function gridTraveller(m, n, memo = {})
{
    // check memo first
    if(m+n in memo)
        return memo[m+n];

    // base condition 1
    if(m == 0 || n == 0)
        return 0;

    // base condition 2
    if(m == 1 && n == 1)
        return 1;

    // new state logic with memoization to go down and right
    memo[m+n] = gridTraveller(m-1, n) + gridTraveller(m, n-1);
    return memo[m+n];
}

// driver code
let m = 10;
let n = 10;
console.log(`Total possible ways to travel grid ${m} x ${n} is: ${gridTraveller(m,n)}`);