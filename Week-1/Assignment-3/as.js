function countAandB(input) {
  let aQuantity = 0;
  let bQuantity = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "a") {
      aQuantity++;
    } else if (input[i] == "b") {
      bQuantity++;
    }
  }
  let output = `${aQuantity + bQuantity}, ${aQuantity} 'a' ${
    aQuantity > 1 ? "letters" : "letter"
  } and ${bQuantity} 'b' ${bQuantity > 1 ? "letters" : "letter"}`;

  return output;
}

function toNumber(input) {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].charCodeAt(0) - 96;
  }
  return input;
}
