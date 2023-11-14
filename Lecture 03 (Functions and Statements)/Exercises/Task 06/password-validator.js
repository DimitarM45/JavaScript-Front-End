function validatePassoword(password) {
  let isLengthValid = true;
  let hasOnlyLetterAndDigit = true;

  let digits = 0;

  if (!(password.length >= 6 && password.length <= 10)) {
    isLengthValid = false;

    console.log("Password must be between 6 and 10 characters");
  }

  if (!/^[A-Za-z0-9]+$/gi.test(password)) {
    hasOnlyLetterAndDigit = false;

    console.log("Password must consist only of letters and digits");
  }

  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      digits++;
    }
  }

  let hasAtLeast2Digits = digits >= 2;

  let isValid = isLengthValid && hasOnlyLetterAndDigit & hasAtLeast2Digits;

  if (!hasAtLeast2Digits) {
    console.log("Password must have at least 2 digits");

  } else if (isValid) {

    console.log("Password is valid");
  }
}
