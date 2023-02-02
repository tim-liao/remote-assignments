/////A. Complete the function below to show a delayed result in the console.
function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

/////B. To implement delayedResult again using promise this time. It should look like:
function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

/////C. To implement it using async/await this time.
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const output = await delayedResultPromise(10, 5, 6000);
  console.log(output);
}
main(); // result will be shown in the console after <delayTime> seconds;
