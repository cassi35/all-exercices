//recursion
// console.clear()
// function message1(n){
//     console.log('hello world '+n)
//   return message2(2)
// }
// function message2(n){
//     console.log('hello world '+n)
//    return message3(3)
// }
// function message3(n){
//     console.log('hello world '+n)
//     return
// }
// message1(1)
//stack 
//main stack 
/* 

prit3   1
prin2   2
print1  3
main
*/

function fibonaci(n){
    if(n < 2){
        return n
    }else{
        return fibonaci(n-1)+fibonaci(n-2)
    }
}
// console.log(fibonaci(4))

function fatorial(n) {
    if (n === 1) { // Caso base
      return 1;
    }
    return n * fatorial(n - 1); // Chamada recursiva
  }
  
//   console.log(fatorial(5)); // Resultado: 120


function search(arr,target,s,e){
    if(s > e){
        return -1
    }
    let m = s + (e - s) / 2
    if(arr[m] == target){
        return m 
    }

    if(target < arr[m]){
        return  search(arr,target,s,m-1)
    }
    
    return search(arr,target,m+1 , e)

}
// let arr = [1,2,3,4,53,56,30] 
// console.log(search(arr,30,0,arr.length -1))

// console.log()

function fun(n){
    if(n == 0){
        return 
    }
    fun(n-1)
    console.log(n)
}
// fun(5)
function fatoria(n){
    if(n == 1){
        return n
    }
    return n * fatoria(n-1)
}
// console.log(fatoria(5))

function iSsorted(arr,index){
    if(index == arr.length -1){
        return true
    }
    return arr[index]  < arr[index+1] && iSsorted(arr,index+1)
}
// console.log(iSsorted([1,2,11,3,4,5],0 ))
console.clear()
function bubblesort(arr,r,c){
    if(r == 0){
        return
    }

    if(c < r){
        if(arr[c] > arr[c+1]){
            let temp = arr[c]
            arr[c] = arr[c+1]
            arr[c+1] = temp

        }
        bubblesort(arr,r,c+1)
    }else{
        bubblesort(arr,r-1,0)
    }
}
let arr2 = [21,32,1,34,2]
bubblesort(arr2,arr2.length-1,0)
console.log(arr2)