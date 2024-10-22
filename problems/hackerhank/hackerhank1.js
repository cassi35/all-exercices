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














