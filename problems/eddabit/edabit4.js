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
