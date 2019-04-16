// Find the length of longest continuous subarray within an array (containing at least one number) whose sum equals zero.

// For example, given the array [1,0,-1,2],

// The longest continuous subarray of zero-sum is [1,0,-1] which has length = 3
let arr =[];
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
    }else{
        console.log('   None found')
    }
}

export const runSequ = () => {
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
