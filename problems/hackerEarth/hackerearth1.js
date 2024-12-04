//easy challanges hackerearth 
console.clear()
//Find pairs
function findPairs(arr,n){
    for(let i = 0;i < arr.length;i++){
        for(let j = i+1;j < arr.length;j++){
            if(i != j && (arr[i]-arr[j]) /(i-j) == 1 && arr[i] - arr[j] % i-j == 0){
                pairs.push([i,j])
            }
        }
    }
    return pairs
}
// console.log(findPairs([1,2,3,4,5,6,7,8,9],9))
//Swap Sum
function swapSum(arr1,arr2,n){
    let swaped 
    do{
        for(let i = 0;i < n;i++){
            if(arr1[i] > arr1[i+1]){
                let temp = arr1[i]
                arr1[i] = arr1[i+1]
                arr1[i+1] = temp
            }
        }
        for(let i = 0;i < n;i++){
            if(arr2[i] < arr2[i+1]){
                let temp = arr2[i]
                arr2[i] = arr2[i+1]
                arr2[i+1] = temp
            }
        }
    }while(swaped)
        for(let i = 0;i < n;i++){
            if(arr1[i] < arr2[i]){
                arr1[i] = arr2[i]
            }
        }
    return arr1.reduce((a,b)=>a+b)

}
console.log(swapSum([1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],9))
//Killer Monsters
function killerMoster(monsters,strenghths){
    let batterFileld = [] 
    for(let i = 0;i < monsters.length;i++){
        if(monsters[i] > strenghths || monsters == strenghths){
            batterFileld.push(monsters[i])
        }
    }
    return batterFileld

}
console.log(killerMoster([1,2,3,4,5,6,7,8,9],5))

