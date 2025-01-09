console.clear()
//Count Inversions
function inversionCount(arr) {
    function mergeAndCount(left, right) {
 let i = 0, j = 0, inversions = 0;
 const merged = [];
 
 while (i < left.length && j < right.length) {
     if (left[i] <= right[j]) {
         merged.push(left[i]);
         i++;
     } else {
         merged.push(right[j]);
         inversions += left.length - i; // Todos os elementos restantes em 'left' formam inversões
         j++;
     }
 }
 // Adiciona os elementos restantes
 while (i < left.length) merged.push(left[i++]);
 while (j < right.length) merged.push(right[j++]);
 
 return [merged, inversions];
}

function sortAndCount(arr) {
 if (arr.length <= 1) return [arr, 0];
 const mid = Math.floor(arr.length / 2);
 const [left, leftInversions] = sortAndCount(arr.slice(0, mid));
 const [right, rightInversions] = sortAndCount(arr.slice(mid));
 const [merged, mergeInversions] = mergeAndCount(left, right);
 return [merged, leftInversions + rightInversions + mergeInversions];
}

const [, inversions] = sortAndCount(arr);
return inversions;
}
function binaryTreeExercices() {
    class Node {
        constructor(value) {
            this.left = null;
            this.right = null;
            this.data = value;
        }
    }

    class BFS {
        constructor() {
            this.root = null;
        }

        // Fixed typo: Renamed `isemphy` to `isEmpty`
        isEmpty() {
            return this.root === null;
        }

        insert(value) {
            let newNode = new Node(value);
            
            // Check if tree is empty, insert root node if true
            if (this.isEmpty()) {
                this.root = newNode;
            } else {
                let temp = this.root;
                
                // Traverse the tree and insert new node in the correct position
                while (true) {
                    if (newNode.data < temp.data) {
                        // Go left if the new node's value is smaller
                        if (temp.left === null) {
                            temp.left = newNode;
                            break;
                        } else {
                            temp = temp.left;
                        }
                    } else {
                        // Go right if the new node's value is greater or equal
                        if (temp.right === null) {
                            temp.right = newNode;
                            break;
                        } else {
                            temp = temp.right;
                        }
                    }
                }
            }
        }
        maxHeight(node){
            if(node == null){
                return 0
            }
            let left = this.maxHeight(node.left)
            let right = this.maxHeight(node.right)
            return Math.max(left,right)+1
        }
        isIdentical(tree1, tree2) {
            // If both trees are empty, they are identical
            if (tree1 === null && tree2 === null) {
                return true;
            }

            // If one tree is empty and the other is not, they are not identical
            if (tree1 === null || tree2 === null) {
                return false;
            }

            // Check if the current nodes' data are equal, and recursively check the subtrees
            return (tree1.data === tree2.data) &&
                   this.isIdentical(tree1.left, tree2.left) &&
                   this.isIdentical(tree1.right, tree2.right);
        }
    }

    let bfs = new BFS();
    bfs.insert(10);
    bfs.insert(20);
    bfs.insert(30);
    console.log(bfs.root); // Check the tree structure
    console.log(bfs.maxHeight(bfs.root))

}

// binaryTreeExercices();
function linkedListExec(){
    function sumlist(){
        class Node{
            constructor(value){
               this.value = value
               this.next = null
            }
        }
        class LinkedList{
            constructor(){
                this.head = null 
                this.size = 0
               this.tail = null 
            }
            prepend(value){
                let node = new Node(value)
                if(!this.head){
                    this.head = node
                    this.tail = node 
                    this.size++
                    
                }else{
                    node.next = this.head
                    this.size++
                    this.head = node 

                }
            }
            append(value){
                let node = new Node(value)
                if(!this.head){ 
                    this.head = node
                    this.size++
                }else{
                    let temp = this.head
                    while(temp.next){
                        temp = temp.next
                    }
                    temp.next = node
                    this.size++
                }
            }
            removeFromEnd(){
                if(!this.head){
                    return null 
                }else{
                    let temp = this.head
                    while(temp.next.next){
                        temp = temp.next

                    }
                    let remove = temp.next.value
                    temp.next = null 
                    this.size--
                    return remove
                }
            }
            isEmpty(){
                return this.size == 0
            }
            print(){
                let values = ''
                let temp = this.head
                while(temp){
                    values+=`${temp.value}`
                    temp = temp.next
                }
                return console.log(values)
            }
        }
        let list = new LinkedList()
        list.append(1)        
        list.append(2)        
        list.append(4)
        list.prepend(5)        
        // list.print()

        let num1 = new LinkedList()
        let num2 = new LinkedList()
       num1.append(0)
       num1.append(0)
       num1.append(6)
       num1.append(3)
       num1.print()
    num2.append(0)
    num2.append(7)
    num2.print()
    class Stack{
        constructor(){
            this.stack = new LinkedList()
        }
        push(value){
            return stack.append(value)
        }
        pop(){
            return stack.removeFromEnd()
        }
        print(){
            return this.stack.print()
        }

    }
    function calc(list1,list2){
        if(list1.size > list2.size){
            while(list2.size < list1.size){
                list2.prepend(0)
            }
        }else if(list2.size > list1.size){
            while(list1.size < list2.size){
                list2.prepend(0)
            }
        }else{
            let resCalc = 0
            let tempSum
            while(!list1.isEmpty() && !list2.isEmpty()){
                let sum = list1.removeFromEnd() + list2.removeFromEnd()
                if(sum > 10){
                    if(list1.size != 0){
                        let temp = list1
                        while(temp.next){
                         temp = temp.next
                        }
                        temp.value = temp.value + Number(String(sum[0]))

                    }
                }
                resCalc+=sum
            }
            return resCalc
        }
       
    }
    // calc(num1,num2)
    }
    // sumlist()

    
}
linkedListExec()