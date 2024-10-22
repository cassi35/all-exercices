console.clear()
function BinarySearch(arr,target){
    var sortedArray = mergesort(arr)
    var res = bst(sortedArray,target)
    return res
}
//arr = [2,3,42,4,2,6] --> 7
function bst(arr,target){
    let leftindex = 0
    let rightindex = arr.length -1
    while(leftindex <= rightindex){
        let mid = Math.floor((leftindex+rightindex)/2)
        if(target == arr[mid]){
            return mid 
        }
        if(target < arr[mid]){
            rightindex = mid+1
        }else{
            leftindex = mid+1
        }
    }
    return -1
}
var b = BinarySearch([5,2,3,2,4,2],5)
//console.log(b)
function mergesort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftarr = arr.slice(0,mid)
    const rightarr = arr.slice(mid)
    return merge(mergesort(leftarr),mergesort(rightarr))
}
function merge(leftArr,rightArr){
    const sortedarray = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedarray.push(leftArr.shift())
        }else{
            sortedarray.push(rightArr.shift())
        }
    }
    return [...sortedarray,...leftArr,...rightArr]
}

//3
//2 , 
//Middle of a Linked List
function midLinked(){
    class Node{
        constructor(value){
            this.value = value 
            this.next = null  
            
        }

    }
    class LinkedList{
        constructor(){
            this.head = null 
            this.arrayLinkedList = []
        
        }
        prepend(value){
            var new_node = new Node(value)
            if(this.head == null){
                this.head = new_node
            }else{
                new_node.next = this.head
                this.head = new_node
            }
        }
        append(value)
        {
            var node = new Node(value)
            if(this.head == null){
                this.head = node 
            }else{
                var prev = this.head
                while(prev.next){
                    prev = prev.next
                }
                prev.next = node 
            }
        }
        middle(){
            var temp = this.head
            while(temp){
                this.arrayLinkedList.push(temp.value)
                temp = temp.next
            }
            var res = Math.floor(this.arrayLinkedList.length/2)
            console.log(this.arrayLinkedList[res])
        }


    }
    var linked = new LinkedList()
    linked.append(2)
    linked.append(4)
    linked.append(6)
    linked.append(7)
    linked.append(5)
    linked.append(1)
    linked.middle()
}
midLinked()
//Floor in a Sorted Array
function findFloor(arr,n,x){
    var index = null
    for(var i = 0;i < n;i++){
        if(arr[i] < x){
            index = i
        }
    }
    return index

}
var find = findFloor([1,2,8,10,11,12,19],7,5)
console.log(find)
function bubblesort(arr){
    var swaped
    do{
        swaped = false
        for(var i = 0;i < arr.length-1 ;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swaped = true 
            }
            
        }
    }while(swaped)
}