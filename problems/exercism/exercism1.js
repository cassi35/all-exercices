//generateSpiralMatrix
console.clear()
function spiral_matrix(size){
    let matrix = Array.from({length:size},()=>Array(size).fill(null))
    let left = 0
    let right = size -1
    let top = 0
    let button = size -1
    let num = 1
    while(left <= right && top <= button){
        for(let i = left;i <= right;i++){
            matrix[top][i] = num++
        }
        top++
        for(let i = top;i <= button;i++){
            matrix[i][right] = num++
        }
        right--
        if(top <= button){
            for(let i = right;i >= left;i--){
                matrix[button][i] = num++
            }
            button--
        }
        if(left <= right){
            for(let i = button;i >= top ;i--){
                matrix[i][left] = num++
            }
            left++
        }
    }
    return matrix
}
// 
// console.log(spiral_matrix(4))

//Change
function change(troco,moedas){
   for(let i = 0;i < moedas.length;i++){
    if(moedas[i] == troco){
        return moedas[i]
    }else{
        let soma = moedas[i]
        let nums = []
        nums.push(moedas[i])
        let j = i+1
        while(soma < troco && j < moedas.length){
            nums.push(moedas[j])
            soma = soma + moedas[j]
            j++
        } 
        if(soma == troco){
            return nums
        }

    }
   }
    return "can't make target with given coins"
   
}
// let menor_numero_de_moedas = change(15,[1, 5, 10, 25, 100])
// console.log(menor_numero_de_moedas)

// O Rail Fence Cipher
// Função para codificar usando Rail Fence Cipher
function encodeRailFenceCipher(text, numRails) {
    let rails = Array.from({ length: numRails }, () => Array(text.length).fill(' '));
    let rail = 0;
    let direction = 1;

    for (let i = 0; i < text.length; i++) {
        rails[rail][i] = text[i];
        rail += direction;

        if (rail === numRails - 1 || rail === 0) {
            direction *= -1;
            console.log(direction)
        }
    }
    // Exibir o texto em formato de zigue-zague corretamente
    let visualRail = rails.map(row => row.join('')).join('\n');
    console.log("Texto em formato zigue-zague:\n" + visualRail);

    return rails.flat().filter(char => char !== ' ').join('');
}

// Testes
console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 4));
