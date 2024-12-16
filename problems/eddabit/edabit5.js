//this is exercises expert of the website edabit

console.clear()

//Phone Letter Combinations
function letterCombinations(digits) {
    if (!digits || digits.length === 0) return [];

    // Mapping of digits to corresponding letters on a phone keypad
    const digitToLetters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    // Helper function to generate combinations recursively
    function backtrack(index, path) {
        if (index === digits.length) {
            combinations.push(path);
            return;
        }
        const letters = digitToLetters[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, path + letter);
        }
    }

    const combinations = [];
    backtrack(0, '');
    return combinations;
}

// Examples
// console.log(letterCombinations("23"));


// An OSHA Approved Ladder?


function isLadderSafe(ladders){
    let contador = 0
    for(let i in ladders){
        let degrau = ladders[i].split('').filter((degrau)=> degrau == "#").length
        if(degrau != 2 && degrau < 5 || ladders[i].length < 5){
            return false
        }
    }
    let rule3 = ladders.slice(1,ladders.length-1)
    for(let degrau of rule3){
        let arr_degrau = degrau.split('').filter(d => d == '#')
        if(arr_degrau.length== 2){
            contador+=1
        }
    }

    return contador % 2 == 0
}
// console.log(isLadderSafe([
//     "#   #",
//     "#####",
//     "#   #",
//     "#   #",
//     "#####",
//     "#   #",
//     "#   #",
//     "#####",
//     "#   #"
//   ]))

//Look-and-Say Sequence
function lookAndSay(start,n){
    let sequences = []
    sequences.push(start)
    let atual = start
    function transformSequnce(actual){
        let str_actual = String(actual).split('').map((n)=>Number(n))
        let grupo = []
        for(let i = 0;i < str_actual.length;i++){
            let compare = str_actual[i]
            let length = 0
            let l = i 
            while(compare == str_actual[l]){
                length+=1
                l+=1
            }
            i = l-1
            grupo.push([length,compare])
        }
        return Number(grupo.flat().join('').replaceAll(',',''))
    }

    for(let i = 0;i < n-1;i++){
        change = transformSequnce(atual)
        sequences.push(change)
        atual = change
    }
    return sequences
}
// console.log(lookAndSay(1,7))

//The Longest Substring

// Function to find the longest substring based on the separator
function maxSeparator(str) {
    const substrings = {};

    // Iterate through all unique characters in the string
    for (const char of new Set(str)) {
        const firstIndex = str.indexOf(char);
        const lastIndex = str.lastIndexOf(char);

        // Ensure the separator occurs at least twice
        if (firstIndex !== lastIndex) {
            const substring = str.slice(firstIndex, lastIndex + 1);

            // Check if the separator occurs only at the edges
            if (!substring.slice(1, -1).includes(char)) {
                substrings[char] = substring.length;
            }
        }
    }

    // Find the maximum length of substrings
    const maxLength = Math.max(0, ...Object.values(substrings));

    // Return the separators that yield substrings of the maximum length, sorted alphabetically
    return Object.keys(substrings)
        .filter((key) => substrings[key] === maxLength)
        .sort();
}

// // Examples
// console.log(maxSeparator("supercalifragilistic"));
// // Output: ["s"]

// console.log(maxSeparator("laboratory"));
// // Output: ["a", "o", "r"]

// console.log(maxSeparator("candle"));
// // Output: []


//Casual String Builder
function decodeString(s) {
    const stack = [];
    let currentString = '';
    let currentNumber = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            // Construir o número para casos como "10[abc]"
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '[') {
            // Empilha o número atual e a string atual, e reseta
            stack.push(currentString);
            stack.push(currentNumber);
            currentString = '';
            currentNumber = 0;
        } else if (char === ']') {
            // Recupera o número e a string anteriores da pilha
            const num = stack.pop();
            const prevString = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {
            // Monta a string atual
            currentString += char;
        }
    }

    return currentString;
}

// Exemplo de uso:
// console.log(decodeString("3[a2[c]]")); // Saída: "accaccacc"
// console.log(decodeString("3[a]2[bc]")); // Saída: "accaccacc"
// console.log(decodeString("2[abc]3[cd]ef")); // Saída: "abcabccdcdcdef"



// Sort Characters by Frequency, Case, Alphabet

function frequencySort(s) {
    // Criar um mapa para armazenar a frequência dos caracteres
    const freqMap = new Map();

    // Preencher o mapa com a frequência de cada caractere
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Converter os caracteres em um array e ordenar com base nas condições
    const sortedChars = Array.from(freqMap.keys()).sort((a, b) => {
        const freqA = freqMap.get(a);
        const freqB = freqMap.get(b);

        // Ordenar pela frequência (decrescente)
        if (freqA !== freqB) {
            return freqB - freqA;
        }

        // Ordenar caracteres de mesma frequência: maiúsculas antes de minúsculas
        const isUpperA = a === a.toUpperCase();
        const isUpperB = b === b.toUpperCase();
        if (isUpperA !== isUpperB) {
            return isUpperA ? -1 : 1;
        }

        // Ordenar alfabeticamente para mesma frequência e caso
        return a.localeCompare(b);
    });

    // Construir a string final com base nas frequências
    return sortedChars
        .map(char => char.repeat(freqMap.get(char)))
        .join('');
}

// Exemplos de uso:
// console.log(frequencySort("tree"));    // ➞ "eert"
// console.log(frequencySort("cccaaa")); // ➞ "aaaccc"
// console.log(frequencySort("Aabb"));   // ➞ "bbAa"

//A Capital Challenge
function selectLetters(s1,s2){
    let word = ''
    function compare(letra1,letra2){
        if(!isNaN(letra1)){
            if(letra2.toUpperCase() == letra2){
                return String(letra1)
            }else{
                return undefined
            }
        }else{
            if(letra2.toUpperCase() == letra2 && letra1.toLowerCase() == letra1){
                return letra1
            }else if(letra2.toLowerCase() == letra2 && letra1.toUpperCase() == letra1){
                return letra2
            }else if(letra2.toUpperCase() == letra2 && letra1.toUpperCase() == letra1){
                return letra1+letra2
            }   
        }
    }
    for(let i in s1.split('')){
        if(s1[i] != undefined && s2[i] != undefined){
            let result = compare(s1[i],s2[i])
            if(result != undefined){
                word+=result
            }
            console.log(s1[i],s2[i],result)
        }
    }
    return word
}
// console.log(selectLetters("EVERYTHING", "SomeThings"))


