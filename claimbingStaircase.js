function callMe()
{
    // claimbing staircase of n steps and up to max k steps at a time
    // return all possible sequence sorted 
    // input
    let n = 4;
    let k = 3;

    // output
    let possibleSequences = [];
    //let sSeq = [];

    let findPossibleSequences = function (ts, k, sSeq = []) {
        // to begin test how sSeq will look like
        // base condition
        if(ts == 0)
        {
            return 0;
        }

        for(let steps=1; steps<=k; steps++)
        {
            sSeq.push(steps);
            const retVal = findPossibleSequences(ts-steps, k, sSeq);
            if(retVal == 0)
            {
                possibleSequences.push(sSeq.slice());
                sSeq.pop();
                break;
            }
        }
        sSeq.pop(); // to go one level up in tree after trying all steps
    };

    findPossibleSequences(n, k);
    console.log(possibleSequences);

}

callMe();

/*
// define recursive function - implement memoization later
let findPossibleSequences = function (totalSteps, array) {
    // total steps to claimb, array will have 1 to max steps can be taken at a time
    // base conditions
    if(totalSteps == 0)
    {
        return 0;
    }

    // new state and build results
    // iterate steps array to find all possible sequences
    //console.log(array);
    for(let i=0; i<array.length; i++)
    {
        const steps = array[i];
        const remainingSteps = totalSteps - steps;
        console.log(`steps=${steps} total steps = ${totalSteps} remaining steps = ${remainingSteps}`);
       if(remainingSteps >= 0)
       {
            singleSequence.push(steps);
            findPossibleSequences(remainingSteps, array);
            possibleSequences.push(singleSequence.slice());
            console.log(singleSequence);
            //return;
        }
       else
       {
            console.log(`about to pop`);
            singleSequence.pop();
            console.log(singleSequence);
       }

       if(i == array.length-1)
       {
            if(remainingSteps == 0)
            {
                console.log(`popping at end of array`);
                singleSequence.pop();
                console.log(singleSequence);
            }
       }
    }
    return;
};

let array = new Array(k);
for(let i=0; i<k;i++)
{
    array[i] = i+1;
}

findPossibleSequences(n, array);
console.log(possibleSequences);

*/