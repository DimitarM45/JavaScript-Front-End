function login(credentials) {
  let username = credentials[0];

  for (let i = 1; i < credentials.length; i++) {
    let areCredentialsValid = username == credentials[i].split("").reverse().join("");

    if (areCredentialsValid) {
      console.log(`User ${username} logged in.`);

      return;
    } else if (!areCredentialsValid && i < 4) {
      console.log("Incorrect password. Try again.");
    } else if (!areCredentialsValid) {
      console.log(`User ${username} blocked!`);

      return;
    }
  }
}

