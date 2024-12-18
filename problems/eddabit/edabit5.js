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


// Aluminum Foil
function foil(n){
    let diametro = 4
    let espesura = 0.025 / 10
    let raio = diametro / 2
    let comprimento = n 
    while(comprimento > 0){
        let circunferenciaAtual = 2 * Math.PI * raio
        console.log(comprimento,' ',circunferenciaAtual)
        comprimento-=circunferenciaAtual
        if(comprimento > 0){
            raio+=espesura
        }
    }
    let diametroFinal = raio * 2 

    return diametroFinal.toFixed(4)
}
// console.log(foil(50))


//String Cleaver
function cleave(string,words){
    let isPresent = []
    let len = string.length
    for(let i = 0;i < len;i++){
        if(string.includes(words[i])){
            let present = {index:string.indexOf(words[i]),palavra:words[i]}
            isPresent.push(present)
            let remove = ''
            for(let index = 0;index < words[i].length;index+=1){
                remove+='-'
            }
            string = string.replaceAll(words[i],remove)
        }
    }
    let swaped 
    do{
        swaped = false
        for(let i = 1;i < isPresent.length;i++){
            if(isPresent[i].index  < isPresent[i-1].index){
                let temp = isPresent[i]
                isPresent[i] = isPresent[i-1]
                isPresent[i-1] = temp 
                swaped = true
                break
            }
        }
    }while(swaped)
        let output = isPresent.map((palavras)=>palavras.palavra).join().replaceAll(',',' ')
        let teste = string.split('').some(l => l != '-')
        if(teste){
            return 'Cleaving stalled: Word not found'
        }else{
            return output
        }
}
const words = ["about", "be", "hell", "if", "is", "it", "me", "other", "outer", "people", "the", "to", "up", "where"]
let cleaves = cleave("hellisotherpeople", words) // "if it is to be it is up to me"
// console.log(cleaves)


//Recursion: Find The Longest Word

function findLongest(sentence){
    function selectionSort(word,length){
        let n = length
        for(let i = 0;i < n;i++){
            let max = i
            for(let j = i+1;j < n;j++){
                if(word[j].length > word[max].length){
                    max = j
                }
            }
            if(max != i){
                [word[i],word[max]] = [word[max],word[i]]
            }
        }
        return word[0]
    }
    let splitWords = sentence.split(' ')
    return selectionSort(splitWords,splitWords.length)
}

// console.log(findLongest('Forgetfulness is by all means powerless'))

// Indices of Zeroes for the Longest Run of Contiguous Ones







function zeroIndices(arr, k) {
    let left = 0; // Ponteiro esquerdo da janela deslizante
    let zeroes = []; // Armazena os índices dos zeros encontrados na janela
    let maxLength = 0; // Comprimento da maior sequência contínua de uns
    let result = []; // Índices dos zeros que formam a sequência máxima
  
    for (let right = 0; right < arr.length; right++) {
      // Quando encontramos um zero, adicionamos seu índice à lista
      if (arr[right] === 0) {
        zeroes.push(right);
      }
  
      // Se o número de zeros na janela exceder `k`, ajustamos o ponteiro esquerdo
      if (zeroes.length > k) {
        left = zeroes.shift() + 1; // Remove o primeiro zero e move o ponteiro esquerdo
      }
  
      // Atualiza o comprimento da maior sequência e os índices dos zeros
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        result = [...zeroes]; // Copia os índices atuais dos zeros usados
      }
    }
  
    return result;
  }
  
//   // Exemplos de teste
//   console.log(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1)); // ➞ [1]
//   console.log(zeroIndices([1, 0, 0, 0, 0, 1], 1)); // ➞ [1]
//   console.log(zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3)); // ➞ [6, 7, 9]
//   console.log(zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3)); // ➞ [7, 8, 9]
  

//Extracting Words with "-ing" Inflection


function ingExtractor(words){
    let palavras = words.split(' ').filter((p)=> p.includes('ing')).filter((p)=> p.length > 4)
    return palavras
}

// console.log(ingExtractor("coming bringing Letting sing"))
//Vertical Text

function verticalText(string){
    let words = string.split(' ')
    let word1 = words[0].split('')
    let word2 = words[1].split('')
    let output = []
    while(word1.length != 0 || word2.length != 0){
        if(word1.length == 0){
            output.push([' ',word2.shift()])
        }else if(word2.length == 0){
            output.push([word2.shift(),' '])
        }else{
            output.push([word1.shift(),word2.shift()])
        }
    }
    return output
}

// console.log(verticalText('holy bananas'))
// Shortest Subarray Whose Sum Exceeds N























