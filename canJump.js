// var canJump = function (nums) {
//   let target = nums.length - 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i + nums[i] >= target) {
//       target = i;
//     }
//   }
//   return target === 0;
// };

var canJump = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(-1); // -1 = unvisited, 0 = false, 1 = true

  let helper = function (i) {
    if (i >= n) return 0;
    if (i === n - 1) return 1;
    if (dp[i] !== -1) return dp[i];

    for (let k = 1; k <= nums[i]; k++) {
      if (helper(i + k)) {
        dp[i] = 1;
        return 1;
      }
    }
    dp[i] = 0;
    return 0;
  };

  return !!helper(0);
};

const nums = [3, 2, 1, 0, 4];

var canJumpp = function (nums) {
  let n = nums.length;
  let goal = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal == 0;
};
