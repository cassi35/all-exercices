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


console.log(first_non_repeating_letter('stress'))

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
console.log(greed(mat))

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
console.log(isPP(5))

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

console.log(solve(equations));
