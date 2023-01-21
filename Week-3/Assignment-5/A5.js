function twoSum(nums, target) {
  // your code here
  ////如果nums array 沒有按照數字大小排列的話/////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < nums.length; i++) {
    let targetMinusNumsIndex = target - nums[i];
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[x] == targetMinusNumsIndex) {
        return [x, i];
      }
    }
  }
  ///////如果nums array有按照數字大小由小到大排列的話////////////////////////////////////////////////////////////////////////////////////
  //1.先找哪個數字和target最相近同時比target相等或小，因為比target大沒有比較的必要==>>
  //可以用類似上週的作業找最相近數字>>XX可能會有負值，所以可能某值比target大但還是可能加上負值後相等
  //2.target/2開始前後找，因為兩值相加會等於target，那勢必一值會小於target/2，一值會大於target/2
  //3.先用binary Search找到中間值
  ///////////////////////////////////////////////////////
  function binarySearchPosition(numbers, target) {
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
      if (
        numbers[compareIndex] < target &&
        numbers[compareIndex + 1] > target
      ) {
        return compareIndex;
      } else if (numbers[compareIndex] < target) {
        minIndex = compareIndex;
      } else if (numbers[compareIndex] > target) {
        maxIndex = compareIndex;
      } else if (numbers[compareIndex] == target) {
        return compareIndex;
      }
    }
  }
  //////////////////////////////////////////////////////////
  const halfSimilarValueIndex = binarySearchPosition(nums, target / 2);
  // console.log(halfSimilarValueIndex);
  let beSmallerIndex = halfSimilarValueIndex;
  if (nums[halfSimilarValueIndex] == target / 2) {
    beSmallerIndex--; //因為題目說不會重復一樣的element,例如２４的一半是１２，那不會有另外一個長一樣的，所以退一位（－１）
  }
  let beBiggerIndex = halfSimilarValueIndex + 1;
  while (beSmallerIndex >= 0 && beBiggerIndex <= nums.length) {
    if (nums[beSmallerIndex] + nums[beBiggerIndex] < target) {
      //此時的nums[beBiggerIndex]加上任何小於target/2的值都不可能大於等於target，所以可廢除
      //按照大小順序排列的話，在小於target/2中的最大值加上目前的大於target/2的最小值還比target小的話，那要讓後者變大。
      beBiggerIndex++;
    } else if (nums[beSmallerIndex] + nums[beBiggerIndex] > target) {
      beSmallerIndex--;
    } else {
      return [beSmallerIndex, beBiggerIndex];
    }
  }
  return "false";
}
/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
   */
