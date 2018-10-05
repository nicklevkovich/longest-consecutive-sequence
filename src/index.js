module.exports = function longestConsecutiveLength(array) {
    let set = new Set(array),
        length = 0,
        arrL = set.size;

    if (arrL === 0) return 0;
    for (let i = 0; i < arrL; i++) {
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
        if (count > length) length = count;
    };

    return (length);
};
