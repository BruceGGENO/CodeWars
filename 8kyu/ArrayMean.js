function findAverage(nums) {
    // Code here
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}