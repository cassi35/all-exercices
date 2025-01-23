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
// count()
function bank_account() {
    class Pessoa {
        constructor(name) {
            this.name = name;
            this.dinheiro = 0;
            this.proximo = null;
        }
        adicionar(valor) {
            this.dinheiro += valor;
        }
    }

    class ListaPessoas {
        constructor() {
            this.head = null;
            this.size = 0;
        }

        isEmpty() {
            return this.head == null;
        }

        search(lista_nome, pessoa) {
            if (!lista_nome) return null;
            if (lista_nome.name === pessoa) return lista_nome;
            return this.search(lista_nome.proximo, pessoa);
        }

        adicionarDinheiro(nome, dinheiro) {
            if (this.isEmpty()) {
                console.log("Nenhuma conta encontrada.");
                return;
            }

            let conta = this.search(this.head, nome);
            if (conta) {
                let saldoAtual = conta.dinheiro;
                conta.adicionar(dinheiro);
                console.log(
                    `${conta.name} tinha saldo de ${saldoAtual}. Adicionando ${dinheiro}, agora tem ${conta.dinheiro}.`
                );
            } else {
                console.log(`Conta de ${nome} não encontrada.`);
            }
        }

        sacar(nome, dinheiro) {
            if (this.isEmpty()) {
                console.log("Nenhuma conta encontrada.");
                return;
            }

            let conta = this.search(this.head, nome);
            if (conta) {
                if (conta.dinheiro >= dinheiro) {
                    conta.dinheiro -= dinheiro;
                    console.log(
                        `Sr(a). ${conta.name}, você sacou ${dinheiro}R$. Saldo atual: ${conta.dinheiro}R$.`
                    );
                } else {
                    console.log(
                        `Saldo insuficiente. Saldo atual: ${conta.dinheiro}R$.`
                    );
                }
            } else {
                console.log(`Conta de ${nome} não encontrada.`);
            }
        }

        fecharConta(nome) {
            if (this.isEmpty()) {
                console.log("Nenhuma conta encontrada.");
                return;
            }

            if (this.head.name === nome) {
                this.head = this.head.proximo;
                console.log("Conta fechada com sucesso.");
                this.size--;
                return;
            }

            let atual = this.head;
            while (atual.proximo && atual.proximo.name !== nome) {
                atual = atual.proximo;
            }

            if (atual.proximo) {
                atual.proximo = atual.proximo.proximo;
                console.log("Conta fechada com sucesso.");
                this.size--;
            } else {
                console.log(`Conta de ${nome} não encontrada.`);
            }
        }

        append(name, dinheiro) {
            let novaConta = new Pessoa(name);
            novaConta.adicionar(dinheiro);

            if (this.isEmpty()) {
                this.head = novaConta;
            } else {
                let atual = this.head;
                while (atual.proximo) {
                    atual = atual.proximo;
                }
                atual.proximo = novaConta;
            }
            this.size++;
            console.log(`Conta de ${name} criada com saldo de ${dinheiro}R$.`);
        }

        printarPessoas() {
            if (this.isEmpty()) {
                console.log("Nenhuma pessoa cadastrada.");
                return;
            }

            let atual = this.head;
            let nomes = [];
            while (atual) {
                nomes.push(atual.name);
                atual = atual.proximo;
            }
            console.log("Contas no banco: " + nomes.join(", "));
        }
    }

    // Teste
    let banco = new ListaPessoas();
    banco.append("cassiano", 0);
    banco.append("maria", 12);
    banco.printarPessoas();
    banco.adicionarDinheiro("cassiano", 50);
    banco.sacar("maria", 5);
    banco.fecharConta("cassiano");
    banco.printarPessoas();
}
// bank_account();
// Tournament 
// Scale Generator 
function generate_scale(nota_inicial){
    if(nota_inicial == ''){
        return null
    }
    let sustenidos = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#']
    let bemois = ['A','Bb','C','Db','D','Eb','E','F','Gb','G','Ab']
    if(sustenidos.includes(nota_inicial)){
        let index = bemois.findIndex((l)=>l == nota_inicial)
        let escala_cromatica = [bemois.slice(index),bemois.slice(0,index+1)].flat()
        let escala_diatonicas = []
        for(let i = 0;i < escala_cromatica.length ;i+=1){
            if(escala_diatonicas.length == 7){
                break
            }else{
                if(escala_cromatica[i].toLocaleLowerCase() == escala_cromatica[i]){
                    i++
                }else{
                    escala_diatonicas.push(escala_cromatica[i])
                }
            }
        }
        return escala_diatonicas
    }else{
        let index = sustenidos.findIndex((l)=>l == nota_inicial)
        let escala_cromatica = [sustenidos.slice(index),bemois.slice(0,index+1)].flat()
        let escala_diatonicas = []
        for(let i = 0;i < escala_cromatica.length;i+=1){
            if(escala_cromatica.length == 7){
                break
            }else{
                if(escala_cromatica[i].toUpperCase() == escala_cromatica[i]){
                    i++
                }else{
                    escala_diatonicas.push(escala_cromatica[i])
                }
            }
        }
        return escala_diatonicas
    }
}
let entreada_scale  = ()=>{
    let generate = generate_scale('E')
    console.log(generate)
}
// entreada_scale()
// Transpose

function transpose(texto){
    if(texto.length == '' || texto == undefined){
        return null
    }
    let transform = ''
    let arr_texto = texto.split('\n').map((element)=> element.split(''))
    let teste = 0 
    while(teste < arr_texto.length){
        let conj = ''
        for(let i in arr_texto){
            let removido  = arr_texto[i].shift()
            if(!removido){
                teste++
            }else{
                let new_conj = conj.concat(removido)
                conj = new_conj
            }
        }
        transform = transform.concat(conj).concat('\n')
    }
    return transform
   
}
let entrada_transpose = ()=>{
    let texto = 'abc\ndef'
   console.log( transpose(texto))
}
// entrada_transpose()


//Largest Series Product 
function largest_product(digitos,intervalo){
//   produto maior serie  
    let series = [] // sequencia de digitos adjasentes
    let span = [] //quantos digitos cada serie tem
    let produto = [] // quando multiplica numeros
    let maior_produto = 0
    for(let i = 0;i < digitos.length;i++){
        let serie = digitos.slice(i,intervalo+i)
        if(serie.length < intervalo){
            break
        }else{
            series.push(serie.join(''))
            let mult = 1
            span.push(serie.length)
            for(let s in serie){
                mult = mult * serie[s]
            }
            if(mult > maior_produto){
                maior_produto = mult
            }
            produto.push(mult)
        }
       
    }

    return console.log(maior_produto)
}   

let entrada_series_largest = ()=>{
    let digitos = [6,3,9,1,5]
    let intervalo = 3
    largest_product(digitos,intervalo)
}
// entrada_series_largest()

// Resistor Color Trio 
function help_resistor(colors,sequence_colors){
    let sequence = sequence_colors.split('-')
    let values = ''
    let ultimo = sequence[sequence.length-1]
    for(let [key,...value] of colors){
        if(sequence.includes(key)){
            if(key != ultimo){
                let vezes = sequence.filter(color => color == key).length 
                while(vezes > 0){
                    values = String(value).concat(values)
                    vezes--
                }
            }else{
                let vezes = value
                while(vezes > 0){
                    values = values.concat(String(0))
                    vezes--
                }
            }
        }
    }
    values = values.concat('ohms')
    return values
}
let entrada_resistor = ()=>{
    let colors = new Map()
    colors.set("black",0)
    colors.set("brown",1)
    colors.set("red",2)
    colors.set("orange",3)
    colors.set("green",5)
    colors.set("blue",6)
    colors.set("violet",7)
    colors.set("grey",8)
    colors.set("white",9)
    let sequence_color = 'orange-orange-red'
    let resistor = help_resistor(colors,sequence_color)
    console.log(resistor)
}
// entrada_resistor()


// Dominoes
function canFormChain(dominoes) {
    // Função para verificar se uma sequência de dominós forma uma cadeia válida
    function isValidChain(chain) {
        for (let i = 0; i < chain.length - 1; i++) {
            // Verifica se o número do final de uma peça combina com o início da próxima
            if (chain[i][1] !== chain[i + 1][0]) {
                return false;
            }
        }
        // Verifica se o primeiro e o último número combinam
        return chain[0][0] === chain[chain.length - 1][1];
    }

    // Função para gerar todas as permutações possíveis das peças de dominó
    function permute(array, startIndex = 0, results = []) {
        if (startIndex === array.length) {
            results.push([...array]);
            return results;
        }
        for (let i = startIndex; i < array.length; i++) {
            [array[startIndex], array[i]] = [array[i], array[startIndex]]; // Swap
            permute(array, startIndex + 1, results);
            [array[startIndex], array[i]] = [array[i], array[startIndex]]; // Undo swap
        }
        return results;
    }

    // Gera todas as permutações e verifica se alguma delas forma uma cadeia válida
    const allPermutations = permute(dominoes);
    for (let chain of allPermutations) {
        if (isValidChain(chain)) {
            return chain; // Retorna a cadeia válida encontrada
        }
    }

    return null; // Retorna null se nenhuma cadeia válida for encontrada
}

// Testes
function testDomino() {

    let test3 = [[1, 2], [2, 3], [3, 1]];
    
    console.log(canFormChain(test3)); // Exemplo válido, deve retornar uma cadeia válida
}

// testDomino();


// Say
import { exec } from "child_process";
import { clear } from "console"
import { resourceUsage } from "process"

// Verificar o sistema operacional
// const command = process.platform === "darwin" ? "say 'Hello, world!'" : "espeak 'hello cassiano how are you?'";

// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Erro ao executar: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Erro: ${stderr}`);
//     return;
//   }
//   console.log(`Resultado: ${stdout}`);
// });
//Sublist
function sublist(){
    class MySet {
        constructor() {
          this.set = [];
        }
      
        add(element) {
          if (!this.set.includes(element)) {
            this.set.push(element);
          }
        }
      
        clear() {
          this.set = [];
        }
      
        copy() {
          return new MySet().fromArray([...this.set]);
        }
      
        difference(otherSet) {
          return new MySet().fromArray(this.set.filter(item => !otherSet.has(item)));
        }
      
        differenceUpdate(otherSet) {
          this.set = this.set.filter(item => !otherSet.has(item));
        }
      
        discard(element) {
          this.set = this.set.filter(item => item !== element);
        }
      
        intersection(otherSet) {
          return new MySet().fromArray(this.set.filter(item => otherSet.has(item)));
        }
      
        intersectionUpdate(otherSet) {
          this.set = this.set.filter(item => otherSet.has(item));
        }
      
        isDisjoint(otherSet) {
          return this.set.every(item => !otherSet.has(item));
        }
      
        isSubset(otherSet) {
          return this.set.every(item => otherSet.has(item));
        }
      
        isSuperset(otherSet) {
          return otherSet.set.every(item => this.has(item));
        }
      
        pop() {
          return this.set.pop();
        }
      
        remove(element) {
          if (this.has(element)) {
            this.set = this.set.filter(item => item !== element);
          }
        }
      
        symmetricDifference(otherSet) {
          const diff1 = this.difference(otherSet);
          const diff2 = otherSet.difference(this);
          return diff1.union(diff2);
        }
      
        symmetricDifferenceUpdate(otherSet) {
          const diff = this.symmetricDifference(otherSet);
          this.set = diff.set;
        }
      
        union(otherSet) {
          return new MySet().fromArray([...this.set, ...otherSet.set]);
        }
      
        update(otherSet) {
          this.set = [...new Set([...this.set, ...otherSet.set])];
        }
      
        has(element) {
          return this.set.includes(element);
        }
      
        fromArray(arr) {
          this.set = arr;
          return this;
        }
      
        // Métodos auxiliares para imprimir o conjunto
        toString() {
          return `{${this.set.join(", ")}}`;
        }
      }
      
      // Testando a classe
      const setA = new MySet();
      setA.add(1);
      setA.add(2);
      setA.add(3);
      
      const setB = new MySet();
      setB.add(2);
      setB.add(3);
      setB.add(4);
      
     
      
}
sublist()


// Protein Translation 
function tranlation_protein(rna){
    let table = [
        {sequence:['AUG'],result:'Methionine'},
        {sequence:['UUU', 'UUC'],result:'Phenylalanine'},
        {sequence:['UUA', 'UUG'],result:'Leucine'},
        {sequence:['UCU', 'UCC', 'UCA', 'UCG'],result:'Serine'},
        {sequence:['UAU', 'UAC'],result:'Tyrosine'},
        {sequence:['UGU', 'UGC'],result:'Cysteine'},
        {sequence:['UGG'],result:'Tryptophan'},
        {sequence:['UAA', 'UAG', 'UGA'],result:'STOP'},
    ]

    let condons = []
    for(let i = 0;i < rna.length;i+=0){
        let count = 0
        let rna_actual =''
        while(count < 3){
            rna_actual = rna_actual.concat(rna[i])
            i++
            count++
        }
        condons.push(rna_actual)
    }
    let res = []
    for(let i in table){
        let arr = table[i].sequence
        if(condons.includes(arr[0])){
            let compare = condons.findIndex((protein)=> protein == arr[0])
            compare = condons.slice(compare,arr.length)
            let identical = true 
            for(let c of compare){
                if(compare[c] != arr[c]){
                    identical = false
                }
            }
            if(identical){
                res.push(table[i].result)
            }
        }
    }
    return res
}
function entrada_translation(){
    let rna = 'AUGUUUUCUUAAAUG'
    let tranlation = tranlation_protein(rna)
    console.log(tranlation)
}
// entrada_translation()
// D&D Character 
function game_dungeons_dragons(contagem,result,rodada){
    if(contagem == rodada){
        return result 
    }else{
        let gamer = []
        for(let i = 0;i < 4;i++){
            let random_number = Math.floor(Math.random()*6)
            gamer.push(random_number)
        }
        let menor = gamer[0]
        let index 
        for(let i in gamer){
            if(menor > gamer[i]){
                menor = gamer[i]
                index = i
            }
        }
        let novo_gamer = []
        for(let i in gamer){
            if(i != index){
                novo_gamer.push(gamer[i])
            }
        }
        gamer = novo_gamer
        gamer = gamer.reduce((a,b)=>a+b)
        result.push(gamer)
        return game_dungeons_dragons(contagem+1,result,rodada)
    }

}
function game_dragon_entrada(){
    let rodadas = 5
    let generate = game_dungeons_dragons(0,[],rodadas)
    
    console.log(generate)
}
// game_dragon_entrada()

// Darts
function darts_game(x,y){
    if(x < 0 || x > 8 || y < 0 || y > 8){
        return undefined
    }   
    let matrix = [
    ]
    let pontos = [0,1,5,10]
    for(let i = 0;i < pontos.length * 2;i++){
        let linha = Array(pontos.length*2).fill(null)

        matrix.push(linha)
    }
    // Preencher a matriz
    let index_x = 0; // Começa do topo (camada externa)
    let index_y = matrix.length - 1; // Última linha (inferior)
    let length_ponto = 0; // Índice do valor em "pontos"

    while (index_x <= index_y) {
        // Preenche as bordas horizontais (topo e base da camada atual)
        for (let i = index_x; i <= index_y; i++) {
            matrix[index_x][i] = pontos[length_ponto]; // Linha de cima
            matrix[index_y][i] = pontos[length_ponto]; // Linha de baixo
        }

        // Preenche as bordas verticais (esquerda e direita da camada atual)
        for (let i = index_x; i <= index_y; i++) {
            matrix[i][index_x] = pontos[length_ponto]; // Coluna da esquerda
            matrix[i][index_y] = pontos[length_ponto]; // Coluna da direita
        }

        // Avança para a próxima camada
        length_ponto++;
        index_x++;
        index_y--;
    }
    let print = ()=>{
        for(let i in matrix){
            let linha = ''
            for(let x_1 in matrix[i]){
                if(i == y && x_1 == x){
                    linha = linha.concat('  ').concat('STRIKE').concat('  ')
                }
                if(matrix[i][x_1] != 10){
    
                    linha = linha.concat('  ').concat(String(matrix[i][x_1])).concat('  ')
                }else{
                    linha = linha.concat(' ').concat(String(matrix[i][x_1])).concat(' ')
    
                }
            }
            console.log(linha)
        }
    }
    print()
    function reproduzao_a_voz(ponto_feito){
        // "espeak 'hello cassiano how are you?'"
        let mensagem_gamer 
        switch(ponto_feito){
            case 10:
                mensagem_gamer = 'strike win'
                break
            case 5:
                mensagem_gamer = 'strike ok'
                break
            case 1:
                mensagem_gamer = 'strike bad'
                break
            case 0:
                mensagem_gamer = 'strike realy bad'

        }
        let mensagem = [mensagem_gamer,`${ponto_feito} points`]
        function executar_reproducao(msg){
            const command = process.platform === "darwin" ? "say 'Hello, world!'" : `espeak '${msg}'`;
            exec(command, (error, stdout, stderr) => {
              if (error) {
                console.error(`Erro ao executar: ${error.message}`);
                return;
              }
              if (stderr) {
                console.error(`Erro: ${stderr}`);
                return;
              }
            });
        }
        let time = 2000
        for(let i in mensagem){
            setTimeout(()=>{
                executar_reproducao(mensagem[i])
            },time)
            time+=1500
        }
    }
    let ponto = matrix[x][y]
    return reproduzao_a_voz(ponto)

    
}
function entrada_darts_game(){
    let x = 3
    let y = 3
    let pontos = darts_game(x,y)
    console.log(pontos)
}
// entrada_darts_game()
// import {Configuration} from "openai"

// Sum of Multiples 




//Sieve
function sieve(num){
    let generator = []
    for(let i = 2 ;i <= num;i++){
        generator.push(i)
    }
    for(let i in generator){
        if(generator[i] != null){
           let number = generator[i]
           let marcado = false
           for(let e in generator){
            if(generator[i] != generator[e] && generator[e] % number == 0 && generator[e] != null){
                marcado = true
                generator[e] = null 
            }
           }
           if(marcado){
            generator[i] = null
           }
        }
    }
    return generator.filter((numbers)=> numbers != null)
}
function entrada_sieve(){
    let number = 10
    let sieve_algortimn = sieve(number)
    console.log(sieve_algortimn)
}
// entrada_sieve()
// Atbash Cipher 
function atbash_cipher(string){
    let start = 0
    let end = string.length
    string = string.split('')
    while(start != end){
        [string[start],string[end]] = [string[end],string[start]]
        start++
        end--
    }
    return string.join('')
}
function entrada_atbash_cipher(){
    let string_cripher = 'abcdefghijklmnopqrstuvwxyz'
    let criptograph = atbash_cipher(string_cripher)
    console.log(criptograph)
}
// entrada_atbash_cipher()

// / Sum of Multiples 
function sum_of_multiples(number){ 
    let set_3 = new Set()
    let set_5 = new Set()
    for(let i = 3;i < number;i+=3){
        set_3.add(i)
    }
    for(let i = 5;i < number;i+=5){
        set_5.add(i)
    }
    for(let value of set_5.values()){
        if(!set_3.has(value)){
            set_3.add(value)
        }
    }
    let sum = 0
    for(let value of set_3.values()){
        sum+=value
    }
    return sum
}
function entrada_sum_of_multiples(){
    let number = 20
    let sum = sum_of_multiples(number)
    console.log(sum)
}
// entrada_sum_of_multiples()
// Saddle Points  
function perfect_tree(matrix){
    let column = 0
    while(column < matrix.length){
        for(let i in matrix[column]){
            let number = matrix[column][i]
            let linha = matrix[column]
            let coluna = []
            for(let e in matrix){
                coluna.push(matrix[e][i])
            }
            let min = Math.min(...coluna)
            let max = Math.max(...linha)
            if(min == number && max == number){
                return number
            }

        }
        column++
    }
}
function entrada_perfect_tree(){
    let matrix = [
        [9,8,7,8],
        [5,3,2,4],
        [6,6,7,1]

    ]
    let perfect = perfect_tree(matrix)
    console.log(perfect)
}
// entrada_perfect_tree()
//http://goclasses.sh.utfpr.edu.br/wp-content/uploads/2021/06/LPE-Exercicios-4-Matrizes.pdf
function exercicios_matrizes(){
    function ler_matrix(){
        let matrix = Array(3).fill(Array(3).fill(null))
        console.log(matrix)
    }
    // ler_matrix()
    function calcular_media(){
       let matrix = []
       let matrix_print = ''
       let sum = 0
       let sum_elements = 0
       for(let i = 0;i < 5;i++){
        let linha = []
        for(let e = 0;e < 2;e++){
            let num = Math.floor(Math.random()*10) 
            sum+=num
            sum_elements++
            linha.push(num)
        }
        
        matrix.push(linha)
        matrix_print = matrix_print.concat(linha.join('')).concat('\n')
       }
       return sum / sum_elements
    }
    // calcular_media()

}
// exercicios_matrizes()


/* 
amanha:
https://exercism.org/tracks/javascript/exercises/affine-cipher
https://exercism.org/tracks/javascript/exercises/all-your-base
https://exercism.org/tracks/javascript/exercises/minesweeper
https://exercism.org/tracks/javascript/exercises/satellite
https://exercism.org/tracks/javascript/exercises/luhn
https://exercism.org/tracks/javascript/exercises/grains
*/