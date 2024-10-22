
console.clear()
//edabit easy
//facil or easy

/* minhas solucoes para o site edabit com javascript || my solution of the website "eddabit" with javascript*/
//01
function addiction(n1,n2){
    return n1+n2
}
//02
//Bitwise Operations
function Bitwise(escolhido,n1,n2){
    switch(escolhido){
        case 'and': 
            return n1 & n2 
        break
        case 'or':
            return n1 | n2 
        break
        case 'not':
            return (~n1,~n2)
        break
        case 'xor':
            return n1 ^n2 
        break     
        default:
            return undefined  
    }
}
//console.log(Bitwise('or',4,2))

//03
//Add up the Numbers from a Single Number
function addUpp(number){
    var numbers = []
    var sum = 0
    for(var i = 1;i < number;i++){
        if(sum < number){
            sum = sum + i
            numbers.push(i)
        }else if(sum == number){
            break
        }
    }
    return numbers
}
console.log(addUpp(10))

//04
/* 
    /\
    | |
    
*/
//Matchstick Houses
function matchHOuses(step){
    if(step == 1){
        return 6
    }else{
        var sum = 6
        for(var i = 0;i < step;i++){
        }    
    }
}
//left shift powers two 
//find min and max
function minmax(arr){
    var min = arr[0]
    var max = arr[0]
    var i = 0
    while(i < arr.length){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
        i++
    }
    console.log(min,max)
}
//minmax([1])

//
//Is it Time for Milk and Cookies?
function chistmans(month,day){
    var date = new Date()
    if(date.getDate() == day && date.getMonth() == month){
        return `it's time for milk and cokies`
    }else{
        return -1
    }
}
//console.log(chistmans(12,4))
//Which Function Returns the Larger Number?
function largetsNumber(){
    var f = ()=>{
        var n = Math.floor(Math.random()*10)
        return n
    }
    var g = ()=>{
        var n = Math.floor(Math.random()*10)
        return n
    }
    var g1 = g()
    var f1 = f()
    if(g1 > f1){
        return "g"
    }else if(g1 < f1){
        return "f"
    }else{
        return "neither both are same"
    }
}
//
//or largertsNumber(()=>,()=>)
//console.log(largetsNumber())

//Check if One Array can be Nested in Another
function nestedArray(arr1,arr2){
    for(var n2 of arr2){
        for(var n1 of arr1){
            if(n2 == n1){
                return false
            }
        }
    }
    return true
}
//console.log(nestedArray([9, 9, 8], [8, 9]))
//Sum of Resistance in Series Circuits
function sumResistence(resistence){
    if(typeof resistence == 'object'){
        var s = 0
        resistence.forEach(res => {
            s+=res
        });
    
        return s

    }else{
        return -1
    }
}
//console.log(sumResistence([1, 5, 6, 3]))
//
try
{

    function sortedDrink(driks){
        //bubble sort
        let swapped 
        do{
            swapped = false
            for(var i =0;i < driks.length-1;i++){
                //for in does't work / nao funciona 
                if(driks[i].price > driks[i+1].price){
                    var temp = driks[i]
                    driks[i] = driks[i+1]
                    driks[i+1] = temp
                    swapped = true
                }
            }
        }while(swapped)
        return driks //o(n²)
    }
    var drinks = sortedDrink([
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ])
    console.log(drinks)
}catch(err){
    console.log(err)
}
//Tuck in Array / colocar na matriz
function tuck(arr1,arr2){
    var sort = arr1.concat(arr2).flat()
    //insertions sort
    for(var i = 1;i < sort.length;i++){
        var numberinsertion = sort[i]
        var j = i-1 
        while(j >= 0 && sort[j] > numberinsertion){
            sort[j+1] = sort[j]
            j = j - 1 
        }
        sort[j+1] = numberinsertion
    }//complexidade or complexity o(n²)
    return sort
}
console.log(tuck([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

//Older Than Me // mais velho que eu 
class older{
    constructor(){
        this.peaples = new Set()//nao permitem valores duplicados // set doesn't allow duplicate numbers
    }
    add(name,age){//nome e idade
        var compare = {name:name,age:age}
        if(this.peaples.size == 0){

            this.peaples.add({name:name,age:age})
        }else if(this.peaples.has(compare)){
            return -1
        }else{
            this.peaples.add({name:name,age:age})
        }
    }
    compare(p1,p2){
        var test = []
        for(var p of this.peaples.values()){
            test.push(p)
        }
        if(test.includes(p1) && test.includes(p2)){
            var pessoa1 
            var pessoa2
            for(var val of this.peaples.values()){
                if(val.name == p1){
                    pessoa1 = val
                }
                if(val.name == p2){
                    pessoa2 = val
                }
            }
            if(pessoa1.age > pessoa2.age){
                return `${pessoa1.name} é mais velho que ${pessoa2.name}`
            }else{
                return  `${pessoa2.name} é mais velho que ${pessoa1.name}`
            }
        }else{
            return undefined
        }
    }
    show(){//mostrar
        console.log(this.peaples)        
    }

}
var pessoa1 = new older()
pessoa1.add('cassiano',18)
pessoa1.add('maria',18)
console.log(pessoa1.compare('cassiano','maria'))
pessoa1.show()
//No Conditionals?
function nocondicionals(input){
    switch(input){
        case 0:
            return 1
        case 1:
            return 0
    }
}
//
//superior the first array
function superior(arr1,arr2){
    if(typeof arr1 == 'object' && typeof arr2 == 'object'){
        var s1 = arr1.reduce((a,b)=>a+b)
        var s2 = arr2.reduce((a,b)=>a+b)
        if(s1 > s2){
            return true
        }else{
            return false
        }
    }else if(typeof arr1 == 'string' && typeof arr2 == 'string'){
        //bubble sort
        if(arr1.length > arr2.length){
            return true
        }else{
            for(var i = 0;i < arr1.length;i++){
                if(arr1[i] < arr2[i]){
                    return false
                }
            }
            return true
        }
    }else{
        return undefined
    }
}
var s = superior([1, 2, 4], [1, 2, 3])
var s2 = superior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
console.log(s,s2)

//Filter out Strings from an Array
function filterout(arr){
    return arr.filter(t => typeof t == 'number')
}
console.log(filterout([1,2,'a','b']))
//sum of cubes
function cubessum(arr){
    return arr.map(sum => sum**3).reduce((a,b)=>a+b)
}
var sumadoscubos = cubessum([1,5,9])
console.log(sumadoscubos)
//how many vogals?
function vogals(str){
    var vogals = ['a','e','i','o','u']
    var sum = 0
    for(var i = 0;i < str.length;i++){
        if(vogals.includes(str[i])){
            sum++
        }
    }
    return sum 
}
console.log(vogals("Celebration"))
//Sort by String Length
function sortstringlength(string){
    return string.sort()
}
console.log(sortstringlength(["apple", "pie", "shortcake"]))
//Sort an Array by String Length
function sortByString(arr){
        return arr.sort()
}
console.log(sortByString(["Google", "Apple", "Microsoft"]))
//recrusion factorials
function factorials(f){
    var fat = 1
    while(f > 0){
        fat = fat * f 
        f--
    }
    return fat 
}
//console.log(factorials(5))
//Basketball Points
console.clear()
function basketball(two,tree){
    return (two*2)+(tree*3)
}

console.log(basketball(38,8))
//filp
function flip(n){
    return n==1?0:1
}
//Guess the Number Game
