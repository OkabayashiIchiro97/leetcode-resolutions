/**
 * @param {number} 
 * @return {boolean}
*/

//Solution 1
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    };
    const stringX = String(x)
    const reverseX = stringX.split("").reverse().join("");
    if(reverseX == stringX) {
        return true
    } else {
        return false
    }
};

/*   Solution 2
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversed = 0;
    let original = x;
    
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
}; */

/* 
Question 9 Palindrome Number
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/