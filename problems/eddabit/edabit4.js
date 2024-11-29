const { on } = require("nodemon")

//hard challanges 
console.clear()
function zeroToend(array){
    var resto = array.filter(e => e != 0)
    var zeros = array.filter(e => e == 0)
    var res = resto.concat(zeros).flat()
    return res
}
console.log(zeroToend([1, 2, 0, 0, 4, 0, 5]))
//Get Notes Distribution
/* function getNoteDistribuition(array){
    var notas = array.filter(arr => arr >= 0)
    return notas
}
console.log(getNoteDistribuition([0,-1,-2000,323]) */
console.clear()
//How Many Shuffles?
function Shuffles(array){
    var cartas = []
    for(var i = 1;i <= array;i++){
        cartas.push(i)
    }
    return embaralhar(cartas,cartas,1)
}
function embaralhar(cartas,original,contagem){
    var esquerda = cartas.slice(0,cartas.length / 2)
    var direita = cartas.slice(esquerda.length)
    var embaralhadomento = []
    for(var i in direita){
        embaralhadomento.push(esquerda[i])
        embaralhadomento.push(direita[i])
    }
    var pass = true 
    for(var i in embaralhadomento){
        if(embaralhadomento[i] != original[i]){
            pass = false
        }
    }
    if(!pass){
        contagem = contagem+1
        return embaralhar(embaralhadomento,original,contagem)
    }else{
        return contagem
    }
}
//console.log(Shuffles(14))
//Smooth Sentences
function Smooth(sentence){
    var palavras = sentence.split(' ')
    var res = true 
    for(var i = 1;i < palavras.length;i++){
        var inicial =palavras[i-1][palavras[i-1].length-1]
        var final =palavras[i][0]
        if(inicial != final){
            res = false
            break
        }
    }
    return res 
}
//Smooth('She eats super righteously')
//Camel Case 
function camel(phase){
    phase = phase.split(' ')
    var newPhase = ""
    newPhase+=phase.shift()
    for(var word of phase){
        var u  = word[0].toUpperCase()
        var w = word.slice(1).split('')
        w.unshift(u)
        w = w.join('')
        console.log(w)
        newPhase+=w
    }
    console.log(newPhase)
}
//camel('cassiano gostoso lindo')
//One Plus One
function wordMath(string){
    var words = string.split(' ')
    var errs = err(words[0],words[2])
    if(errs){

        var n1 
            switch(words[0]){
                case 'one':
                    n1 = 1
                    break
                case 'two':
                    n1 = 2
                    break
                    
                case 'zero':
                    n1 = 0
                    break
            }
        var n2 
            switch(words[2]){
                case 'one':
                    n2 = 1
                    break
                case 'two':
                    n2 = 2
                    break
                case 'zero':
                    n2 = 0
                    break
                }
        var exp 
            switch(words[1]){
                case 'plus':
                    exp = n1+n2
                    break
                case 'minus':
                    exp = n1-n2
                    break 
                case 'multiple':
                    exp = n1 * n2
                    break
                default:
                    exp = n1 / n2
            }
        var res 
        switch(exp){
            case 1:
                res = 'one'
                break
            case 2:
                res ='two'
                break
            case 0:
                res = 'zero'
                break
            case 3:
                res = 'tree'
                break
            case 4:
                res = 'four'
                break
        }
        return res
    }else{
        return 'Error: --> try again'
    }
}
function err(n1,n2){
    var numbers = [n1,n2]
    numbers = numbers.filter((n)=>n != 'one' && n != 'zero' && n != 'two')
    if(numbers.length == 0){
        return true 
    }else{
        return false
    }
}
//console.log(wordMath('one plus two'))
//Combinatorial Exploration
function combinatorial(n){
    var res = 1
    for(var i = n;i >=1;i--){
        res = res * i
    }
    res = res.toString()
    try{
        return res.length
    }catch(err){
        return `error:${err} is undefined`
    }
}
console.log(combinatorial(5))
//
//Find First Character That Repeats
function fisrt(phrase){
    var newphase = []
    for(var l of phrase){
        newphase.push(l)
    }
    newphase = newphase.sort()
    for(var i = 1;i < newphase.length;i++){
        if(newphase[i] == newphase[i-1]){
            return newphase[i]
        }
    }
    return -1
}
console.log(fisrt('Gandalf'))
console.clear()
//Who Left the Array?
function missing(arr1, arr2) {
    // Sort both arrays to ensure they align for comparison
    arr1.sort();
    arr2.sort();
    
    // Compare the elements one by one and return the first mismatched element
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return arr1[i];
        }
    }
}
console.log(
missing([true, true, false, false, true], [false, true, false, true]))
//Grocery Store Prices
function store(string){
    var num = []
    var regex = /[\d][.]([\d]{2})/g
    string.forEach(prince => {
        var add = prince.match(regex)
        num.push(add[0])
    });
    return num
}
store(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"])
//how many daus util 2021
function dausUntil2021(date){
    var yearRegex = /[\d]{3}[\d]$/g
    var year = date.match(yearRegex)
    if(year != null){
        year = year.join()
        var compareYear = Number(year)
        if(compareYear > 2021){
            return false
        }else{
            var ano = Number(date.slice(6))
            var day = Number(date.slice(3,5))
            var month =Number(date.slice(0,2))
            var dias = [31,29,31,30,31,30,31,31,30,31,30,31]
            var restante = dias.slice(0,month-1)
            restante.push(day)
            restante = 365-(restante.reduce((a,b)=>a+b))
            return `of year:${ano} lack days ${restante}`
        }
    }else{
        return false
    }
}
//console.log(dausUntil2021("1/1/2021"))

//plant
function plant(seed,water,fert,temp){
    if(temp >= 20 && temp <= 30){
        var res = ""
        var fertTotal = ""
        for(var i = 0;i < fert;i++){
            fertTotal+=seed
        }
        var grouth = ""
        for(var i = 0;i < water;i++){
            grouth+="-"
        }
        var togheter = grouth+fertTotal
        var res = ""
        for(var i = 0;i < water;i++){
            res+=togheter
        }
        return res 
    }else{
        return false
     }
}
//console.log(plant("&", 5, 1, 20))
//validating set in set game 
function multiplicationTable(n){
    if(n == 1 || n == 0){
        return n == 0?[[0]]:[[1]]
    }else{
        let table = []
        for(var i = 0;i < n;i++){
            table.push([])
        }
        var i = 1
        var c = 0
        while(i < n * n){
            for(var e = 0;e < n;e++){
                table[c].push(i)
                i++
            }
            c++
        }
        return table
    }
    }
console.log(multiplicationTable(0))
console.clear()
function linkedListEnd(){
    class Node{
        constructor(value){
            this.value = value
            this.next = null 
        }
    }
    class LinkedList{
        constructor(){
            this.head = null 
        }
        insertEnd(value){
            if(this.isemphy()){
                let node = new Node(value)
                this.head= node
                return
            }else{
                let prev = this.head
                while(prev.next){
                    prev = prev.next
                }
                let node = new Node(value)
                prev.next = node
                return
            }
        }
        isemphy(){
            return this.head == null
        }
        print(){
            let temp = this.head
            let mensage = ''
            while(temp){
                mensage+=temp.value
                temp = temp.next
            }
            return console.log(mensage)
        }
    }
    let l1 = new LinkedList()
    for (var i = 0;i < 5;i++){
        l1.insertEnd(i)
    }
    l1.print()
}
linkedListEnd()
function numThenChar(objeto){
    let numeros = []
    let letras = []
    for(let coluna of objeto){
        for(let linha of coluna){
            if(typeof linha == 'number'){
                numeros.push(linha)
            }else{
                letras.push(linha)
            }
        }
    }
    function bubbleSort(arr){
        const n = arr.length 
        for(let i = 0;i < n;i++){
            for(let j = 0;j < n-i-1;j++){
                if(arr[j] > arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                }
            }
        }
        return arr 
    }
    let sortNum = bubbleSort(numeros)
    let sortLetra= bubbleSort(letras)
    let res = [sortNum,sortLetra]
    return res 

}
function timeToEat(time){
    let breakfest = 7
    let lunch = 12
    let dinner = 21
    let manha = /a.m/g
    let tarde = /p.m/g
    if(manha.test(time)){
        if(breakfest > Number(time[0])){
            let hour = Number(time[0])
            let minute = Number(time.slice(2,4))
            let count = 0
            let i = hour
            while(i <= breakfest){
                count++
                i++
            }
            return `faltam ${count}:${minute} para breakfest`
        }else{
            let hour = Number(time[0])
            let minute = Number(time.slice(2,4))
            let count = 0
            let i = hour
            while(i <= lunch){
                count++
                i++
            }
            return `faltam ${count}:${minute} para lunch`
        }
    }else if(tarde.test(time)){
        let hour = Number(time[0])
        let minute = Number(time.slice(2,4))
       let count = 0
       var i = hour
       while(i <= dinner){
        count++
        i++
       }
       return `restam ${count}:${minute} parra dinner `
    }else{
        return undefined
    }
}
//console.log(timeToEat('2:00 p.m'))
class Sort{
    constructor(arr){
        this.array = arr
    }
    insertionSort(){
        for(var i in this.array){
            const key = this.array[i]
            let j = i-1 
            while(j >= 0 && this.array[j] > key){
                this.array[j+1] = this.array[j]
                j-- 
            }
            this.array[j+1] = key
        }   
        return console.log(this.array)
    }
}
let sort1 = new Sort([3,2,2,3,2,5,1])
sort1.insertionSort()
console.clear()
//isbn13
function isbn13(grau){
    let escada = ' '.repeat(grau)+'    _\n'
    for(let i = grau-1;i > 0;i--){
        let temp = ' '
        temp = temp.repeat(i)
        escada = escada.concat(temp).concat('   _|\n')
    }
    return escada
}
//console.log(isbn13(10))
function makingAbox(num){
    let mat = []
    for(var i = 0;i < num;i++){
        mat.push([])
        for(var e = 0;e < num;e++){
            if(i == num -1|| i == 0){
                mat[i][e] = '#'
            }else{
                if(e ==0 || e == num -1){

                    mat[i][e] = '#'
                }else{
                    mat[i][e] = ' '
                }
            }
        }
        let res = mat[i]
        mat[i] = res.join(' ')
    }
    var output = ''
    for(var element of mat){
        output = output.concat(element).concat('\n')
    }
    return output
}
///white spaces
//consecutivestimecombo 
function consecutivestimecombo(arr1,arr2){
        let join = []
        do{
            if(arr1.length != 0 || arr2.length != 0){
                if(arr1.length != 0){
                    join.push(arr1.shift())
                }
                if(arr2.length != 0){
                    join.push(arr2.shift())
                }
            }else{
                break
            }
        }while(true)
        let swaped
        do{ 
            swaped = false 
            for(let i = 0;i < join.length-1;i++){
                if(join[i] > join[i+1]){
                    let temp = join[i]
                    join[i] = join[i+1]
                    join[i+1] = temp
                    swaped = true  
                }
            }

        }while(swaped)
        for(let i = join.length-1;i > 0;i--){
            if(join[i-1] != join[i]-1){
                return false
            }
        }
        return true
}
//console.log(consecutivestimecombo([44, 46], [45]))

function findBrokenKeys(wordChoosed,wordpass){
    let new_set = []
    let wordset = wordpass.split('')
    for(let word of wordChoosed.split('')){
        if(!wordset.includes(word.toLowerCase())){
            new_set.push(word)
        }
    }
    if(new_set.length === 0){
        return true 
    }else{
        return new_set
    }
}

//consecutiveCombo
function consecutiveCombo(arr1,arr2){
    let all_arr = arr1.concat(arr2)
    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        let res = [];
        let leftI = 0;
        let rightI = 0;
        while (leftI < left.length && rightI < right.length) {
            if (left[leftI] < right[rightI]) {
                res.push(left[leftI]);
                leftI++;
            } else {
                res.push(right[rightI]);
                rightI++;
            }
        } 
        return res.concat(left.slice(leftI)).concat(right.slice(rightI));
    }

    let sortedArr = mergeSort(all_arr);
    let not_duplicate = []
    for(let i in sortedArr){
        if(!not_duplicate.includes(sortedArr[i])){
            not_duplicate.push(sortedArr[i])
        }
    }
    for(let i =0;i < not_duplicate.length-1;i++){
        let compare = not_duplicate[i]+1
        let second = not_duplicate[i+1]
        if(compare != second){
            return false
        }
    }
    return true
}
console.log(consecutiveCombo([1,2,3],[4,5,6,1,10]))
console.clear()
//value in tree
function isPresents(tree,target){
    let swaped
    do{
        swaped = false
        for(var i = 0;i < tree.length-1;i++){
            if(tree[i] > tree[i+1]){
                let temp = tree[i]
                tree[i] = tree[i+1]
                tree[i+1] = temp 
            }
        }
    }while(swaped)
  function bs(arr,leftindex,rightindex,target){
    if(leftindex > rightindex){
        return -1
    }else {
        let mid = Math.floor((leftindex+rightindex)/2)
        if(target == arr[mid]){
            return 1
        }else if(target < arr[mid]){
            return bs(arr,leftindex,mid-1,target)
        }else {
            return bs(arr,mid+1,rightindex,target)
        }
    }
  }
  return bs(tree,0,tree.length-1,target)
}function isPresents(tree,target){
    let swaped
    do{
        swaped = false
        for(var i = 0;i < tree.length-1;i++){
            if(tree[i] > tree[i+1]){
                let temp = tree[i]
                tree[i] = tree[i+1]
                tree[i+1] = temp 
            }
        }
    }while(swaped)
  function bs(arr,leftindex,rightindex,target){
    if(leftindex > rightindex){
        return -1
    }else {
        let mid = Math.floor((leftindex+rightindex)/2)
        if(target == arr[mid]){
            return 1
        }else if(target < arr[mid]){
            return bs(arr,leftindex,mid-1,target)
        }else {
            return bs(arr,mid+1,rightindex,target)
        }
    }
  }
  return bs(tree,0,tree.length-1,target)
}
// Return the Most Expensive Piece of Jewellery

function expansive(piece){
        let piece_map = new Map()
        for(let pieces of piece){
            piece_map.set(pieces[0],pieces[1])
        }
        let actual_most = 0
        let most = null 
        for(let [pieces,value] of piece_map){
            if(value > actual_most){
                most = pieces
                actual_most = value
            }
        }
        return most
            
}
expansive([['dimond ering',980],['gold wiatch',250],['pelr neckel',4650]])
//Word to Bitstring to Boolean Array
function bitString(word){
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    word = word.split('')
    let res = []
    for(let letter of word){
        let temp_letter = alphabet.findIndex(l => l == letter.toUpperCase())
        if(temp_letter % 2 == 0){
            res.push(1)
        }else{
            res.push(0)
        }
    }//o(n)
    for(let i in res){
        if(res[i] == 1){
            res[i] = true
        }else{
            res[i] = false
        }
    }//o(n)
    return res
}
bitString('deep')
//Do All Bigrams Exist?
function canFind(bigram,words){
    for(let word of words){
        for(let bi of bigram){
            if(!word.includes(bi)){
                return false
            }
        }
    }//o(n²)
    return true 
}
canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])
//Pentagonal Number
function pentagonal(num){
    let find = 5
    let res = 0
    for(let i = 0;i < num-1;i++){
        let temp_res = find
        res =res + temp_res
        find+=5
    }   

    let pen = res+1
    return pen

}
pentagonal(8)
//isDisarium
function isDisarium(num){
    num = String(num)
    let arr_num = num.split('')
    for(let i in arr_num){
        arr_num[i] = Number(arr_num[i])
    }
    let sum = 0
    let index = 1
    do{
        let dis = arr_num.shift()
        sum = sum+dis**index
        index++

    }while(arr_num.length != 0)
        return sum == num?true:false
}
// console.log(isDisarium(518))

//Find First Character That Repeats
function firstCharecter(string){
    let arr_string = string.split('')
    do{ 
        let remove = arr_string.shift()
        if(arr_string.includes(remove)){
            return remove
        }else{
            continue
        }
    }while(arr_string.length != 0)
    return -1
}
// console.log(firstCharecter('Isildur'))
//Temperature Converter
function temperate_converter(temp){
    if(temp.includes('c')){
        let num = ''
        for(let i in temp.split('')){
            let temp_num = Number(temp[i])
            if(temp_num){
                num+=temp_num
            }
        }
        let res = (Number(num) * (9/5))+35
        return res
    }else{
        let num = ''
        for(let i in temp.split('')){
            let temp_num = Number(temp[i])
            if(temp_num){
                num+=temp_num
            }
        }
        let res = (Number(num) -32)*5/9
        return res
    }
}
temperate_converter('35 c')
//Two Distinct Elements
function distinctElents(arr){
    let exist = []
    for(let i in arr){  
        if(arr[i] != null){
            let compare = arr[i]
            arr[i] = null
            let temp = true
            for(let e in arr){
                if(compare == arr[e]){
                    arr[e] = null
                    temp = false
                }
            }
            if(temp){
                exist.push(compare)
            }
        }
    }   
    return exist
}
distinctElents([1, 9, 8, 8, 7, 6, 1, 6])
//GCD and LCM (Part 2)
function mmc(n1, n2) {
    let faturar = [n1, n2];
    let res_mult = [];
    let fator = 2;

    while (faturar.some(num => num != 1)) {
        let divisivel = false;
        
        for (let i = 0; i < faturar.length; i++) {
            if (faturar[i] % fator == 0) {
                faturar[i] /= fator;
                divisivel = true;
            }
        }
        
        if (divisivel) {
            res_mult.push(fator);
        } else {
            fator++;
        }
    }

    return res_mult.reduce((a, b) => a * b, 1);
}

console.log(mmc(14, 28)); // Deve retornar 28
//Concatenate to Form Target Array
function camconcatenate(arr){
    let concatenate = arr.flat()
    
    let missing = Math.max(...concatenate)
    for(let i in concatenate){
        let remove = concatenate[i]
        concatenate[i] = null
        if(concatenate.includes(remove)){
            return false
        }
    }
    let new_arr = []
    for(let i = 1;i <= missing;i++){
        new_arr.push(i)
    }
    return new_arr.length == arr.length?true:false
}
// console.log(camconcatenate([[2, 1, 3], [5, 4, 7, 6, 7]]))
//Who Left the Array?
function left_arr(arr1,arr2){
    let miss 
    while(true){
        let element1 = arr1.shift()
        let element2 = arr2.shift()
        if(element1 != element2){
            miss = element1
            break
        }
    }
    return miss
}
// console.log(left_arr(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]))
//Dance for Cash
console.clear()

//Gold Distribution
function goldDistribuition(gold){
    let matt = 0
    let musbair = 0
    let vez = false
    while(gold.length != 0){
        if(gold.length == 1){
            if(vez){
                matt+=gold[0]
                break
            }else{
                musbair+=gold[0]
                break
            }
        }else{
            if(vez){
                let stack1 = gold.shift()
                let stack2 = gold.pop()
                if(stack1 > stack2){
                    matt+=stack1
                    musbair+=stack2
                    vez = false
                }else if(stack1 < stack2){
                    matt+=stack2
                    musbair+=stack1
                    vez = false
                }
            }else{
                let stack1 = gold.shift()
                let stack2 = gold.pop()
                if(stack1 > stack2){
                    matt+=stack2
                    musbair+=stack1
                    vez = true
                }else if(stack1 < stack2){
                    matt+=stack1
                    musbair+=stack2
                    vez = true
                }
            }
        }

    }
    return [matt,musbair]
}
// console.log(goldDistribuition([10, 9, 1, 2, 8, 4]))
// First Letter Shift
function fisrtLetter(string){
    let words = string.split(' ')
    if(words.length <= 1){
        return string
    }
    let prev = words[words.length-1][0]
    for(let i = 0;i < words.length;i++){
        let currentWord = words[i]
        let first_letter = prev
        prev = currentWord[0]
        words[i] = first_letter+currentWord.slice(1)
    }
    return words.join(' ')
}
console.log(fisrtLetter('create a function'))
//Shortest Subarray Whose Sum Exceeds N
function minLength(arr,n){
    let sum = 0
    let sum_arr = []
    for(let i = 0;i < arr.length;i++){
        sum = sum+arr[i]
        sum_arr.push(arr[i])
        if(sum > n){
            return sum_arr.length
        }
    }
    return arr.length
}
// console.log(minLength([1, 0, 0, 0, 1], 1))

//Average Word Length
function averageWordLength(word){
    let sum_arr = []
    let length 
    if(word.includes('.')){
        let letters = word.split('.')[0].split(' ')
        length = letters.length
        for(let i in letters){
            sum_arr.push(letters[i].length)
        }
    }else if(word.includes('!')){
        let letters = word.split('!')[0].split(' ')
        length = letters.length
        for(let i in letters){
            sum_arr.push(letters[i].length)
        }
    }else{
        let letters = word.split(' ')
        length = letters.length
        for(let i in letters){
            sum_arr.push(letters[i].length)
        }
    }
    return sum_arr.reduce((a,b)=>a+b) / length
}
// console.log(averageWordLength("Dude this is so awesome"))

// rearrange

function rearrange(string) {
    let only_string = [];
    string.split(' ').forEach((word) => {
        let str = '';
        let num 
        for (let s of word.split('')) {
            // Verifica se o caractere NÃO é um número
            if (isNaN(s)) {
                str += s;
            }else{
                num = Number(s)
            }
            
        }
        only_string.push({str:str,num:num});
    });
    let swaped 
    do{
        swaped = false
        for(let i = 0;i < only_string.length-1;i++){
            if(only_string[i].num > only_string[i+1].num){
                let temp = only_string[i].num 
                let temp_str = only_string[i].str 
                only_string[i].num = only_string[i+1].num
                only_string[i].str = only_string[i+1].str
                only_string[i+1].num = temp
                only_string[i+1].str = temp_str
            }
        }
    }while(swaped)
    let str_res = ''
    for(let obj of only_string){
        if(obj.num == only_string[only_string.length-1].num){
            str_res = str_res+obj.str
        }else{
            str_res = str_res+obj.str+' '
        }
    }
    return str_res

}

// console.log(rearrange('4of Fo1r pe6ople g3ood th5e the2'));
// Persistence

function additivePersistence(nums){
    let nums_str = String(nums).split('').map((n)=>Number(n)).reduce((n1,n2)=> n1+n2)
    return nums_str
}
// console.log(additivePersistence(1679583))

// 24-Hour Time
function convert_date(date) {
    // Verifica se é PM
    let isPM = /PM/g.test(date);
    // Extrai a hora, minuto e segundo
    let hour = Number(date.slice(0, 2));
    let minuteSecond = date.slice(2, 8); // :MM:SS
    let convertedHour;

    if (isPM) {
        // PM: Se for 12 PM, permanece 12; caso contrário, soma 12
        convertedHour = hour === 12 ? 12 : hour + 12;
    } else {
        // AM: Se for 12 AM, converte para 00; caso contrário, mantém
        convertedHour = hour === 12 ? 0 : hour;
    }

    // Garante que a hora tenha dois dígitos
    let formattedHour = String(convertedHour).padStart(2, '0');
    // Retorna o horário no formato 24h
    return formattedHour + minuteSecond;
}

// console.log(convert_date('12:05:45AM')); // Saída: 00:05:45
// balanced word
function balanced(word){

        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let arr_word = word.split('')
        let left 
        let right 
        if(word.length % 2 == 0){
             left = arr_word.slice(0,word.length/2)
             right = arr_word.slice(left.length)
        }else{
            left = arr_word.slice(0,(word.length/2))
            right = arr_word.slice(left.length+1)
        }
        let test = [left,right]
        let res = []
        for(let i in test){
            for(let e in test[i]){
                let temp = alphabet.indexOf(test[i][e])
                test[i][e] = temp
            }
            res.push(test[i].reduce((a,b)=>a+b))
        }
        return res[0] == res[1]?true:false
        
        
}
// console.log(balanced('brake'))
//Basic Statistics: Mode
function mode(nums) {
	let occ=[];
	for (let i=0; i<=10; i++) occ[i]=0;
	for (let i=0; i<nums.length; i++)
		occ[nums[i]]++;
	let max=0;
	for (let i=0; i<occ.length; i++)
		if (occ[i]>max)
			max=occ[i];
	let out=[];
	for (let i=0; i<occ.length; i++)
		if (occ[i]==max)
			out.push(i);
	return out;
}
// console.log(mode([4, 5, 6, 6, 6, 7, 7, 9, 10]))


// highestPair

function highestPair(cards){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let pair = []
    do{
        let card_choose = cards[0]
        let current_card = cards.filter((card)=>card == card_choose)
        if(current_card.length % 2 == 0){
            pair.push(true) 
            pair.push(card_choose) 
            return pair
        }else{
            let atualizar_carta = cards.filter((card)=>card != card_choose)
            cards = atualizar_carta
        }
    }while(cards.length != 0)
    return false
}
// console.log(highestPair(["A", "A", "Q", "Q", "6" ]))

// maxItems

function maxItems(prices,max){
    let prices_int = []
    for(let i in prices){
        prices_int.push(Number(prices[i].slice(1)))
    }
    let count = 0
    let i = 0
    let res = 0
    while(count <= max){
        let calc = count+prices_int[i]
        if(calc > max){
            return res
        }else{
            count+=prices_int[i]
            res++
        }

        i+=1
    }
    return prices_int
}
// console.log(maxItems(["$10", "$7", "$2", "$60"],20))

// Know Your Neighbor

function plusSign(str) {
    for (let i = 1; i < str.length - 1; i++) {
        if (/[a-zA-Z]/.test(str[i])) { // Check if the character is a letter
            if (str[i - 1] !== '+' || str[i + 1] !== '+') { // Check if surrounded by '+'
                return false;
            }
        }
    }
    return true;
}

// console.log(plusSign("+f+d+c+#+f+")); // ➞ true
// console.log(plusSign("+d+=3=+s+"));   // ➞ true
// console.log(plusSign("f++d+g+8+"));   // ➞ false
// console.log(plusSign("+s+7+fg+r+8+"));// ➞ false
// Happy Number

function isHappy(num){
    if(num.toPrecision().length == 1){
        if(num == 1){
            return true 
        }else{
            return false
        }
    }
    num = String(num)
    let nums = num.split('').map((n)=>Number(n)).map(n => n ** 2).reduce((a,b)=>a+b)
    return isHappy(nums)
}
// console.log(isHappy(89))
function findAllDigits(digits) {
    let nums = new Set("0123456789"); // Dígitos de 0 a 9
    for (let i = 0; i < digits.length; i++) {
        let num_str = String(digits[i]);
        for (let char of num_str) {
            nums.delete(char); // Remove o dígito encontrado
        }
        if (nums.size === 0) {
            return digits[i]; // Retorna o número quando todos os dígitos foram encontrados
        }
    }
    return "Missing digits!"; // Caso não encontre todos os dígitos
}

// Exemplos de teste
// console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083])); // ➞ 5057
// console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381])); // ➞ 3370
// console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868])); // ➞ "Missing digits!"

// The Dice Game
function diceGame(scores) {
    let players = ["p1", "p2", "p3", "p4"];

    while (players.length > 1) {
        // Get current round scores for the remaining players
        let roundScores = scores.splice(0, players.length);
        
        // Calculate total scores for each player
        let totalScores = roundScores.map(([dice1, dice2]) => dice1 + dice2);

        // Find the minimum score
        let minScore = Math.min(...totalScores);

        // Find players with the minimum total score
        let playersWithMinScore = totalScores
            .map((score, index) => (score === minScore ? index : -1))
            .filter(index => index !== -1);

        if (playersWithMinScore.length === 1) {
            // If only one player has the minimum score, remove them
            players.splice(playersWithMinScore[0], 1);
        } else {
            // Check the first dice values of players with the minimum score
            let firstDiceValues = playersWithMinScore.map(index => roundScores[index][0]);
            let minFirstDice = Math.min(...firstDiceValues);

            // Filter by the minimum first dice value
            let playersWithMinFirstDice = playersWithMinScore.filter(
                index => roundScores[index][0] === minFirstDice
            );

            if (playersWithMinFirstDice.length === 1) {
                // If only one player has the minimum first dice value, remove them
                players.splice(playersWithMinFirstDice[0], 1);
            }
            // If there's still a tie, move to the next round
        }
    }

    return players[0];
}

// Exemplo de uso:
console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]])); 
// Resultado esperado: "

//Can You Exit the Maze?
function canExit(maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    // Movimentos possíveis: para cima, para baixo, para esquerda e para direita
    const directions = [
        [0, 1],  // Direita
        [1, 0],  // Baixo
        [0, -1], // Esquerda
        [-1, 0]  // Cima
    ];

    // Cria uma matriz para rastrear células visitadas
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    // Verifica se uma célula está dentro do labirinto e é válida (não é uma parede e não foi visitada)
    const isValid = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols && maze[x][y] === 0 && !visited[x][y];

    // Função de busca em profundidade (DFS)
    function dfs(x, y) {
        // Marca a célula como visitada
        visited[x][y] = true;

        // Se chegarmos ao canto inferior direito, retornamos true
        if (x === rows - 1 && y === cols - 1) {
            return true;
        }

        // Explora os vizinhos válidos
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (isValid(nx, ny)) {
                if (dfs(nx, ny)) {
                    return true;
                }
            }
        }

        // Se nenhum caminho funcionar, retorna false
        return false;
    }

    // Inicia a DFS do canto superior esquerdo (0, 0)
    return dfs(0, 0);
}

// Exemplos:
console.log(canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
])); // true

// console.log(canExit([
//   [0, 1, 1, 1, 1, 1, 1],
//   [0, 0, 1, 0, 0, 1, 1],
//   [1, 0, 0, 0, 0, 1, 1],
//   [1, 1, 0, 1, 0, 0, 1],
//   [1, 1, 0, 0, 1, 1, 1]
// ])); // false

// console.log(canExit([
//   [0, 1, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1]
// ])); // false

// console.log(canExit([
//   [0, 1, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0],
//   [1, 0, 0, 0, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 0]
// ])); // true
//Remove the Last Vowel
function removeLastVowel(word){
    let vowels = ['a','e','i','o','u']
    word = word.split('')
    for(let i = word.length;i >0;i--){
        if(vowels.includes(word[i])){
            let new_word = ''
            for(let e = 0;e < word.length;e++){
                if(e == i){
                    continue
                }else{
                    new_word+=word[e]
                }
            }
            return new_word
        }
    }
}
// console.log(removeLastVowel('Those who dare to fail miserably can achieve greatly.'))

//Sorting Band Names without Articles

function bandNamesSort(names) {
    const articles = ["The", "A", "An"];
    
    return names.sort((a, b) => {
        // Remove os artigos para comparação
        const stripArticle = name => {
            const words = name.split(" ");
            if (articles.includes(words[0])) {
                return words.slice(1).join(" "); // Remove o primeiro termo (artigo)
            }
            return name;
        };
        
        const strippedA = stripArticle(a).toLowerCase();
        const strippedB = stripArticle(b).toLowerCase();
        
        // Ordenar comparando os nomes sem artigos
        return strippedA.localeCompare(strippedB);
    });
}

// Testes
// console.log(bandNamesSort([
//     "The New Yardbirds", 
//     "The Beatles", 
//     "The Square Roots", 
//     "On A Friday", 
//     "An Irony"
// ])); 
// // ➞ ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]

// console.log(bandNamesSort([
//     "The Platters", 
//     "A Yard of Yarn", 
//     "The Everly Brothers", 
//     "A Monster Effect", 
//     "The Sex Maggots"
// ])); 
// // ➞ ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]

// console.log(bandNamesSort([
//     "But Myth", 
//     "An Old Dog", 
//     "Def Leppard", 
//     "The Any Glitters", 
//     "The Dawn"
// ])); 
// ➞ ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
// Sort by Frequency
function sortFreq(nums) {
    // Passo 1: Calcular a frequência de cada número
    const frequencyMap = {};
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    console.log(frequencyMap)
    // Passo 2: Ordenar os números
    return nums.sort((a, b) => {
        const freqA = frequencyMap[a];
        const freqB = frequencyMap[b];

        // Comparar pela frequência (decrescente)
        if (freqA !== freqB) {
            return freqB - freqA;
        }

        // Se as frequências forem iguais, comparar pelo valor (crescente)
        return a - b;
    });
}

// Testes
// console.log(sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7])); 
// ➞ [3, 3, 3, 5, 5, 7, 7, 2, 9]

// console.log(sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]));
// // ➞ [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]

// console.log(sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]));
// // ➞ [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]
// pigLatinSentence

function pigLatinSentence(string){
    let vowels = ['a','e','i','o','u']
    let arr_str = string.split(' ')
    for(let i in arr_str){
        if(vowels.includes(arr_str[i][0])){
            let new_word = arr_str[i]+'way'
            arr_str[i] = new_word
        }else{
           let index = arr_str[i].split('').findIndex((letra)=> vowels.includes(letra))
           let conc = arr_str[i].slice(0,index).concat('ay')
           arr_str[i] =  arr_str[i].slice(index).concat(conc)
        }
    }
    return arr_str
}
// console.log(pigLatinSentence("wall street journal"))

//Translate from Human to Programmer
function replaceNums(frase){
    let traducao = ''
    let i = 0
    while(i < frase.length){
        if(!isNaN(frase[i]) && frase[i] != ' '){
            let nums = String(frase[i])
            while(!isNaN(frase[i])){
                nums+=String(frase[i])
                i+=1
            }
            let binario = Binario(Number(nums))
            traducao+=binario.toString()+' '
        }else{
            traducao+=frase[i]
            i+=1
        }
    }
    return traducao
}

function Binario(n){
  resposta = '';
  let quociente = n;

  //enquanto o novo quociente não atingir 1 ou 2, o algoritmo de divisão deve ser repetido
  while (quociente > 1) {   
    //let n2 = n/2; é mais interessante usar o operador de resto da divisão, já que facilita para encontrar o proximo quociente
    // 5 % 2 = 1
    let resto = quociente % 2;
    quociente  = (quociente - resto) / 2;

    if(resto == 0){
      resposta = '0' + resposta;
      //como a resolução começa de tras para frente, vamos colocando os novos     
      //algarismos sempre no começo da string, para não ter que inverter no final   
    }else{
      resposta = '1' + resposta;
    }
  }//fim while

  //ao final concatenar o ultimo valor de quociente (que pode ser 0 ou 1) 
  //no inicio da string resposta
  resposta = quociente + resposta;
  return resposta
}
console.log(replaceNums('I have 2 sheep.'))


//Searching Two Objects at Once
class Classes{
    constructor(){
        this.aulas = new Map()
        this.aceita = null 
    }
    add(name,accept){
        if(typeof accept != 'boolean'){
            return null
        }else{
            this.aulas.set(name,accept)
        }
    }
    acceptsLateWork(teacherName){
        if(this.aulas.get(teacherName) == undefined){
            return null 
        }else{
            return this.aulas.get(teacherName)
        }
    }

}
let aula = new Classes()
aula.add("Mr. Citrano",false)
aula.add("Mr. Roberson",true)
console.log(aula.acceptsLateWork("Mr. Citrano"))
console.clear()

function timeAdjust(now, hrs, min, sec) {
    // Converta o tempo atual em horas, minutos e segundos
    let [currentHrs, currentMin, currentSec] = now.split(':').map(Number);
    
    // Adicione os segundos e ajuste os minutos se ultrapassar 60
    currentSec += sec;
    currentMin += Math.floor(currentSec / 60);
    currentSec %= 60;

    // Adicione os minutos e ajuste as horas se ultrapassar 60
    currentMin += min;
    currentHrs += Math.floor(currentMin / 60);
    currentMin %= 60;

    // Adicione as horas e ajuste para o formato de 24 horas
    currentHrs += hrs;
    currentHrs %= 24;

    // Formate o tempo para o formato hh:mm:ss
    return [
        String(currentHrs).padStart(2, '0'),
        String(currentMin).padStart(2, '0'),
        String(currentSec).padStart(2, '0')
    ].join(':');
}

// Exemplos de uso
// console.log(timeAdjust("01:00:00", 1, 30, 10)); // ➞ "02:30:10"
// console.log(timeAdjust("18:22:30", 4, 60, 30)); // ➞ "23:23:00"
// console.log(timeAdjust("00:00:00", 72, 120, 120)); // ➞ "02:02:00"
//Return the Sum of Two Numbers (With a Twist)

function sum2(sum1, sum2) {
    // Garantir que os números tenham o mesmo comprimento
    while (sum1.length < sum2.length) sum1 = '0' + sum1;
    while (sum2.length < sum1.length) sum2 = '0' + sum2;

    let res = ''; // Resultado final
    let carry = 0; // Transporte (carrego)

    // Percorrer de trás para frente
    for (let i = sum1.length - 1; i >= 0; i--) {
        const digit1 = Number(sum1[i]);
        const digit2 = Number(sum2[i]);

        // Soma dos dígitos, incluindo o transporte
        const sum = digit1 + digit2 + carry;

        // Atualizar o transporte
        carry = Math.floor(sum / 10);

        // Adicionar o dígito atual ao resultado
        res = (sum % 10) + res;
    }

    // Adicionar o transporte restante, se houver
    if (carry > 0) {
        res = carry + res;
    }

    return res;
}

// // Testes
// console.log(sum2("5125515215521515", "125261616261626")); // ➞ "5250776831783141"
// console.log(sum2("6666666666666666666666666666", "99999999999999999999999")); // ➞ "6666766666666666666666666665"
// console.log(sum2("123456789123456789123456789", "987654321987654321987654329876543")); // ➞ "987654445444443445444443453333332"


// Infection of the Ones
function onesInfection(matrix){
    let modified = [0,0,0,0]
    for(let i in matrix){
        if(matrix[i].includes(1)){
            for(let e in modified){
                if(modified[e] == 0 && matrix[i][e] == 1){
                    modified[e] = 1
                }
            }
            matrix[i] =  matrix[i].map(()=> 1)
        }else{
            for(let e in modified){
                if(modified[e] == 0 && matrix[i][e] == 1){
                    modified[e] = 1
                }
            }
            matrix[i] = modified
        }

    }
    return matrix
}
// console.log(onesInfection([
//     [1, 0, 1, 0],
//     [0, 1, 0, 0],
//     [0, 0, 0, 0]
//   ]))

// numbersToRanges

function numbersToRanges(arr){
    let i = 0
    let sequencia = []
    while(i < arr.length){
        if(arr[i] +1 == arr[i+1]){
            let seq = [arr[i]]
            while(arr[i] + 1 == arr[i+1]){
                i+=1
            }
            seq.push(arr[i])
            sequencia.push(seq)
        }else{
            i+=1
        }
    }
    return sequencia
}
// console.log(numbersToRanges([3, 4, 5, 10, 11, 12]))


function almostUniform(arr) {
    const freq = {}; // Frequência de cada número no array

    // Calcular frequência de cada número
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let maxLen = 0; // Maior comprimento da subsequência encontrada

    // Iterar sobre os números únicos no array
    for (let num in freq) {
        num = parseInt(num);

        // Verificar se há um número cuja diferença é 1
        if (freq[num + 1]) {
            // Comprimento da subsequência para o par (num, num + 1)
            const currentLen = freq[num] + freq[num + 1];
            maxLen = Math.max(maxLen, currentLen);
        }
    }

    return maxLen;
}

// Exemplos de uso
// console.log(almostUniform([1, 3, 2, 2, 5, 2, 3, 7])); // ➞ 5
// console.log(almostUniform([1, 2, 3, 4])); // ➞ 2
// console.log(almostUniform([1, 1, 1, 1])); // ➞ 0


//..............................
// ROT13 

function rot13(letras){
    let alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let substiituicao = []
    for(let i in letras){
        let temp_letra = letras[i]
        let index = alf.indexOf(temp_letra)+13
       if(alf[index] == undefined){
            let contador = index
            for(let a = 0;a < 13;a++){
                if(contador > alf.length){
                    contador = 0
                }else{
                    contador+=1
                }

            }   
            substiituicao.push(alf[contador])
       }else{
        substiituicao.push(alf[index])
       }
    }
    return substiituicao
}
// console.log(rot13('cassiano acertou mais uma de prima eu sou foda'))

//sudokuValidator
function sudokuValidator(mat){
    for(let i in mat){
        let sortArr = sort(mat[i])
        if(!sortArr){
            return false
        }
    }
    return true
}
function sort(arr){
    let swaped
    do{
        swaped = false
        for(var i = 0;i < arr.length -1;i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swaped = true
            }
        } 
    }while(swaped)
    for(let i = 1;i <= 9;i++){
        if(arr[i] != i){
            return false
        }
    }
    return true
}
console.log(sudokuValidator([
    [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
    [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
    [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
    [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
  ]))

// ascending
function ascending(string) {
    let arrStr = string.split(''); // Dividir em um array de caracteres
    for (let i = 1; i <= arrStr.length / 2; i++) { // Tamanho do grupo começa em 1
        if (arrStr.length % i === 0) { // Verifica divisibilidade
            let new_strArr = [...arrStr]; // Cópia do array original
            let new_str = []; // Grupos formados
            while (new_strArr.length !== 0) {
                new_str.push(Number(new_strArr.splice(0, i).join(''))); // Forma grupos de tamanho i
            }
            let teste = true; // Verificar se é sequência
            for (let j = 1; j < new_str.length; j++) {
                if (new_str[j] !== new_str[j - 1] + 1) { // Verifica se é consecutivo
                    teste = false;
                    break;
                }
            }
            if (teste) {
                return true; // Se for consecutivo, retorna true
            }
        }
    }
    return false; // Nenhum agrupamento foi consecutivo
}
// console.log(ascending('666667'))

// function diamond(n){
//     let dimonds = []
//     let temp_parte = n % 2 == 0? Array(n).fill(0).map((num,i)=> n / 2 == i || n / 2 -1 == i?1:num):
//     Array(n).fill(0).map((num,i)=> Math.floor(n/ 2) == i?1:num)
//     let original = temp_parte
//     let left 
//     let right 
//     dimonds.push(temp_parte)
//     if(n % 2 == 0){
//         do{

//             if(temp_parte[temp_parte.length -1] == 1 && temp_parte[0] == 1){
//                 left = temp_parte.slice(0,n/2)
//                 right = temp_parte.slice(n/2)
//                 let indexL = left.findIndex((a)=>a == 1)
//                 let indexR = right.findIndex((a)=>a == 1)
//                 left[indexL] = 0
//                 left[indexL+1 ] = 1
//                 right[indexR] = 0
//                 right[indexR -1] = 1
//                 let new_arr = left.concat(right)
//                 dimonds.push(new_arr)
//                 temp_parte = new_arr
//             }else{
//                 left = temp_parte.slice(0,n/2)
//                 right = temp_parte.slice(n/2)
//                 let indexL = left.findIndex((a)=>a == 1)
//                 let indexR = right.findIndex((a)=>a == 1)
//                 left[indexL] = 0
//                 left[indexL-1] = 1
//                 right[indexR] = 0
//                 right[indexR +1] = 1
//                 let new_arr = left.concat(right)
//                 dimonds.push(new_arr)
//                 temp_parte = new_arr
//             }
//            let teste = false
//            for(let i in temp_parte){
//             if(temp_parte[i] != original[i]){
//                 teste = true
//             }
//            }    
//            if(teste){
//             continue
//            }else{
//             dimonds.push("good cut")
//             for(let i in dimonds){
//                 console.log(dimonds[i])
//             }
//             return 
//            }

//         }while(true)
//     }else{
//         //outro caso 
//     }
    
// }
// diamond(4)
// Patterned Wristband

// function isWristband(mat){
//     let vertical = true 
//     let diagonalLeft = true 
//     let diagonalRight = true
//     let horizontal = true 
//     let count = mat[0].length-1
//     for(let i in mat){
//         if(mat[0][0] != mat[i][0]){
//             vertical = false
//         }
//         if(i == mat[i].length){
//             if(mat[0][0] != mat[i][i]){
//                 diagonalLeft = false
//             }
//             if(mat[0][mat[0].length] != mat[i][count]){
//                 diagonalRight = false
//             }
//             count--
//         }
//         for(let a in mat[i]){
//             if(mat[i][0] != mat[i][a]){
//                 horizontal = false
//             }
//         }
//     } 
//     if(horizontal || vertical || diagonalLeft || diagonalRight){
//         return true 
//     }else{
//         return false
//     }


// }
// // console.log(isWristband([
// //     ["A", "A"],
// //     ["B", "B"],
// //     ["C", "C"]
// //   ]))
// // Moving Particles Absorb Each Other after Collisions

// //get subset 
// function getSubsets(array, target) {
//     const result = [];
    
//     // Função para gerar todos os subconjuntos do array
//     function generateSubsets(start, subset) {
//         const sum = subset.reduce((acc, val) => acc + val, 0);
//         if (sum === target) {
//             result.push([...subset]); // Adiciona uma cópia do subset
//         }
        
//         for (let i = start; i < array.length; i++) {
//             subset.push(array[i]); // Adiciona o elemento ao subset
//             generateSubsets(i + 1, subset); // Continua gerando a partir do próximo elemento
//             subset.pop(); // Remove o elemento para voltar ao estado anterior
//         }
//     }

//     generateSubsets(0, []);

//     // Ordena os subconjuntos:
//     // 1. Primeiro por tamanho
//     // 2. Depois por ordem lexicográfica (comparação elemento a elemento)
//     result.sort((a, b) => {
//         if (a.length !== b.length) {
//             return a.length - b.length; // Primeiro pelo tamanho
//         }
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] !== b[i]) {
//                 return a[i] - b[i]; // Depois por valor de cada elemento
//             }
//         }
//         return 0; // Subconjuntos idênticos
//     });

//     return result;
// }

// // Testes
// // console.log(getSubsets([-3, -2, -1, 0, 1, 2, 3], 2));
// // [[2], [-1, 3], [0, 2], [-3, 2, 3], [-2, 1, 3], [-1, 0, 3], [-1, 1, 2], ...]


// Consecutive Number Series
function isConsecutive(numbers){
    let grupo = 1

    while(numbers.length % grupo == 0 ){
        let agrupado = numbers.split('')
        let grupos = []
        while(agrupado.length != 0){
            let gp = ''
            for(let i = 0;i < grupo;i++){
                gp+= agrupado.shift()
            }
            grupos.push(Number(gp))
        }
        let isSequence = true
        for(let i = 1;i < grupos.length-1;i++){
            if((grupos[i-1] +1 ) != grupos[i]){
                isSequence = false
                break
            }
        }
        console.log(grupos)
        if(isSequence){
            return true
        }else{
            grupo++
        }
    }
    return false
}
// console.log(isConsecutive("123124125"))

//Indices of Zeroes for the Longest Run of Contiguous Ones
// function zeroIndices(binaries,k){

//     let zeros = []
//     for(let i in binaries){
//         if(binaries[i] == 0){
//             zeros.push(i)
//         }
//     }
//     let combinacoes = []
//     for(let i in zeros){
//         let combinacao = []
//         if(zeros[i+k]){
//             let comb = []
//             for(let a = 0;a < k;a++){
//                 comb.push()
//             }
//         } 
//     }
//     let sequenciaMaior = 0
    

// }
// console.log(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1))