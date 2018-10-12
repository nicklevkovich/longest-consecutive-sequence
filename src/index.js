module.exports = function longestConsecutiveLength(array) {
  let set = new Set(array),
      longestLength = 0,
      arrayLength = array.length;

  if (arrayLength === 0) return 0;
  for (let i = 0; i < arrayLength; i++) {
      let left = array[i] - 1,
          right = array[i] + 1,
          count = 1;

      while (set.has(left)) {
          count++;
          set.delete(left);
          left--;
      };
      while (set.has(right)) {
          count++;
          set.delete(right);
          right++;
      };
      longestLength = Math.max(longestLength, count);
  };
  return (longestLength);
};