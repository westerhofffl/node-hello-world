
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
// console.log (cacheIF('set', 'sword', true, 100));
// setTimeout(()=>{
//     console.log(cacheIF('get', 'sword'));
// }, 200)


const findMedian = (arr1, arr2) =>{
    let answer = null, start = 0;
    answer  = [...arr1, ...arr2].sort((a, b)=>a-b);
    // console.log(answer);
    if (answer.length % 2 === 0){
        return (answer[answer.length/2 -1 ] + answer[answer.length/2 ])/2
    }else {
        return answer[(answer.length+1)/2 -1]
    }
}
const getMed = (arr) =>{
    try{
    if (arr.length % 2 === 0){
        return (arr[arr.length/2 -1 ] + arr[arr.length/2 ])/2;
    }else{
        return arr[(arr.length+1)/2 -1];
    }
    }catch(e){
        console.error(e);
    }
}
const findMedianR = (arr1, arr2) =>{
    try{
        if (arr1.length === 0 || arr1.length !== arr2.length){
            return "Array length error";
        }else if (arr1.length === 1 ){
            return (arr1[0] + arr2[0])/2;
        }else if (arr1.length === 2 || arr2.length === 2){
            let answer  = [...arr1, ...arr2].sort((a, b)=>a-b);
            if (answer.length % 2 === 0){
                return (answer[answer.length/2 -1 ] + answer[answer.length/2 ])/2;
            }else {
                return answer[(answer.length+1)/2 -1]
            }
        }else{
            let arr1M = getMed(arr1);
            let arr2M = getMed(arr2);
            let arr1S, arr2S;
            if (arr1M === arr2M){
                return arr1M;
            }else if (arr1M > arr2M ){
                // bottom 1/2 arr1
                if (arr1.length %2 === 0){
                    arr1S = arr1.length/2 +1;
                }else{
                    arr1S = (arr1.length+1)/2;
                }
                // upper 1/2 arr2
                if (arr2.length %2 === 0){
                    arr2S = arr2.length/2 -1;
                }else{
                    arr2S = (arr2.length-1)/2;
                }

                // console.log(arr1.slice(0, arr1S), arr2.slice(arr2S));
                return findMedianR(arr1.slice(0, arr1S), arr2.slice(arr2S));

            }else if (arr1M  < arr2M ) {
                // upper 1/2 arr1
                if (arr1.length %2 === 0){
                    arr1S = arr1.length/2 -1;
                }else{
                    arr1S = (arr1.length -1)/2;
                }
                // lower 1/2 arr2
                if (arr2.length %2 === 0){
                    arr2S = arr2.length/2 +1;
                }else{
                    arr2S = (arr2.length+1)/2;
                }

                // console.log(arr1.slice(arr1S), arr2.slice(0, arr2S));
                return findMedianR(arr1.slice(arr1S), arr2.slice(0, arr2S));

            }



        }
    } catch(e){
        console.error(e);
    }

}

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// // let start = new Date().getTime();
// // // console.log(arr1, arr2);
// // console.log(`Median is: ${findMedian(arr1, arr2)} in ${new Date().getTime() - start}`);
// // start = new Date().getTime();
// // // console.log(arr1, arr2);
// // console.log(`MedianR is: ${findMedianR(arr1, arr2)} in ${new Date().getTime() - start}`);

// arr1 = [1, 2, 3, 4,  5,  6];
// arr2 = [0, 0, 0, 0, 10, 10];
// // console.log(arr1, arr2);
// start = new Date().getTime();
// // console.log(`Median is: ${findMedian(arr1, arr2)} in ${new Date().getTime() - start}`);
// start = new Date().getTime();
// // console.log(`MedianR is: ${findMedianR(arr1, arr2)} in ${new Date().getTime() - start}`);

// let min = 0, max = 100, n =1000000;
// arr1 = Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min).sort((a, b)=>a-b);
// arr2 = Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min).sort((a, b)=>a-b);
// // console.log(arr1, arr2);
// start = new Date().getTime();
// console.log(`Median is: ${findMedian(arr1, arr2)} in ${new Date().getTime() - start}`);
// start = new Date().getTime();
// console.log(`MedianR is: ${findMedianR(arr1, arr2)} in ${new Date().getTime() - start}`);


///////////////////////////////////////////
// Missing 2 element missing from sequence
// missing([4,2,3]) = 1,5
// ? Does sequence start at 0 or 1
// ? Array intergers or long ==
// 1st solve missing one number
// [1,2,4,5] = 3
// Boolean array check off of found not found
// time - O(n)
// space  O(n)
// sort array then sequence through and find missing #
// time  O(n logn)
// space O(1)
// xor

//????
// Missing 1
// [1,2,4] = 3
// [1,2,3,4]
// sum([1,2,3,4]) = 10
// sum ([1,2,4])) = 7
// 10-7 = 3

const oneMiss = (arr) =>{
    let totalxor = 0, arrxor = 0;
    for (let i=1;i<=arr.length+1;i++){
        // console.log(totalxor, i, totalxor + i)
        // totalxor = totalxor + i;
        totalxor = totalxor ^ i;
    }
    for (let i=0;i<arr.length;i++){
        // console.log(arrxor, i, arr[i])
        arrxor = arrxor ^ arr[i];
    }
    return totalxor ^ arrxor;
}

// let arr = [1,2,4];
// console.log(oneMiss(arr))

////////////////
// [1,2,3,4,5,6]
// 1,2,5,6] => 3,4
    missTwo = (arr) =>{
        let size = arr.length + 2;
        let sumFull = size * (size+1)/2;
        let sumarr = arr.reduce((sum, item)=>sum+item);
        let pivot = Math.floor((sumFull-sumarr)/2);

        let leftxor = 0, rightxor = 0, arrLeftxor = 0, arrRightxor =0;
        for (let i=1; i<= pivot; i++) leftxor = leftxor + i;
        for (let i=pivot +1; i<= size; i++) rightxor = rightxor + i;
        for (let i=0; i<arr.length;i++){
            if (arr[i] <= pivot){
                arrLeftxor = arrLeftxor + arr[i];
            }else{
                arrRightxor = arrRightxor + arr[i];
            }
        }
        return [leftxor - arrLeftxor, rightxor - arrRightxor]
    }
// [1,2,3,4,5,6]
let arr = [1,2,5,6];
console.log(missTwo(arr))