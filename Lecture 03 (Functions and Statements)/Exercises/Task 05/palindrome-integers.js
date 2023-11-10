function arePalindromes(nums) {
    for (let i = 0; i < nums.length; i++) {

        let currentNumber = nums[i].toString().split("");
        
        let isPalindrome = true;

        
        for (let i = -1; i < currentNumber.length / 2; i++) {
            let currLeftDigit = currentNumber[i + 1];
            let currRightDigit = currentNumber[currentNumber.length - (i + 2)];

            if (currLeftDigit !== currRightDigit) {
                isPalindrome = false;

                break;
            }
        }

        console.log(isPalindrome ? true : false);
    }
}
