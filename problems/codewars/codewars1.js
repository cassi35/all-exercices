///exercises codewars
console.clear()
// Drawing marbles from an urn - Part 1 6ku
function marbleDrawn(urn1, urn2, color) { //5kyu
    // Passo 1: Calcular P(color | urn1) (probabilidade de tirar a cor da urn1)
    const P_color_given_urn1 = urn1[color] / Object.values(urn1).reduce((a, b) => a + b, 0);
    
    // Passo 2: Calcular P(color | urn2) (probabilidade de tirar a cor da urn2)
    const P_color_given_urn2 = urn2[color] / Object.values(urn2).reduce((a, b) => a + b, 0);
    
    // Passo 3: Calcular P(color) (probabilidade total de tirar a cor)
    const P_color = 0.5 * P_color_given_urn1 + 0.5 * P_color_given_urn2;
    
    // Passo 4: Calcular a probabilidade condicional P(urn1 | color) usando o Teorema de Bayes
    const P_urn1_given_color = (0.5 * P_color_given_urn1) / P_color;
    
    // Passo 5: Converter a probabilidade em uma fração
    // Multiplicando por 1000000 para lidar com a precisão decimal
    let numerator = P_urn1_given_color * 1000000;
    let denominator = 1000000;
    
    // Função para calcular o Máximo Divisor Comum (MDC)
    function gcd(a, b) {
        while (b) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // Simplificar a fração
    const commonDivisor = gcd(Math.round(numerator), denominator);
    numerator = Math.round(numerator) / commonDivisor;
    denominator = denominator / commonDivisor;
    
    return [numerator, denominator];
}

// Exemplo de uso
const urn1 = { "red": 3, "blue": 2 };
const urn2 = { "red": 1, "blue": 4 };
const color = "red";

console.log(marbleDrawn(urn1, urn2, color));  // Exemplo de saída: [3, 4]
//first_non_repeating_letter 5kyu
function first_non_repeating_letter(str){
    let  used = []

    for(let i = 0;i < str.split('').length;i++){
        if(!used.includes(str[i])){
            let nums = str.split('').filter((letter)=> letter == str[i])
            if(nums.length == 1){
                return str[i]
            }
            used.push(str[i])
        }
        
    }
}


// console.log(first_non_repeating_letter('stress'))

// Greed is Good 5kyu

function greed(times){
    let three_pontuation = [[1,1000],[6,600],[5,500],[4,400],[3,300],[2,200]]
    let three = new Map()
    for(let i in three_pontuation){
        three.set(three_pontuation[i][0],three_pontuation[i][1])
    }
    let one = new Map()
    one.set(1,100)
    one.set(5,50)
    let pontuacao_final = []
    for(let i in times){
        let pontuacao_individual = 0
        let use = []
        for(let j in times[i]){
            if(!use.includes(times[i][j])){
                let times_dado = times[i].filter(n => n == times[i][j])
                if(times_dado.length >= 3){
                    if(three.get(times[i][j]) != undefined){
                        pontuacao_individual+=three.get(times[i][j])
                    }
                }else if(times_dado.length == 1){
                    if(one.get(times[i][j]) != undefined){
                        pontuacao_individual+=one.get(times[i][j])
                    }
                }
                use.push(times[i][j])
            }
        }
        pontuacao_final.push(pontuacao_individual)
        use = []
    }
    return pontuacao_final
}
let mat = [[ 5 ,1 ,3 ,4 ,1],[1, 1, 1, 3, 1 ],[ 2, 4 ,4 ,5 ,4  ]]
// console.log(greed(mat))

// Maximum subarray sum

function max_sequence(array){
    if(array.some((num)=>num < 0) == false){
        return array.reduce((a,b)=>a+b)
    }else if(array.filter((num)=>num < 0).length == array.length){
        return 0
    }else{
        let max_so_far = 0
        let max_ending_here = 0
        for(let num of array){
            max_ending_here = Math.max(0,max_ending_here+num)
            max_so_far = Math.max(max_so_far,max_ending_here)
        }
        return max_so_far
    }
}
// console.log(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// Mean Square Error 5kyu

function mean_err(mat){
    let length = mat[0].length -1
    let res = []
    while(length >= 0){
        let min = Math.min(mat[0][length],mat[1][length])
        let max = Math.max(mat[0][length],mat[1][length])
        res.push((max-min)*(max -min))
        length--
    }
    return res.reduce((a,b)=>a+b) /res.length
}
console.log(mean_err([[10, 20, 10, 2], [10, 25, 5, -2]]))

// What's a Perfect Power anyway? 5ku

function isPP(num){
   let m = null 
   let k = null 
   let n = 2
   do{
    let potencia = 0
    while(true){
        if((potencia ** n ) > num){
            break
        }
        if(potencia ** n == num){
            if(m == null){
                m = [n,potencia]
            }
            if(k == null){
                k = [n,potencia]
            }
            break
        }
        potencia++
    }
    n++
   }while((n ** n) < num)
return m == null && k == null?null:[m,k]
}
// console.log(isPP(5))

//Linear Equation Solver
function solve(equations) {
    // Função para processar uma equação em coeficientes
    function parseEquation(equation) {
        const regex = /([+-]?\d*)\s*([a-zA-Z]+)?/g;
        const sides = equation.split('=');
        const terms = { free: 0 }; // Termo livre e coeficientes das variáveis

        for (let i = 0; i < sides.length; i++) {
            const sign = i === 0 ? 1 : -1; // Lado esquerdo positivo, lado direito negativo
            const matches = [...sides[i].matchAll(regex)];

            for (const match of matches) {
                if (!match[0].trim()) continue; // Ignorar espaços vazios

                const coefficient = match[1] === '' || match[1] === '+' || match[1] === '-' 
                    ? parseInt(match[1] + '1') * sign 
                    : parseInt(match[1]) * sign;
                
                const variable = match[2];

                if (variable) {
                    terms[variable] = (terms[variable] || 0) + coefficient;
                } else {
                    terms.free += coefficient;
                }
            }
        }
        return terms;
    }

    // Montar a matriz de coeficientes e o vetor de termos livres
    const variables = new Set();
    const parsedEquations = equations.map(parseEquation);

    parsedEquations.forEach(eq => {
        Object.keys(eq).forEach(varName => {
            if (varName !== 'free') variables.add(varName);
        });
    });

    const varList = [...variables];
    const matrix = [];
    const constants = [];

    for (const eq of parsedEquations) {
        const row = varList.map(v => eq[v] || 0);
        matrix.push(row);
        constants.push(-eq.free); // Negativo porque é passado para o outro lado da equação
    }

    // Resolver o sistema de equações (Eliminação de Gauss)
    function gaussianElimination(matrix, constants) {
        const n = matrix.length;
        for (let i = 0; i < n; i++) {
            // Procurar o maior elemento na coluna atual
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxRow][i])) {
                    maxRow = k;
                }
            }

            // Trocar linhas
            [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
            [constants[i], constants[maxRow]] = [constants[maxRow], constants[i]];

            // Normalizar a linha atual
            const divisor = matrix[i][i];
            if (Math.abs(divisor) < 1e-10) return null; // Sistema sem solução ou indeterminado
            for (let j = i; j < n; j++) matrix[i][j] /= divisor;
            constants[i] /= divisor;

            // Eliminar as variáveis abaixo
            for (let k = i + 1; k < n; k++) {
                const factor = matrix[k][i];
                for (let j = i; j < n; j++) {
                    matrix[k][j] -= factor * matrix[i][j];
                }
                constants[k] -= factor * constants[i];
            }
        }

        // Resolver o sistema triangular superior
        const solution = Array(n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            solution[i] = constants[i];
            for (let j = i + 1; j < n; j++) {
                solution[i] -= matrix[i][j] * solution[j];
            }
        }
        return solution;
    }

    const result = gaussianElimination(matrix, constants);
    if (!result) return null;

    // Mapear a solução para as variáveis
    return new Map(varList.map((v, i) => [v, result[i]]));
}

// Teste
const equations = [
    "2x + 4y + 6z = 18",
    "3y + 3z = 6",
    "x + 2y = z - 3"
];

// console.log(solve(equations));

//RGB To Hex Conversion
function rgbConversion(rgb){
    let conversion = '#'
    let hex = new Map()
    let alf = ['a','b','c','d','e','f']
    let num = [10,11,12,13,14,15]
    for(let i in alf){
        hex.set(num[i],alf[i])
    }
    for(let i in rgb){
        if(rgb[i] < 0){

        }else if(rgb[i] > 255){
            
        }else{
            let quociente = Math.floor(rgb[i] / 16)
            let resto = Math.floor(rgb[i] % 16)
            let temp_conversion = ''
            let q = quociente < 10?String(quociente):String(hex.get(quociente))
            let r = resto < 10?String(resto):String(hex.get(resto))
            temp_conversion+=q+r
            conversion+=temp_conversion
        }


    }
    return conversion
}
// console.log(rgbConversion([255,255,255]))

//Human Readable Time
function humanReadable(seconds) {
    if(seconds < 0) return null;
    let segundos = seconds
    let minutos = Math.floor(segundos / 60)
    let hora = Math.floor(minutos / 60)
    let res = ''
    if(hora > 99){
        res+='99:'
    }else{
        res+=String(hora).concat(':')
    }
    if(minutos > 59){
        res+='59:'
    }else{
        res+=String(minutos).concat(':')
    }
    if(seconds > 59){
        res+='59'
    }else{
        res+=String(segundos)
    }
    return res
}
// console.log(humanReadable(359999))

function firstNonRepeatingLetter(s) {
    s = s.split('')
    for(let i in s){
        let repet = s.filter((l)=> l.toLowerCase() == s[i].toLowerCase())
        if(repet.length == 1){
            return s[i]
        }
    }
}
// console.log(firstNonRepeatingLetter(' iwDwW59viI;LMxADnEc5XMCVVrX3hp0u '))

function findMostAdjacent(grid) {
    const N = grid.length;
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    
    // Directions for moving horizontally and vertically
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];
    
    // BFS or DFS helper function to count the size of the group
    function dfs(x, y, value) {
        let stack = [[x, y]];
        let count = 0;
        visited[x][y] = true;
        
        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            count++;
            
            // Explore neighbors
            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;
                if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny] && grid[nx][ny] === value) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                }
            }
        }
        
        return count;
    }

    let maxSize = 0;
    let minValue = Infinity;

    // Iterate over every cell in the grid
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                const value = grid[i][j];
                const size = dfs(i, j, value);
                
                // Update the max size and min value if necessary
                if (size > maxSize || (size === maxSize && value < minValue)) {
                    maxSize = size;
                    minValue = value;
                }
            }
        }
    }

    return [minValue, maxSize];
}

// Example test cases
const grid1 = [
    [1, 2, 1],
    [1, 1, 0],
    [0, 0, 0],
];
console.log(findMostAdjacent(grid1)); // Output: [0, 4]

const grid2 = [
    [7, 2, 5, 1],
    [7, 2, 5, 8],
    [7, 2, 5, 8],
    [7, 2, 5, 1],
];
// console.log(findMostAdjacent(grid2)); // Output: [2, 4]
//Recursion: Underscore-Hash Staircase
function recursionStair(n, step = 1) {
    if (step > Math.abs(n)) {
        return; // Caso base: quando a etapa atual ultrapassa o tamanho
    }

    const absN = Math.abs(n);
    const underscores = '_'.repeat(n > 0 ? absN - step : step - 1);
    const hashes = '#'.repeat(n > 0 ? step : absN - step + 1);

    console.log(underscores + hashes); // Imprime a linha atual

    recursionStair(n, step + 1); // Chama a função recursivamente para a próxima linha
}

// // Testes
// recursionStair(3);
// recursionStair(7);
// recursionStair(-8);
// //Centered Hexagonal Number
function hexLattice(n) {
    // Verifica se `n` é hexagonal centralizado
    const k = (Math.sqrt(12 * n - 3) + 3) / 6;
    if (!Number.isInteger(k) || k <= 0) {
        return "Invalid";
    }

    // Gera a ilustração em múltiplas linhas
    const rows = [];
    const mid = Math.ceil(k); // O meio da estrutura

    // Construção da metade superior e linha do meio
    for (let i = 1; i <= mid; i++) {
        const spaces = " ".repeat(mid - i); // Espaços iniciais
        const dots = "o ".repeat(mid + i - 1).trim(); // Pontos
        rows.push(`${spaces}${dots}${spaces}`);
    }

    // Construção da metade inferior
    for (let i = mid - 1; i >= 1; i--) {
        const spaces = " ".repeat(mid - i);
        const dots = "o ".repeat(mid + i - 1).trim();
        rows.push(`${spaces}${dots}${spaces}`);
    }

    return rows.join("\n");
}

// Testes
// console.log(hexLattice(1)); // o
// console.log(hexLattice(7)); // Hexágono com 7 pontos
// console.log(hexLattice(19)); // Hexágono com 19 pontos
// console.log(hexLattice(21)); // Invalid

//Numbers First, Letters Second
function numThenChar(mat){
    let len_mat = []
    let str = mat.flat().filter((n)=> isNaN(n))
    let num = mat.flat().filter(s => !isNaN(s))
    // console.log() [num,str].flat()
    let swaped
    do{
        swaped = false
        for(let i = 0;i < str.length;i++){
            if(str[i] > str[i+1]){
                let temp = str[i]
                str[i] = str[i+1]
                str[i+1] = temp
                swaped = true 
            }
        }
        for(let i = 0;i < num.length;i++){
            if(num[i] > num[i+1]){
                let temp = num[i]
                num[i] = num[i+1]
                num[i+1] = temp
                swaped = true 
            }
        }
    }while(swaped)
    let new_arrNUm = [num,str].flat()
    for(let i in mat){
        let arr_new = Array(mat[i].length)
        let arr = []
        for(let e = 0;e < arr_new.length;e++){
            arr.push(new_arrNUm.shift())
        }
        len_mat.push(arr)
    }
    return len_mat
}
// console.log(numThenChar([
//     [1, 2, 4, 3, "a", "b"],
//     [6, "c", 5], [7, "d"],
//     ["f", "e", 8]
//   ]))

// What Gives a Bad Mood?
//Factoradic class
function classFactorial(expression){
    let fat = new Map()
    expression = expression.split('')
    for(let i in expression){
       if(!isNaN(expression[i]) && expression[Number(i)+1] == '!'){
        let fator = fatorial(Number(expression[i]))
        fat.set(expression[i]+expression[Number(i)+1],String(fator))
       }
    }
    expression = expression.join('')
    for(let [chave,...valor] of fat){
        expression = expression.replace(chave,valor)
    }
    let operacoes = ['+','-','*','/']
    do{
        for(let i = 0;i < expression.length;i++){
            if(expression[i] == '*' || expression[i] == '/'){
                let expressao_troca = expression[Number(i)-1]+expression[i]+expression[Number(i)+1]
                let calc = expression[i] == '*'?Number(expression[i-1] )* Number(expression[i+1]):Number(expression[i-1]) / Number(expression[i+1])
              
                expression = expression.replace(expressao_troca,calc)
                break
            }
        }

    }while(expression.includes('*'|| '/'))
        do{
            for(let i = 0;i < expression.length;i++){
                if(expression[i] == '+' || expression[i] == '-'){
                    let expressao_troca = expression[Number(i)-1]+expression[i]+expression[Number(i)+1]
                    let calc = expression[i] == '+'?Number(expression[i-1]) + Number(expression[i+1]):Number(expression[i-1]) - Number(expression[i+1])
                  
                    expression = expression.replace(expressao_troca,calc)
                    break
                }
            }
    
        }while(expression.includes('+'|| '-'))
    return expression
    // while(expression.includes('!')){

    // }
}
function fatorial(n){
    if(n == 0){
        return 1
    }
    return n * fatorial(n -1)
}
// console.log(classFactorial('5!/2'))


// // Emirps
// function numersEmprs(n){
//     let isPrimeInvert = []

//     let max = Math.max(...isPrimeInvert)
//     let min = Math.min(...isPrimeInvert)
//     let sum = isPrimeInvert.reduce((a,b)=>a+b)
//     function numbersTest(number){
//         if(n == 1){
//             return [min,max,sum]
//         }else{
//             function isPrime(num,count){
//               if(count == num){
//                 return true
//               }  
//               if(num % count == 0){
//                 return false
//               }
//               return isPrime(num,count+1)
//             }
//             let num = isPrime(number,2)
//             if(num){
//                 let num_str = String(number)
//                 let invert = num_str[1]+num_str[0]
//                 let invert_num = isPrime(Number(invert))
//                 if(invert_num){
//                     isPrimeInvert.push(Number(invert)) 
//                 }
//             }
//             return numbersTest(n-1)
//         }
//     }
//     return numbersTest(n)

// }//o(log n)(log n)
// console.log(numersEmprs(100))
function find_emirp(n) {
    // Gerar todos os números primos abaixo de n usando o Crivo de Eratóstenes
    function generatePrimes(limit) {
        const sieve = Array(limit).fill(true);
        sieve[0] = sieve[1] = false; // 0 e 1 não são primos

        for (let i = 2; i * i < limit; i++) {
            if (sieve[i]) {
                for (let j = i * i; j < limit; j += i) {
                    sieve[j] = false;
                }
            }
        }
        return sieve.map((isPrime, index) => (isPrime ? index : null)).filter((num) => num !== null);
    }

    // Verificar se um número é palíndromo
    function isPalindrome(num) {
        const str = String(num);
        return str === str.split('').reverse().join('');
    }

    const primes = generatePrimes(n);
    const primeSet = new Set(primes); // Usar um conjunto para busca rápida

    const emirps = [];
    for (const prime of primes) {
        const reversed = Number(String(prime).split('').reverse().join(''));
        if (prime !== reversed && primeSet.has(reversed)) {
            emirps.push(prime);
        }
    }

    if (emirps.length === 0) {
        return [0, 0, 0];
    }

    const largest = Math.max(...emirps);
    const sum = emirps.reduce((a, b) => a + b, 0);
    return [emirps.length, largest, sum];
}

// Exemplos:
// console.log(find_emirp(10));  // ➞ [0, 0, 0]
// console.log(find_emirp(50)); // ➞ [4, 37, 98]
// console.log(find_emirp(100)); // ➞ [8, 97, 418]
// Sum of Pairs
function sum_pairs(arr,n){
    let index_mai = 0
    let pair = []
    for(let i = 0;i < arr.length;i++){
        let compare = arr[i]
        for(let j = i+1;j < arr.length;j++){
            if(compare+arr[j] == n){
                let sum_index = Number(i+j)
                if(index_mai < sum_index){
                    pair = [arr[j],arr[i]]
                }
            }

        }
    }
    return pair

}
// console.log(sum_pairs([10, 5, 2, 3, 7, 5],10))
//Calculating with Functions
function plus(num){

    return {number:null,sinal:'+',adicionar:num,fun:null}
}
function divide(num){
    return {number:null,sinal:'/',adicionar:num,fun:null}
}
function multiple(num){
    return {number:null,sinal:'*',adicionar:num,fun:null}
}
function minus(num){
    return {number:null,sinal:'-',adicionar:num,fun:null}
}

function one(f=null){
    if(f == null ){
        return 1
    }else{
        switch(f.sinal){
            case '+':
                return f.adicionar+1
            case '-':
                return f.adicionar -1
            case '/' :
                return f.adicionar / 1
            case '*':
                return f.adicionar / 1
        }
    }

}
function two(f=null){
    if(f == null){
        return 2
    }else{
        switch(f.sinal){
            case '+':
                return f.adicionar+2
            case '-':
                return f.adicionar -2
            case '/' :
                return f.adicionar / 2
            case '*':
                return f.adicionar / 2
        }
    }

}
function tree(f = null ){
    if(f == null){
        return 3
    }else{
        switch(f.sinal){
            case '+':
                return f.adicionar+3
            case '-':
                return f.adicionar -3
            case '/' :
                return f.adicionar / 3
            case '*':
                return f.adicionar / 3
        }
    }

}
function four(f=null){
    if(f == null){
        return 4
    }else{
        switch(f.sinal){
            case '+':
                return f.adicionar+4
            case '-':
                return f.adicionar -4
            case '/' :
                return f.adicionar / 4
            case '*':
                return f.adicionar / 4
        }
    }

}
function five(f=null){
    if(f == null){
        return 5
    }else{
        switch(f.sinal){
            case '+':
                return f.adicionar+5
            case '-':
                return f.adicionar -5
            case '/' :
                return f.adicionar / 5
            case '*':
                return f.adicionar / 5
        }
    }

}
let calc = one(plus(tree()))
// console.log(calc)


// parseInt() reloaded

// Land perimeter
// int32 to IPv4
function intToIPv4(num) {
    // Obtenha cada octeto usando deslocamentos de bits e máscaras
    const octet1 = (num >> 24) & 255; // Extrai os 8 bits mais significativos
    const octet2 = (num >> 16) & 255; // Próximos 8 bits
    const octet3 = (num >> 8) & 255;  // Próximos 8 bits
    const octet4 = num & 255;         // Últimos 8 bits

    // Combine os octetos em uma string no formato IPv4
    return `${octet1}.${octet2}.${octet3}.${octet4}`;
}

// Exemplo de uso
const num = 2149583361;
// console.log(intToIPv4(num)); // Saída: "128.32.10.1"

//jogo da velha 3



//Four Letter Words ~ Mutations
//5hku
function mutations(word) {
    let length_palavras_bob = ['boar', 'clap', 'farm', 'lend', 'near', 'peat', 'pure', 'more', 'plan', 'soap'];
    let length_palavras_alice = ['plat', 'rend', 'bear', 'soar', 'mare', 'pare', 'flap', 'neat', 'clan', 'pore'];

    function isValidMutation(word1, word2) {
        if (word1.length !== 4 || word2.length !== 4) return false;

        let diffCount = 0;
        for (let i = 0; i < 4; i++) {
            if (word1[i] !== word2[i]) {
                diffCount++;
            }
        }
        return diffCount === 1;
    }

    function jogo(initial_word, vez) {
        while (true) {
            if (vez === 'bob') {
                let jogou = false;
                for (let i in length_palavras_bob) {
                    if (length_palavras_bob[i] && isValidMutation(initial_word, length_palavras_bob[i])) {
                        initial_word = length_palavras_bob[i];
                        length_palavras_bob[i] = null;
                        vez = 'alice';
                        jogou = true;
                        break;
                    }
                }
                if (!jogou) return 'alice ganhou o jogo';
            } else {
                let jogou = false;
                for (let i in length_palavras_alice) {
                    if (length_palavras_alice[i] && isValidMutation(initial_word, length_palavras_alice[i])) {
                        initial_word = length_palavras_alice[i];
                        length_palavras_alice[i] = null;
                        vez = 'bob';
                        jogou = true;
                        break;
                    }
                }
                if (!jogou) return 'bob ganhou o jogo';
            }
        }
    }

    if (length_palavras_alice.length > 2000 || length_palavras_bob.length > 2000) {
        return false;
    } else {
        let start = Math.floor(Math.random() * 2);
        return start === 1 ? jogo(word, 'bob') : jogo(word, 'alice');
    }
}

// console.log(mutations('rend'));
console.clear()

