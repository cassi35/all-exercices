////edabit medium 
console.clear()
//How Much is True?
function trueis(booleans){
    return booleans.filter(b => b == true).length
}
console.log(trueis([true,false,false,true,true,false]))
//A Redundant Function
const redundante = str => () => console.log(str)
var r1 = redundante('cassiano')
r1()
//Tile Teamwork Tactics
function tatic(a,b){
    for(var i = 1;i <= 6;i++){
        if((a+i)== b){
            return true 
        }
    }
    return false 
}
console.log(tatic(5,3))
//Buggy Code (Part 1)
function cubes(c){
var m = 1
for(var i = 0;i < 3;i++){
m = m * c
}
return m
}
console.log(cubes(5))
//area of triangle 
function tri(b,h){
    return (b * h)/2
}
console.log(tri(7,4))
//Convert Hours into Seconds
function convert(hours){
  var min = 0
  for(var i = 1;i <= hours;i++){
    min = 60 + min 
  }  
  return min *60
}
console.log(convert(2))
//Return the Next Number from the Integer Passed
function next(a){
return a+1
}
console.log(next(-3))
//Perimeters with a Catch
function perimeters(l,num){
switch(l){
    case "s":
        return num * 4
    case "c":
        return num * 6.28
    default:
        return undefined
}
} 
console.log(perimeters("c",4))
//Add up the Numbers from a Single Number
function addnumber(num){
    var i = 1
    var s = 0
    while(i <= num){
        s+=i 
        i++
    }
    return s 
}
console.log(addnumber(4))
//Burglary Series (04): Add its Name
//exercicio nao tem como terminar porque nao tem como colocar uma variavel como nome dentro de um objeto 
function addName(a1,a2,a3){
if(typeof a1 == 'object'){
    if(a1.valueOf()){
        if(typeof a2 == 'number' && typeof a3 == 'string'){
            var obj = {a3:a2}
            return obj 
        }else{
            var obj = {a2:a3}
            return obj 
        }
    }else{
        if(typeof a2 == 'number' && typeof a3 == 'string'){
            var obj = {a1,a3:a2}
            return obj 
        }else{
            var obj = {a1,a2:a3}
            return obj
        }
    }
}else if(typeof a2 == 'object'){
    if(a2.valueOf() == {}){
        if(typeof a1 == 'number' && typeof a3 == 'string'){
            var obj = {a3:a1}
            return obj
        }else {
            var obj = {a1:a3}
            return obj
        }
    }else{
        if(typeof a1 == 'number' && typeof a3 == 'string'){
            var obj = {a2,a3:a1}
            return obj
        }else {
            var obj = {a2,a1:a3}
            return obj
        }
    }
}else{
    if( a3.valueOf() == {}){
        if(typeof a1 == 'number' && typeof a2 == 'string'){
            var obj = {a2:a1}
            return obj 
        }else{
            var obj = {a1,a2}
            return obj 
        }
    }else{
        if(typeof a1 == 'number' && typeof a2 == 'string'){
            var obj = {a3,a2:a1}
            return obj 
        }else{
            var obj = {a3,a1:a2}
            return obj 
        }
    }
}
}
console.log(addName({},"brutus",300))
//Find Number of Digits in Number
function sum_numbers(num){
    return String(num).split('').length
}
console.log(sum_numbers(1305981031))
//Which Generation Are You? 
function generation(x,y){
if(y == "m"){
    switch(x){
        case -3:
            return 'great grandfather'
        case -2:
            return 'grandfather'
        case -1:
            return 'father'
        case 0:
            return 'me!'
        case 1:
            return 'son'
        case 2:
            return 'grandson'
        case 3:
            return 'great grandson'
        default:
            return undefined
    }
}else{
    switch(x){
        case -3:
            return 'great grandmother'
        case -2:
            return 'grandmother'
        case -1:
            return 'mother'
        case 0:
            return 'me!'
        case 1:
            return 'daughter'
        case 2:
            return 'granddaughter'
        case 3:
            return 'great granddaughter'
        default:
            return undefined
    }
}
}
console.log(generation(2,"f"))
//RegEx Exercise 1: Find the Time
console.clear()
function regex(str){
    var teste = /[\s][0-9]{2,3}[:][0-9]{2,3}/g
    return teste.test(str)
}
console.log(regex('breakfest at 09:00 in the room 123:426'))
//Is it Time for Milk and Cookies?
function date(date){
    var vespera = /(\d{4})+[-]+(11)+[-]+(24)/g
      date = toString(date)
    return date.includes('2000')
}
console.log( date(new Date(2000,11,24)))
console.log(new Date())
//Find the nth Tetrahedral Number
function tetra(n){
    return(n*(n+1)*(n+2))/6
}
//matchstick houses
function matchHouses(h){
    var soma = 6
    for(var i = 0;i < h;i++){
        var a = i
        do{
            soma = soma + 6
            a--
        }while(a > 0)
    }
    return soma
}
console.log(matchHouses(1))
//Function Factory
var number = (n)=>{
    return (s)=>{
        return s+n 
    }
}
var soma = number(10)
console.log(soma(10))
//Learn Lodash (2): Compact
let loadash = (array)=>{
    return filtrar(array)
}
let filtrar = (array)=>{
    return array.filter((elemento=> elemento != null && elemento != undefined && elemento != "")) 
}
let load = loadash([0, 1, false, 2, "", 3])
console.log(load)
//Convenience Store
console.clear()
function changeEnough(money,price){
    return ()=>{
        return money.reduce((a,b)=>a+b) == price
    }
}
var canIpay = changeEnough([2, 100, 0, 0], 14.11)
console.log(canIpay())
//Function Factory
function closure(s1){
    return (s2)=>{
        return s1+s2 
    }
}
var c = closure(10)
console.log(c(3))
//

//Array of Multiples
function multiples(arr,length)
{
    var m = []
    for(var i = 1 ;i <= length;i++){
       m.push(arr * i)
    }
    return m
}
//console.log(multiples(12,10))
//positive dominant 
console.clear()
function positive(arr){
    var pos = arr.filter(elemento => elemento >= 0)
    pos = bubbleSort(pos).length
    var neg = arr.filter(elemento => elemento < 0)
    neg = bubbleSort(neg).length
   // return pos > neg?true:false 
   return neg < pos?true:false
}
function bubbleSort(arr){
    var n = arr.length
    for(var i = 0;i < n;i++){
        for(let j = 0;j < n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    var saida = []
    for(var i = 1;i < arr.length;i++){
        if(arr[i] == arr[i-1] && saida.includes(arr[i-1]) == false){
            saida.push(arr[i])
        }
    }
    if(saida.length == 0){
        //quer dizer que nao tem nenhum igual
        return arr
    }else{
        return saida
    }
}
var p = positive([5, 99, 832, -3, -4])
console.log(p)
//less than 100
function less(arr){
    return arr.reduce((a,b)=>a+b) < 100 
}
console.log(less([9,2,3,212,12]))
//The Farm Problem
function farm(chiken,cows,pigs){
    //legs 
    var legs = (chiken * 2)+(cows * 4)+(pigs * 4)
    return legs
}
console.log(farm(2,3,5))
//Miserable Parody of a Calculator
function calculator(string){
    
    return eval(string)
}
console.log(calculator("49/7*2-3"))
//are the numbers equal 
function equal(n1,n2){
    if(typeof n1 == typeof n2){
        if(n1 == n2){
            return true 
        }else{
            return false
        }
    }else{
        return false
    }
}
console.log(equal("2",2))
//Burglary Series (12): Get Vodka Bottle
