const message = 'Hello World';
console.log(message, 'from Gitpod!');
let arr =[];

debugger
// Find the length of longest continuous subarray within an array (containing at least one number) whose sum equals zero.

// For example, given the array [1,0,-1,2],

// The longest continuous subarray of zero-sum is [1,0,-1] which has length = 3
const findSqu = (arr) =>{
    let count = 0;
    let maxCount = 0, maxStart = 0;
   for (let i=0;i<arr.length-2;i++){
        count=2;
        let sum = arr.slice(i, i+count).reduce((sum, item) => {
            return sum+item});

        while(sum === 0 ){
            if (count > maxCount){
                maxCount = count;
                maxStart = i;
            }
            count = count +1 ;
            sum = arr.slice(i, i+count).reduce((sum, item) => {
            return sum+item});
        }
    }
    return {start: maxStart, count: maxCount}
};

const printResult = (result) =>{
    if (result.count > 0){
        console.log(`Max squence is ${arr.slice(result.start, result.count + 1)} starting at index ${result.start}`)
    }else{
        console.log('None found')
    }
}

arr = [1,0,-1,2];
printResult(findSqu(arr));

arr = Array.from({length: 40}, () => Math.floor(Math.random() * 21)-10);
printResult(findSqu(arr));