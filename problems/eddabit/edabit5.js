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

function maxSeparator(string){
    let separator = []
    let maxSubstr = 0
    string = string.split('')
    for(let i in string){
        if(string.slice(i+1).includes(string[i])){
            let index = string.slice(i+1).findIndex((str)=>str== string[i])
            let length_index = string.slice(i,index).length
            if(length_index > maxSubstr){
                if(!separator.includes(string[i])){
                    separator.push(string[i])
                }
                maxSubstr = length_index
            }
        }
        console.log(string.slice(i+1),Number(i+1))
    }
    return separator
}
console.log(maxSeparator("lacsa"))