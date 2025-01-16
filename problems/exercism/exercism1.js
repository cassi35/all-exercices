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
// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 4));

// Linked List 
function agendamento_de_trems(){
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }
    
    class DoublyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }
    
        // Adicionar um nó no final
        append(data) {
            const newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
    
        // Adicionar um nó no início
        prepend(data) {
            const newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        }
    
        // Remover um nó com base em um valor
        remove(data) {
            if (!this.head) return;
            let current = this.head;
    
            while (current) {
                if (current.data === data) {
                    if (current === this.head && current === this.tail) {
                        this.head = null;
                        this.tail = null;
                    } else if (current === this.head) {
                        this.head = this.head.next;
                        this.head.prev = null;
                    } else if (current === this.tail) {
                        this.tail = this.tail.prev;
                        this.tail.next = null;
                    } else {
                        current.prev.next = current.next;
                        current.next.prev = current.prev;
                    }
                    return;
                }
                current = current.next;
            }
        }
    
        // Exibir a lista
        display() {
            let current = this.head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
    
    // Exemplo de uso:
    const list = new DoublyLinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.display();
    list.remove(20);
    list.display();
    list.prepend(5);
    list.display();
    
}
// agendamento_de_trems()

function cost(books) {
    const bookPrice = 800; // Preço de cada livro em centavos
    const discounts = {
        1: 0,
        2: 5,
        3: 10,
        4: 20,
        5: 25
    };

    let totalCost = 0;
    let bookCounts = [0, 0, 0, 0, 0]; // Contagem de cada livro (de 1 a 5)

    // Contando quantos de cada livro temos
    for (let book of books) {
        bookCounts[book - 1]++;
    }

    // Enquanto houver livros para agrupar
    while (bookCounts.some(count => count > 0)) {
        let groupSize = 0;
        let group = [];

        // Tentando formar o maior número de livros diferentes possível
        for (let i = 0; i < 5; i++) {
            if (bookCounts[i] > 0) {
                group.push(i);
                bookCounts[i]--; // Diminuindo a quantidade do livro usado no grupo
                groupSize++;
            }
        }

        // Aplicando o desconto com base no tamanho do grupo
        let discount = discounts[groupSize];
        let groupCost = groupSize * bookPrice * (100 - discount) / 100;

        // Adicionando o custo do grupo ao total
        totalCost += groupCost;
    }

    return Math.round(totalCost); // Retorna o valor total em centavos
}

// Exemplo de uso:
let books = [1, 1, 2, 2, 3, 3, 4, 5]; // Exemplificando o caso mencionado
// console.log(cost(books)); // Resultado esperado: 5120 centavos ou $51.20
//Reverse String

function reverse_string(string){
    let start = 0
    let end = string.length 
    string = string.split('')
    while(start != end){
        [string[start],string[end]] = [string[end],string[start]]
        start+=1
        end-=1
    }
    console.log(string.join('').replaceAll(',',''))
}
let reverse_func = ()=>{
    let string = 'desserts'
    reverse_string(string)
}
// reverse_func()
// Word Count

function word_count(legenda){
    let remove = ['?','\n','.','!','']
    let palavras = legenda.split('').filter(letra => !remove.includes(letra)).join('').split(' ')
    for(let i in palavras){
        if(palavras[i].split('').includes("'")){
            let index = palavras[i].split('').filter((l)=> l != "'").join('')
            palavras[i] = index
        }
    }
    let output = ''
    let total_word = 0
    for(let i in palavras){
        if(!output.includes(palavras[i])){
            let result = palavras.filter((word)=> word == palavras[i]).length 
            let mensagem = `\n${palavras[i]}:${result}\n`
            output+=mensagem
            total_word+=1
        }
    }
    output+=`\n the total words is ${total_word}`
    return console.log(output)
}
//Sua tarefa é contar quantas vezes cada palavra ocorre na legenda de um drama.

let count = ()=>{
    let legenda = "what's your name? i'm sorry i'm cassiano"
    word_count(legenda)
}
count()
