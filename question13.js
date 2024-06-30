var romanToInt = function(s) {
    // Mapa de caracteres romanos para seus valores inteiros correspondentes
    const characterMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Comprimento da string de entrada
    const length = s.length;

    // Se a string estiver vazia, retorna 0
    if (length == 0) {
        return 0;
    }

    // Se a string tiver um único caractere, retorna o valor desse caractere
    if (length == 1) {
        return characterMap[s[0]];
    }

    // Inicializa a soma com o valor do último caractere da string
    var sum = characterMap[s[length - 1]];

    // Itera sobre a string de trás para frente, começando do penúltimo caractere até o primeiro
    for (var i = length - 2; i >= 0; i--) {
        // Se o valor do caractere atual for menor que o próximo caractere, subtrai o valor da soma
        if (characterMap[s[i]] < characterMap[s[i + 1]]) {
            sum -= characterMap[s[i]];
        } else {
            // Caso contrário, adiciona o valor à soma
            sum += characterMap[s[i]];
        }
    }

    // Retorna a soma final, que é o valor inteiro correspondente ao número romano
    return sum;
};

















/* Question 13
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999]. */




