function count(input) {
  // your code here
  const countOfEachCharacter = {};
  for (let i = 0; i < input.length; i++) {
    if (countOfEachCharacter.hasOwnProperty(input[i])) {
      countOfEachCharacter[input[i]]++;
    } else if (!countOfEachCharacter.hasOwnProperty(input[i])) {
      countOfEachCharacter[input[i]] = 1;
    }
  }
  return countOfEachCharacter;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
  // your code here
  const sumOfEachKey = {};
  for (let i = 0; i < input.length; i++) {
    if (sumOfEachKey.hasOwnProperty(input[i].key)) {
      sumOfEachKey[input[i].key] = sumOfEachKey[input[i].key] + input[i].value;
    } else if (!sumOfEachKey.hasOwnProperty(input[i].key)) {
      sumOfEachKey[input[i].key] = input[i].value;
    }
  }
  return sumOfEachKey;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
