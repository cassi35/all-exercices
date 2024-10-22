//solve hard problems eddabit
console.clear()
//Seven Boom!
function boom(arr){
    var regex = /7/g
    var msg = 'boom'
    var msg2 = 'there is not 7'
    for(var n of arr){
        if(regex.test(n)){
            return msg 
        }
    }
    return msg2
}//string
console.log(boom([8, 6, 33, 100,79]))
//Number of Boomerangs
function boomerangs(arr){
var s = 0
for(var i = 0;i < arr.length;i++){
    if(arr[i] == arr[i+2]){
        var e = i+2
        var r = 1
        while(e != i){
            if(arr[e] == arr[i]){
                r++
            }
            e--
        }
        if(r != 3){
            s++
        }
    }
}
return s
}//number
console.log(boomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(boomerangs([4, 4, 4, 9, 9, 9, 9]))
//Oddish vs. Evenish
function oddishOrEvenish(n){
    var str = String(n).split('')
    for(var i in str){
        str[i] = Number(str[i])
    }
    return str.reduce((a,b)=>a+b)%2 ==0?'Evenish':'Oddish'
}//number
console.log(oddishOrEvenish(373))
//length
function getLength(arr) {
    let count = 0; 
    for (let item of arr) { 
      if (Array.isArray(item)) {
        count += getLength(item);
      } else {
        count++ 
      }
    }
    return count
  }
  
  // Exemplos de uso
  console.log(getLength([1, [2, 3]])); // ➞ 3
//case and index inverter
function invert(string){
    var reverse = ''
    var i = string.length -1
    while(i >= 0){
        var l = string[i]
        if(l == l.toUpperCase()){
            reverse+=l.toLowerCase()
        }else{
            reverse+=l.toUpperCase()
        }
        i=i-1
    }
    return reverse
}
console.log(invert("dLROW YM sI HsEt"))
//Numbers in Strings
function stringnumber(arr){
    var r = []
    var t = /\d/g
    for(var l of arr){
        if(t.test(l)){
            r.push(l)
        }
    }
    return r 
}
 
//console.log(stringnumber(["1a", "a", "2b", "b"]))
//LCM of Two Numbers
function lcm(n1,n2){
    let arr1 = []
    var sum1 = 0
    let arr2 = []
    var sum2 = 0
    for(var i = 0;i < 5;i++){
        sum1+=n1 
        arr1.push(sum1)
        sum2+=n2 
        arr2.push(sum2)
        if(arr1.includes(sum2) || arr2.includes(sum1)){
            return arr2
        }
    }
    return -1
}
console.log(lcm(8, 5))

//Validating a Set in the Set Game

class Game_validation{
    constructor(){
        this.set = []
        this.number = 0
        this.full = 3
    }
    add(c,s,p){
        if(this.full == this.number){
            console.log("sorry it's full")
        }else{
            let obj = {color:c,numbers:this.number,shade:s,shape:p}
            this.set.push(obj)
            this.number++
        }
    }
    compare(){
        let color 
        let shade
        let shape 
        if(this.set[0].color == this.set[1].color && this.set[0].color == this.set[2].color){
            color = 3
        }else if(this.set[0].color == this.set[1].color && this.set[0].color != this.set[2].color || 
            this.set[0].color == this.set[2].color && this.set[0].color != this.set[1].color ){
                color = 2
            }else{
                color = 1
            }
            if(this.set[0].shade == this.set[1].shade && this.set[0].shade == this.set[2].shade){
                shade = 3
            }else if(this.set[0].shade == this.set[1].shade && this.set[0].shade != this.set[2].shade ||
                this.set[0].shade == this.set[2].shade && this.set[0].shade != this.set[1].shade 
            ){
                shade = 2
            }else{
                shade = 1
            }
            
            if(this.set[0].shape == this.set[1].shape && this.set[0].shape == this.set[2].shape){
                shape = 3
            }else if(this.set[0].shape == this.set[1].shape && this.set[0].shape != this.set[2].shape ||
                this.set[0].shape == this.set[2].shape && this.set[0].shape != this.set[1].shape 
            ){
                shape = 2
            }else{
                shape = 1
            }
            var map_compare = new Set()
            map_compare.add([shade,'shade'])
            map_compare.add([color,'color'])
            map_compare.add([shape,'shape'])
            console.log(map_compare)
            var msg = []
            for(var c of map_compare.values()){
                switch(c[0]){
                    case 3:
                        msg.push(`all ${c[1]} is equal`)
                        break
                    case 2:
                        msg.push(`two ${c[1]} is diferent`)
                        break
                    case 1:
                        msg.push(`one ${c[1]} is difrent`)
                }
            }
            for(var m of msg){
                console.log(m)
            }
    }
}
/* let g = new Game_validation()
g.add('green','empty','squiggle')
g.add('green','empty','teste')
g.add('green','empty','squiggle')
g.compare() */
//white spaces btween lower and uppercase
function between(word){
    var neword = ''
    var length = word.length 
    for(var i = 0;i < length;i++){
        var w = word[i].toUpperCase()
        if(word[i] == w){
            neword+=' '+word[i]
        }else{
            neword+=word[i]
        }
    }
    return neword
}
console.log(between("SheWalksToTheBeach"))
//Double Character Swap
function swap(word,letter1,letter2){
    var swapped 
    var w = word.split('') 
    do{
        swapped = false
        for(var i = 1;i < w.length;i++){
            if(w[i] == letter1 && w[i-1] == letter2){
                [w[i],w[i-1]] = [w[i-1],w[i]]
                swapped = true 
            }
        }
        
    }while(swapped)
        return w

}
//console.log(swap("aabbccc","a","b"))
class Vodka{
    constructor(){
        this.vodka = new Map()
        this.numero = null
    }
    add(nome,valor){
        var chaves = []
        for(var chave of this.vodka){
            chave.push(chave)
        }
        if(this.vodka.size == 0){
            return this.vodka.set(nome,valor)
        }else if(this.vodka.has(valor) && chaves.includes(nome)){
            return undefined
        }else{
            return this.vodka.set(nome,valor)
        }

    }
    addNumero(n){
        this.numero = n
        return this.numero
    }
    saida(){
        if(this.numero){
            for(var chave of this.vodka.keys()){
                if(this.vodka.get(chave) == this.numero){
                    return  chave
                }
            }
        }else{  
            return null
        }
    }
}
var v = new Vodka()
v.add("Rammstein A",100)
v.add("Rammstein B",50)
v.addNumero(100)
console.log(v.saida())
//pluralize return the string with 2 or more appear in the list 
/* 
var p1 = pluralize(["chair", "pencil", "arm"])
var p2 = pluralize(["table", "table", "table"])
var p3 = pluralize([["cow", "pig", "cow", "cow"]]) 
console.log(p1)
console.log(p2)
console.log(p3) */
console.clear()
function histogram(arr,char){
    var saida = ""
    for(var n of arr){
        for(var i = 0;i < n;i++){
            saida+=`${char}`
        }
        saida+=`\n`
    }
    console.log(saida)
}
//histogram([6, 2, 15, 3], "=")
//C*ns*r*d Str*ngs
let uncensor = (frase,completar)=>{
    //criar um array da frase
    //colocar em um array index das frasses
    //percorrer pela frase susbtituindo pelo index
    frase = frase.split('')
    index = []
    frase.forEach((letra,i) => {
        if(letra == "*"){
            index.push(i )
        }
    });
    completar = completar.split('')
    for(var i in index){
        frase[index[i]] = completar[i]
    }
    frase = frase.join('')
    return frase
}
/* var u = uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")
console.log(u) */
//common array
function common(arr,arr2){
    let common = []
    for(var a2 of arr2){
        if(arr.includes(a2)){
            common.push(a2)
        }
    }
    return common
}
console.log(common([-1, 3, 4, 6, 7, 9], [1, 3]))
//findBrokenKeys
function findBrokenKeys(word,word2){
    let index = word.length
    let key = []
    for(let i = 0;i < index;i++){
        if(word[i] != word2[i]){
            if(!key.includes(word[i])){
                key.push(word[i])
            }
        }
    }
    return key
}
//console.log(findBrokenKeys("happy birthday", "hawwy birthday"))
//Return the Most Expensive Piece of Jewellery
class Expensive{
    constructor(){
      this.expansive = null   
      this.collection = new Map()
    }
    adicionar(nome,valor){
        this.collection.set(nome,valor)
    }
    mostrar(){
        let chaves = [] 
        for(let k of this.collection.keys()){
            chaves.push(k)
        }
        this.expansive = this.collection.get(chaves[0])

        for(let i in chaves){
            if(this.expansive < this.collection.get(chaves[i])){
                this.expansive = chaves[i]
            }
        }
        let phrase = `the most expensive one is ${this.expansive}`
        return console.log(phrase)
    }
}

/* var e = new Expensive()
e.adicionar('Diamond Earrings',980)
e.adicionar('pearl necheel2',50000)
e.adicionar('Gold Watch',250)
e.adicionar('pearl necheel',4650)
e.adicionar('pearl cassiano',60000)
e.mostrar()
 */
//the frugal centleman 
function chosenWine(array){
    if(array.length == 0){
        return null 
    }
    let cheap = array[0].price
    let name = array[0].name
    for(let i in array){
        if(cheap > array[i].price){
            cheap = array[i].price 
            name = array[i].name 
        }
    }
    return name
}
/* console.log(chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
  ])) */
 //Word to Bitstring to Boolean Array
 function toBooleanarray(word){
    let str = ['A' ,'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J',' K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',' U', 'V', 'W', 'X', 'Y', 'Z']
    let map = new Map()
    str.forEach((l,i)=>{
        map.set(l.toLocaleLowerCase(),i)
    })
    let saida = []
    word = word.split('')
    for(let letra of word){
        let c = map.get(letra)
        if(c % 2 == 0){
            saida.push(true)
        }else{
            saida.push(false)
        }
    }
    return saida
 }
console.log( toBooleanarray('deep'))

//returnUnique
/* function returnUnique(arr){
    let distinct = []
    arr =arr.sort((a,b)=>a-b)
    let temp 
    for(let i in arr){
        temp = arr[i+1]

    }
    return distinct
}
console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])) */
//finding commmon elements
function commmon(arr1,arr2){
    arr1 = arr1.sort()
    arr2 = arr2.sort()
    let equal = []
    arr1.forEach((e)=>{
        if(arr2.includes(e)){
            if(!equal.includes(e)){
                equal.push(e)
            }
        }
    })
    console.log(equal)
}
//commmon([-1, 3, 4, 6, 7, 9],[1, 3])
//find broken keys
function findbrokenkeys(word1,word2){
    word1 = word1.split()
    word2 = word2.split()
    let broken = []
    for(let i in word1){
        if(word1[i] != word2[i]){
            if(!broken.includes(word1[i])){
                broken.push(word2[i])
            }
        }
    }
    return broken
}
//console.log(findBrokenKeys("starry night", "starrq light"))
//do all bigrams exists
function canFind(bigram,words){
    var i = 0
    var teste = []
    for(var bi of bigram){
        for(var word of words){
            if(!word.includes(bi)){
                teste.push(false)
            }else{
                teste.push(true)
            }

        }
        if(teste.includes(true)){
            i++
        }
        teste = []
    }
    if(i == bigram.length){
        return true
    }else{
        return false
    }

}
//console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]))

//returnUnique two distinc elements 
function returnUnique(array){
    var unique = []
    var japosto = []
    for(var i in array){
        var temp = array.filter(e => e == array[i])
        if(temp.length == 1){
            unique.push(array[i])
        }
    }
    return unique
}
//console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))
//All About Strings
function allAboutString(string) {
    var length = string.length
    var first = string[0]
    var last = string[string.length -1]
    var middle = ""
    if(length % 2 == 0){
        var m = length / 2 
        middle+=string[m-1]
        middle+=string[m]
    }else{
        var m = Math.floor(length/2)
        middle+=string[m]
    }
    var repetida = null
    for(var i = 0;i < string.length;i++){
        for(var e = 0;e < string.length;e++){
            if(e != i && string[i] == string[e]){
                repetida = e
                break
            }
        }
        if(repetida != null){
            break
        }else{
            continue
        }
    }
    if(repetida == null){
        repetida = "not found"
    }else{
        repetida = `@ index ${repetida}`
    }
    var res = [length,first,last,middle,repetida]
    return res   
}
//allAboutString('LASA')
console.clear()
//Imaginary Coding Interview
class Aluno{
    constructor(resposta,nome){
        this.next = null 
        this.resposta = resposta
        this.nome = nome 
        this.nota = 0 
    }
}
class Node{
    constructor(pergunta,resposta){
        this.next = null 
        this.pergunta = pergunta
        this.resposta = resposta
    }
}
class Prova{
    constructor(){
        this.head = null 
        this.aluno = null
        this.chamada = 0
        this.questoes = 0
    }
    prepend(pergunta,resposta){
        var new_node = new Node(pergunta,resposta)
        if(this.head == null){
            this.head = new_node
            this.questoes++
        }else{
            new_node.next = this.head
            this.head = new_node
            this.questoes++
        }
    }
    remove(){
        if(this.head == null){
            return null 
        }else{
            this.head = this.head.next
        }
    }
    appendAluno(resposta,nome){
        var novoAluno = new Aluno(resposta,nome)
        if(this.aluno == null){
            this.aluno = novoAluno
            this.chamada++
        }else{
            novoAluno.next = this.aluno

            this.aluno = novoAluno
            this.chamada++
            
        }
    }
    print(){
        var tempAluno = this.aluno
        while(tempAluno){
            var temp = this.head
            var correto = 0
            for(var res of tempAluno.resposta){
                if(temp.resposta == res){
                    correto++
                }
                temp = temp.next
                
            }   
            if(correto == this.questoes){

                tempAluno.nota = `gabaritou ${correto}`
            }else{
                tempAluno.nota = correto
            }
            tempAluno = tempAluno.next
        }
        var temp = this.aluno
        while(temp){
            console.log(temp.nota,temp.nome,this.questoes)
            temp = temp.next
        }
    }
}
var prova1 = new Prova()
prova1.prepend('qual o nome do presidente','cabral')
prova1.prepend('qual a capital do brasil','brasilia')
prova1.prepend('quem inventou o brasil','lula')
prova1.appendAluno(['lula','brasilia','cabral'],'cassiano')
prova1.appendAluno(['lula','brasilia','cabral'],'maria')
prova1.appendAluno(['lula','brasilia','cabral'],'joao')
//prova1.print()
function isAutobiographical(number){
    let stringNunber =  String(number)
    firstDigit = Number(stringNunber[0])
    secondDigit = Number(stringNunber[1])
    zeros = []
    one  = []
    for(let z of stringNunber.split('')){
        if(Number(z) == 0){
            zeros.push(Number(z))
        }
        if(Number(z) == 1){
            one.push(Number(z))
        }
    }
    lenZero = zeros.length
    lenOne = one.length
    if(lenZero == firstDigit && lenOne == secondDigit){
        return true 
    }else{
        return false

    }
}
//getHashTags
function getHashTags(phase){
    let splitPhase = phase.split(' ')
    let lists = []
    var mai 
    do{
        mai = splitPhase[0]
        for(var i = 0;i < splitPhase.length;i++){
            if(mai.length < splitPhase[i].length){
                mai = splitPhase[i]
            }
        }
        splitPhase = splitPhase.filter((words) => words != mai)
        lists.push(`#${mai}`)
    }while(lists.length < 3)
        return lists
}
// console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"))

//Sexagenary Cycle (Chinese Zodiac)
function sexagenary(year){
    let i = 0
    let anos = new Map()
    var e = 0
    var n = 1
    var a = 0
    var original = year
    while(i < 60){
        var hastes = ['wood','fire','earth','metal','watter']
        var animals = ['rat','ox','tigger','rabbit','dragon','snake','horse','sheep','monkey','rooster','dog','pig',]
        anos.set(year,[hastes[e],animals[a]])
        if(n == 2){
            n = 1
            e++
            if(e == hastes.length){
                e = 0
            }
        }else{
            n++
        }
        if(a == animals.length-1){
            a = 0
        }else{
            a++
        }
        year = year - 1
        i++
    }
    return anos.get(original).join(' ')
}
sexagenary(1971)
