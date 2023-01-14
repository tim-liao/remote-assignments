// Assignment 5: Algorithm Practice (Advanced Optional)
// Remember what we did in Assignment 1? We created a function that can find the position of the target number inside an array of numbers. Actually, if the array was Sorted already, there is a beautiful algorithm called Binary Search which can do this job efficiently. You can try to look up these keywords and learn the concept behind this algorithm. If you still have time, you can try implementing it yourself.
// For simplicity, you can assume that there are no duplicate numbers in the given array. It will be a challenge if you haven’t learned any algorithm before.

function binarySearchPosition(numbers, target) {
  // your code here
  if (!numbers.includes(target)) {
    //如果一開始此值不包含在裡面，則回傳－１
    return -1;
  }
  let maxIndex = numbers.length - 1;
  let minIndex = 0;
  let compareIndex = 0; //一開始沒有比較值，故把此初始值設定成最小

  while (true) {
    if (numbers[compareIndex] < target) {
      //如果前一回的比較數字比target大，則此回的中位數比較數字則取無條件進位
      compareIndex = Math.ceil((maxIndex + minIndex) / 2);
    } else if (numbers[compareIndex] > target) {
      //如果前一回的比較數字比target小，則此回的中位數比較數字則取無條件捨去
      compareIndex = Math.floor((maxIndex + minIndex) / 2);
    } else if (numbers[compareIndex] == target) {
      return compareIndex;
    }
    if (numbers[compareIndex] < target) {
      minIndex = compareIndex;
    } else if (numbers[compareIndex] > target) {
      maxIndex = compareIndex;
    } else if (numbers[compareIndex] == target) {
      return compareIndex;
    }
  }
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
