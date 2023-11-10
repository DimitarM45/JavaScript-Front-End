function getOddAndEvenSum(num) {
  let nums = num.toString().split("").map(num => parseInt(num));

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evenSum += nums[i];
    } else {
      oddSum += nums[i];
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
