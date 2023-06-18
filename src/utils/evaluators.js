const evaluate = {
  matchingPasswords: function(firstMatch, secondMatch) {
    let defaultValue = false;
    if (firstMatch === secondMatch) {
      defaultValue = true;
    }
    return defaultValue;
  },
  filledInput: function(value) {
    let defaultValue = true;
    console.log(value)
    if (value !== "") {
      defaultValue = false;
    }
    return defaultValue;
  }
}

export default evaluate;