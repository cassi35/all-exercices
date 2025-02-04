console.clear()
let fatorial = (n)=>{
    if(n == 0 || n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
let fat = fatorial(5)
console.log(fat)
let sum = function(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sum(array.slice(1));
};

console.log(sum([1, 2, 3, 4, 5, 6])); // 21
let contagem_regressiva = function(n){
    if(n == 0){
        return
    }else{
        console.log(n)
        return contagem_regressiva(n-1)
    }
}
contagem_regressiva(10)

let isEven = (n)=>{
    if(n ==1 || n == 0){
        return n == 1?false:true 
    }else{
        return isEven(n-2)
    }
}
console.log(isEven(9))

let sumBelow = function(n) {
    if(n == 0){
        return 0
    }else{
       if(n > 0){
        return (n-1)+sumBelow(n-1)
       }else{
        return (n+1)+sumBelow(n+1)
       }
    }
}
console.log(sumBelow(10))
let range = function(x, y) {
    if(x == y){
        return x  
    }else{

        return [x,range(x+1,y)].flat() 
    }   
};
console.log(range(2,9))
let reverse = (string) =>{
   if(string.length <= 1){
        return string
   }else{
    return string[string.length -1].concat(reverse(string.slice(0,-1)))
   }
}
console.log(reverse('hello'))
let multiply = function(x, y) {
    if(y==0){
        return 0 
    }else if(y > 0){
        return x + multiply(x,y-1)
    }else{
        return -multiply(x,-y)
    }
};
console.log(multiply(5,2))

let divide = function(x, y) {
    if(x <= 1){
        return 0
    }else{
        return 1 + divide(x-y,y)
    }
        
};
console.log(divide(10,2))
