const message = 'Node Puzzles';
console.log(message, 'from Gitpod!');



const runSequ = () =>{
    // Find the length of longest continuous subarray within an array (containing at least one number) whose sum equals zero.
    // For example, given the array [1,0,-1,2],`
    // The longest continuous subarray of zero-sum is [1,0,-1] which has length = 3
    let arr = [];
    const findSqu = (arr) =>{
        let count = 0;
        let maxCount = 0, maxStart = 0, sum = 0;
    for (let i=0;i<arr.length;i++){
            count=1;

            while((count + i) <= arr.length){
                sum = arr.slice(i, i+count).reduce((sum, item) => sum + item);
                if (sum === 0 && count > maxCount ){
                    maxCount = count;
                    maxStart = i;

                }
                // console.log(`Sum: ${sum}, Start: ${maxStart} End: ${maxStart + maxCount} arr: [${arr.slice(i, i+count)}]`);
                count = count +1 ;
            }
        }
        return {start: maxStart, count: maxCount}
    };

    const printResult = (arr, result) =>{
        console.log(arr.toString());
        if (result.count > 0){
            console.log(`   Max squence is ${arr.slice(result.start, result.start + result.count )} starting at index ${result.start}`)
        }else{AC
            console.log('   None found')
        }
    }


        arr = [1,0,-1,2];
        // console.log(arr);
        printResult(arr, findSqu(arr));

        arr = [0,-1,2,0,-1,2,1,0,0,0,0,0,0,0,-1,2];
        // console.log(arr);
        printResult(arr, findSqu(arr));

        let min = -3, max = 3, n =20;
        arr = Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
        printResult(arr, findSqu(arr));

        min = -4; max = 4; n = 30;
        arr = Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
        printResult(arr, findSqu(arr));
    }


const leastCommonMutl = (arr) => {
    // Given an array of positive integers, compute the least common multiple.

    // Input: [4, 6, 10]
    // Output: 60
    const gcd = (a, b) =>{
        if (b === 0){
            return a;
        }else{
            return gcd(b, a%b);
        }
    }
    const lcm = (a, b) => {
        return (a*b)/gcd(a, b);
    }
    const getLCM = (arr) =>{
        let resultArr = []
        for (let i=0; i< arr.length - 1; i++){
            for (let t=i+1; t<arr.length;t++){
                let result = lcm(arr[i], arr[t]);
                // console.log(`lcm of ${arr[i]} and ${arr[t]} is ${result}`);
                resultArr.push(result);
            }

        }
        // console.log(`resultArr: [${ resultArr}]`);
        if (!resultArr.reduce((a, b) => { return (a === b) ? a : NaN; })){
            getLCM (resultArr);
        }else{
            console.log(`LCM = ${resultArr[0]}`);
            return;
        }


    }
    console.log(arr);
    getLCM(arr);

}


// leastCommonMutl([4, 6, 10 ]);

let cache = {}
const cacheIF = (action='set', key=null, value=null, timeout=50000) => {
    if (action === 'set'){
        cache[key] = value;
        setTimeout(()=>{
            delete cache[key];
        }, timeout);
        return `${key} saved`;
    }else if (action === 'get'){
        return cache.hasOwnProperty(key) ? `${key} found!` : `${key} not found:(`;
    }
}
console.log (cacheIF('set', 'sword', true));
console.log(cacheIF('get', 'sword'));