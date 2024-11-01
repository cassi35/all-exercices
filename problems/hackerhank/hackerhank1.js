console.clear()
//hackerhank medium problems my answers
//01 factorials 
function extraLongFactorials(n) {
    // Write your code here
    let nBigInt = BigInt(n)
    let result = 1n;
    
    for(let i = nBigInt; i > 0; i--){
        
        result *= i; 
    }
    console.log(result.toString());
    
}
console.log(extraLongFactorials(25))
//02  magic square
function formingMagicSquare(s) {
    var magicSquares = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
      ];
      let minCoast = Infinity
      for(var magicSquare of magicSquares){
        let cuurentCost = 0
        for(let i = 0;i < 3;i++){
            for(let j = 0;j < 3;j++){
                cuurentCost+=Math.abs(s[i][j] - magicSquare[i * 3 + j])
            }
        }
        minCoast = Math.min(minCoast,cuurentCost)
      }
      return minCoast
}
//03 
function flatlandSpaceStations(n, c) {
    // Primeiro, ordena o array de cidades com estações espaciais
    c.sort((a, b) => a - b);

    // Define a variável para a maior distância
    let maxDistance = 0;

    // Calcula a maior distância para cidades antes da primeira estação espacial
    maxDistance = c[0]; // Distância máxima até a primeira estação espacial

    // Calcula a maior distância para cidades depois da última estação espacial
    maxDistance = Math.max(maxDistance, (n - 1) - c[c.length - 1]);

    // Calcula a maior distância para cidades entre as estações espaciais
    for (let i = 1; i < c.length; i++) {
        let distance = (c[i] - c[i - 1]) / 2; // Distância até a estação espacial mais próxima
        maxDistance = Math.max(maxDistance, distance);
    }

    return Math.floor(maxDistance); // Arredonda para baixo se for necessário
}

// Exemplo de uso
console.log(flatlandSpaceStations(3, [1])); // Deve imprimir 1
var bubbleSort = (arr)=>{
    arr = arr.split('')
    const n = arr.length
    for(let i = 0;i < n;i++){
        for(let j = 0;j < n-i-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }//o(n²)
    return arr ;
}
function superReducedString(s) {
    // Write your code here
    const output = [];
    //loop through given string
    for (let i = 0; i < s.length; i++) {
      //check if your output is > 0 and last number === current string, if yes remove it
      if (output.length > 0 && output[output.length - 1] === s[i]) output.pop();
      //if no, push current string to output
      else output.push(s[i]);
    }
    //convert array to string, if string truthy return string || if falsy return "Empty String"
    return output.join("") || "Empty Strings";
  }
  console.log(superReducedString('aaaabbbbcc'))
//sum diagonal mat  
  function diferenca(){

  }
var matrix = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]
var esquerda = 0
var direita = 0
for(var i = 0;i < matrix.length;i++){
esquerda = esquerda +matrix[i][i]
direita = direita+matrix[i][matrix.length - 1 -i]

}
var diferencas
if(esquerda > direita){
diferencas  = esquerda - direita 
}else{
    diferencas = direita -esquerda
}
console.log(diferencas)
/* 
function compareTriplets(a, b) { let aliceScore = 0; let bobScore = 0;

for (let i = 0; i < a.length; i++) { if (a[i] > b[i]) { aliceScore++; } else if (a[i] < b[i]) { bobScore++; } } return [aliceScore, bobScore]; }
*/
console.clear()



function marsExploration(str){
    let can = ['s','o']
    let arr_str = str.split('')
    let c = 0
    for(let compare of arr_str){
        if(!can.includes(compare)){
            c++
        }
    }
    return c 
}



//absolute permutation.


function larrysArray(A) {
    // Conta o número de inversões
    let inversions = 0;
    let n = A.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (A[i] > A[j]) {
                inversions++;
            }
        }
    }
    
    // Verifica se o número de inversões é par
    if (inversions % 2 === 0) {
        return "YES";
    } else {
        return "NO";
    }
}

//ema is supercomputer
function twoPluses(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function to get max possible arm length of a plus at a given cell
    function getPlusSize(r, c) {
        let size = 0;
        while (r - size >= 0 && r + size < rows && c - size >= 0 && c + size < cols &&
               grid[r - size][c] === 'G' && grid[r + size][c] === 'G' &&
               grid[r][c - size] === 'G' && grid[r][c + size] === 'G') {
            size++;
        }
        return size - 1; // Decrement by 1 to get the actual size
    }

    // Find all possible pluses and their sizes
    const pluses = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'G') {
                const maxSize = getPlusSize(r, c);
                for (let size = 0; size <= maxSize; size++) {
                    pluses.push({ r, c, size, area: 4 * size + 1 });
                }
            }
        }
    }

    // Check if two pluses overlap
    function overlap(plus1, plus2) {
        const cells1 = new Set();
        const cells2 = new Set();

        // Generate cells occupied by plus1
        for (let i = 0; i <= plus1.size; i++) {
            cells1.add(`${plus1.r + i},${plus1.c}`);
            cells1.add(`${plus1.r - i},${plus1.c}`);
            cells1.add(`${plus1.r},${plus1.c + i}`);
            cells1.add(`${plus1.r},${plus1.c - i}`);
        }

        // Generate cells occupied by plus2 and check for overlap
        for (let i = 0; i <= plus2.size; i++) {
            if (cells1.has(`${plus2.r + i},${plus2.c}`) ||
                cells1.has(`${plus2.r - i},${plus2.c}`) ||
                cells1.has(`${plus2.r},${plus2.c + i}`) ||
                cells1.has(`${plus2.r},${plus2.c - i}`)) {
                return true;
            }
        }
        return false;
    }

    // Calculate maximum product of areas for two non-overlapping pluses
    let maxProduct = 0;
    for (let i = 0; i < pluses.length; i++) {
        for (let j = i + 1; j < pluses.length; j++) {
            const plus1 = pluses[i];
            const plus2 = pluses[j];
            if (!overlap(plus1, plus2)) {
                const product = plus1.area * plus2.area;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }

    return maxProduct;
}


//apple and orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Contador para maçãs que caem na casa de Sam
    let applesOnHouse = 0;
    // Contador para laranjas que caem na casa de Sam
    let orangesOnHouse = 0;

    // Calcula a posição final de cada maçã e verifica se cai na casa de Sam
    for (let i = 0; i < apples.length; i++) {
        let applePosition = a + apples[i];
        if (applePosition >= s && applePosition <= t) {
            applesOnHouse++;
        }
    }

    // Calcula a posição final de cada laranja e verifica se cai na casa de Sam
    for (let i = 0; i < oranges.length; i++) {
        let orangePosition = b + oranges[i];
        if (orangePosition >= s && orangePosition <= t) {
            orangesOnHouse++;
        }
    }

    // Imprime o número de maçãs e laranjas que caem na casa de Sam
    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function migratoryBirds(arr) {
    const count = {};
    let maxCount = 0;
    let minBirdId = Infinity;

    for (let bird of arr) {
        count[bird] = (count[bird] || 0) + 1;
        if (count[bird] > maxCount) {
            maxCount = count[bird];
            minBirdId = bird;
        } else if (count[bird] === maxCount) {
            minBirdId = Math.min(minBirdId, bird);
        }
    }

    return minBirdId;
}

console.log(migratoryBirds([1 ,4 ,4 ,4 ,5 ,3]))