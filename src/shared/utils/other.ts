
const twoSum = (arr: number[], target: number) => {
    for (let i = 0; i < arr.length; i++) {
        const findValue = target - arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] == findValue) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(twoSum([1,2,3,4,5],7));

const rmDuplicates = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++) {
        if(i>=nums.length){
            break;
        }

        if(nums[i] == nums[i + 1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums;

}
console.log('rm',rmDuplicates([1,2,3,4,4,4,5,5,5,6,7,7,8]));

const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}
console.log(reverseString('qwerty'))