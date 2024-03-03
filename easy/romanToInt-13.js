/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let sum = 0;
    for(let i = 0; i < s.length; i++){
        if(i > 0 && romanMap.get(s[i]) > romanMap.get(s[i - 1])){
            sum -= romanMap.get(s[i-1]) * 2;
        }
        sum += romanMap.get(s[i]);
    }
    return sum;
};

console.log('Test Case 1:', romanToInt("III"));  // Expected Output: 3
console.log('Test Case 2:', romanToInt("LVIII"));  // Expected Output: 58
console.log('Test Case 3:', romanToInt("MCMXCIV"));  // Expected Output: 1994

