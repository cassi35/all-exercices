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


// Remove the Last Vowel

function removeLastVowel(string){
    let words = string.split(' ').map(palavra => palavra.slice(0,palavra.length-1))
    return words.join(' ')
}
// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."))


//Column With Maximum Sum

function colWithMaxSum(nums,n){
    let stack = []
    while(nums.length != 0){
        stack.push(nums.slice(0,n))
        nums = nums.slice(n)
    }
    let maior = 0
    let i = stack.length-1
    let index_maior 
    while(stack.length != 0 && i >= 0){
        let index  = stack.indexOf(stack[i])
        let removido = stack.pop()
        let soma = removido.reduce((a,b)=> a+b)
        if(maior < soma){
            maior = soma
            index_maior = index
        }
        i-=1
    }
    return index_maior

}
// console.log(colWithMaxSum( [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19],4))

// Palindrome Sequence

function palSeq(n) {
    if(String(n).length == 5){
        return false
    }else{
        let reverseNum = Number(String(n).split('').reverse().join(''))
        let numer = n 
        if(reverseNum == numer){
            return true
        }else{
            let sum = reverseNum+numer
            return palSeq(sum)
        }
    }
    
}
// console.log(palSeq(78))

// Calculate Depth of Array

function depth(arr){
    function teste(arr_teste){
        for(let i in arr_teste){
            if(typeof arr_teste[i] == 'object'){
                return true
            }
        }
        return false
    }
    let count = 1
    let exists 
    do{
        exists = teste(arr)
        if(!exists){
            return count
        }else{
            arr = arr.flat()
            count+=1
        }
    }while(exists)
}
// console.log(depth([1, [2, [3, [4]]]]))



//Standard Competition Ranking

function competitionRank(results, person) {
    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]); 
    let rank = 1; 
    let previousScore = null;
    for (let i = 0; i < sortedResults.length; i++) {
        let [name, score] = sortedResults[i]; 
        if (score !== previousScore) {
            rank = i + 1; 
            previousScore = score; 
        }
        if (name === person) {
            return rank;
        }
    }

    // Retorna -1 se o nome não for encontrado
    return -1;
}
// console.log(competitionRank({
//     George: 96,
//     Emily: 95,
//     Susan: 93,
//     Jane: 89,
//     Brett: 82
// }, "Jane")); // ➞ 4

// console.log(competitionRank({
//     Kate: 92,
//     Carol: 92,
//     Jess: 87,
//     Bruce: 87,
//     Scott: 84
// }, "Bruce")); // ➞ 3

// console.log(competitionRank({
//     Alex: 100,
//     John: 100,
//     Mike: 99,
//     Sarah: 98,
//     Zoe: 97
// }, "Sarah")); // ➞ 4


//N-ary Tree Height
function treeHeight() {
    // Classe para representar um nó da árvore
    class TreeNode {
        constructor(value) {
            this.value = value;  // Valor armazenado no nó
            this.children = [];  // Array para armazenar filhos
        }
    }

    // Classe para representar a árvore
    class Tree {
        constructor() {
            this.root = null; // Raiz da árvore
        }

        isEmpty() {
            return this.root === null;
        }

        // Método para inserir um valor na árvore
        insert(value, parentValue = null) {
            const newNode = new TreeNode(value);

            // Caso especial: se a árvore estiver vazia, insere na raiz
            if (this.isEmpty()) {
                this.root = newNode;
                return;
            }

            // Se `parentValue` for especificado, encontra o nó pai e insere o novo nó como filho
            const parent = this.findNode(this.root, parentValue);
            if (parent) {
                parent.children.push(newNode);
            } else {
                console.log(`Pai com valor ${parentValue} não encontrado.`);
            }
        }

        // Método para encontrar um nó na árvore (busca em profundidade)
        findNode(node, value) {
            if (!node) return null;

            if (node.value === value) {
                return node;
            }

            for (let child of node.children) {
                const found = this.findNode(child, value);
                if (found) return found;
            }

            return null;
        }

        // Método para calcular a altura da árvore
        calculateHeight(node = this.root) {
            if (!node) return 0;

            let maxHeight = 0;
            for (let child of node.children) {
                maxHeight = Math.max(maxHeight, this.calculateHeight(child));
            }

            return maxHeight + 1;
        }

        // Método para imprimir a árvore (pré-ordem)
        print(node = this.root, level = 0) {
            if (!node) return;

            console.log(' '.repeat(level * 2) + node.value); // Indenta com base no nível
            for (let child of node.children) {
                this.print(child, level + 1);
            }
        }
    }

    // Testando a árvore
    const tree = new Tree();
    tree.insert("A"); // Raiz
    tree.insert("B", "A"); // Filho de A
    tree.insert("C", "A"); // Filho de A
    tree.insert("D", "B"); // Filho de B
    tree.insert("E", "B"); // Filho de B
    tree.insert("F", "C"); // Filho de C
    tree.insert("G", "C"); // Filho de C
    tree.insert("H", "E"); // Filho de E

    console.log("Árvore:");
    tree.print();

    console.log("\nAltura da árvore:", tree.calculateHeight());
}

// treeHeight();

//All Subsets that Add to a Value
function getSubsets(array, targetSum) {
    const result = [];
  
    // Função auxiliar para gerar todas as combinações de subarrays
    function findSubsets(index, subset) {
      // Soma os elementos do subarray atual
      const sum = subset.reduce((acc, val) => acc + val, 0);
  
      // Se a soma for igual ao alvo, adiciona o subarray ao resultado
      if (sum === targetSum) {
        result.push([...subset]);
      }
  
      // Percorre os próximos elementos
      for (let i = index; i < array.length; i++) {
        subset.push(array[i]); // Adiciona o elemento atual
        findSubsets(i + 1, subset); // Continua com o próximo índice
        subset.pop(); // Remove o último elemento para explorar outras combinações
      }
    }
  
    // Inicia a busca com índice 0 e subarray vazio
    findSubsets(0, []);
  
    // Ordena os resultados por comprimento e, depois, lexicograficamente
    result.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length; // Subarrays mais curtos primeiro
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return a[i] - b[i]; // Ordem crescente elemento por elemento
        }
      }
      return 0;
    });
  
    return result;
  }
  
  // Exemplos de uso:
  console.log(getSubsets([-1, 0, 1, 2], 2)); // [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]
//   console.log(getSubsets([-1, 0, 1, 2], 3)); // [[1, 2], [0, 1, 2]]
//   console.log(getSubsets([1, 2, 3, 4], 5));  // [[1, 4], [2, 3]]
//   console.log(getSubsets([-1, 0, 1, 2], 4)); // []
  