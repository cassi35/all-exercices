
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

function rotate_arr(arr,d){
    if(arr.length == 0){
        return undefined
    }else{
        if(d == 0){
            return arr 
        }else{
            let remove = arr.shift()
            arr.push(remove)
            return rotate_arr(arr,d-1)
        }
    }
}
let rotate_entrada = ()=>{
    let arr = [7, 3, 9, 1]
    let d = 9
    console.log(rotate_arr(arr,d))
}
// rotate_entrada()

// Remove loop in Linked List
function remove_loop() {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        isEmpty() {
            return this.head === null;
        }

        append(value) {
            let node = new Node(value);
            if (this.isEmpty()) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
        }

        createLoop() {
            if (!this.isEmpty() && this.tail) {
                this.tail.next = this.head.next; // Cria um loop
            }
        }

        print() {
            let temp = this.head;
            let values = [];
            let count = 0; // Evita loop infinito na impressão
            while (temp && count < 20) {
                values.push(temp.value);
                temp = temp.next;
                count++;
            }
            console.log(values.join(" -> "));
        }
    }

    function detectAndRemoveLoop(head) {
        let slow = head;
        let fast = head;

        // Passo 1: Detectar o loop
        while (fast && fast.next) {
            slow = slow.next;        // Move 1 passo
            fast = fast.next.next;   // Move 2 passos

            if (slow === fast) { // Loop detectado
                break;
            }
        }

        // Se nenhum loop foi detectado
        if (slow !== fast) {
            console.log("Nenhum loop encontrado.");
            return false;
        }

        // Passo 2: Encontrar o início do loop
        slow = head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }

        // Passo 3: Remover o loop
        let loopNode = slow;
        let temp = loopNode;
        while (temp.next !== loopNode) {
            temp = temp.next;
        }
        temp.next = null; // Remove o loop

        console.log("Loop removido.");
        return true;
    }

    // Teste
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);

    list.createLoop(); // Cria um loop na lista
    console.log("Antes de remover o loop:");
    list.print();

    detectAndRemoveLoop(list.head);

    console.log("Depois de remover o loop:");
    list.print();
}

// remove_loop();
function perfectSum(arr, target) {
    let n = arr.length;

    // Criar a matriz dp com valores iniciais como 0
    let dp = Array(n + 1).fill().map(() => Array(target + 1).fill(0));

    // Para soma 0, existe exatamente 1 subconjunto: o conjunto vazio
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }
    // Preenchendo a tabela dp
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= target; j++) {
            if (arr[i - 1] <= j) {
                // Soma sem incluir o elemento atual + soma incluindo o elemento atual
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
            } else {
                // Soma sem incluir o elemento atual
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][target];
}

// Testando a função
// console.log(perfectSum([5, 2, 3, 10, 6, 8], 10)); // Saída: 3
// console.log(perfectSum([2, 5, 1, 4, 3], 10));     // Saída: 3
// console.log(perfectSum([5, 7, 8], 3));            // Saída: 0
// console.log(perfectSum([35, 2, 8, 22], 0));       // Saída: 1
//Multiply two strings
function multiply_string(s1,s2){
    if(isNaN(s1) || isNaN(s2)){
        return 'invalid  input'
    }else{
        if(s1.includes(0)){
            let arr_str = s1 
            let nums = ''
            for(let i in arr_str){
                if(arr_str[i] != 0){
                    nums+=arr_str[i]*s2 
                }
            }
            return 0 - nums
        }else{
            let arr_str = s1
            let nums 
            for(let i in arr_str){
                if(i == 0){
                    nums = arr_str[i] * s2 
                }else{
                    let add = arr_str[i] * s2 
                    let str = String(nums).concat(String(add))
                    nums = str * 1
                }
            }
            return  nums 
        }
    }
}
function entrada_multiply_string(){
    let s1 = '33'
    let s2 = '2'
    let multiply = multiply_string(s1,s2)
    console.log(multiply)

}
// entrada_multiply_string()


//Count Inversions

function count_inverstion(arr){
    if(arr.length == 0){
        return null 
    }else{
        let count = 0
        for(let i = 0;i < arr.length ;i++){
            for(let j = i+1;j < arr.length;j++){
                if(arr[i] > arr[j]){
                    count++
                }
            }
        }
        return count
    }
}
function entrada_count_inverstion(){
    let arrs = [2, 3, 4, 5, 6]
    let inversion = count_inverstion(arrs)
    console.log(inversion)
}
// entrada_count_inverstion()



//0 - 1 Knapsack Problem

function maximum_sum_knapsack(capacity,val,wt){
    let max = 0
    let number = null
    for(let i in val){
        for(let j in wt){
            let soma = wt[j] + val[i]
            if(soma >= capacity && max < soma && wt[j] < capacity){
                number = val[i]
                max = soma
            }
        }
    }
    return number
}
function entrada_maximum_sum_knapsack(){
    let capacity = 4
    let val = [10, 40, 30, 50]
    let wt = [5, 4, 6, 3]
    let max = maximum_sum_knapsack(capacity,val,wt)    
    console.log(max)
}
// entrada_maximum_sum_knapsack()



//findUnion
function findUnion(a,b){
    let elements = []
    let union = a.concat(...b)
    for(let element of union){
        if(elements.includes(element) == false && element != undefined){
            elements.push(element)
        }
    }
   function bubble_sort(arr){
    let swaped 
    do{
        swaped = false
        for(let i = 0;i < arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swaped = true
            }
        }
    }while(swaped)
        return arr
   }
   return bubble_sort(elements)

}
function entrada_findUnion(){
    let a = [2, 2, 3, 4, 5]
    let b = [1, 1, 2, 3, 4]
    let union = findUnion(a,b)
    console.log(union)
}
// entrada_findUnion()
//Smallest Positive Missing
function smallest_positive(numbers){
    let arrs = []
    for(let num of numbers){
        if(!arrs.includes(num) && num > 0){
            arrs.push(num )
        }
    }
    function insertion_sort(arr){
        for(let i = 0;i < arr.length;i++){
            let key = arr[i]
            let j = i-1
            while(j >= 0 && arr[j] > key){
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = key
        }
        return arr
    }
    arrs = insertion_sort(arrs)
    for(let i = 1;i < arrs.length;i++){
        let diferenca = arrs[i] - arrs[i-1]
        if(diferenca == 2){
            return arrs[i] -1 //coisa linda
        }
    }
  
    return -1
}
function entrada_smallest_positive(){
    let arr = [2,-3,1,4,1,7]
    console.log(smallest_positive(arr))
}

// entrada_smallest_positive()



//Triplet Sum in Array
function triple_sum(arr,target){
  for(let i = 0;i < arr.length;i++){
    for(let j = i+1;j < arr.length;j++){
        for(let a = j+1;a < arr.length;a++){
        if(arr[i]+arr[j]+arr[a] == target){
            return true 
        }
        }
    }
}
return false
}
function entrada_triple_sum(){
    let arr = [1, 4, 45, 6, 10, 8]
    console.log(triple_sum(arr,13))
}
// entrada_triple_sum()

//Middle of a Linked List
//Longest Common Prefix of Strings
function longestCommonPrefix(arr){
    let prefex = ""
    let index = 0
    while(true){
        let caracter = []
        for(let word of arr){
            caracter.push(word[index])
        }
        let car = caracter[0][0]
        for(let i in caracter){
            if(car != caracter[i]){
                return prefex
            }
        }
      prefex = prefex.concat(car)
      index++
    }
}
// console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]))
//Number of occurrence
function countFreq(arr,target){
    let begin = arr.findIndex((e)=>e==target)
    let sequence = 0
    let index = begin
    while(index <= arr.length){
        if(arr[index] == target){
            sequence++
        }
        index++
    }
    return sequence
}   
// console.log(countFreq([1, 1, 2, 2, 2, 2, 3],2))

//Union of 2 Sorted with Duplicates
function findUnion(a,b){
    let conj = new Set()
    let arr = a.concat(b)
    arr.forEach((element)=>{
        conj.add(element)
    })
    let new_conj =  Array.from(conj)
    let swaped
    do{
        swaped = false
        for(var i = 0;i < new_conj.length -1;i++){
            if(new_conj[i] > new_conj[i + 1]){
                let temp = new_conj[i]
                new_conj[i] = new_conj[i+1]
                new_conj[i+1] = temp
                swaped = true
            }
        } 
    }while(swaped)
    return new_conj
}
// console.log(findUnion([1, 2, 3, 4, 5],[1, 2, 3, 6, 7]))

//K Sized Subarray Maximum
function maxOfSubarrays(arr,k){
    let subarr_max = []
    do{
        subarr_max.push(Math.max(...arr.slice(0,k)))
        arr.shift()
    }while(arr.length >= k)
    return subarr_max
}
// console.log(maxOfSubarrays([1, 2, 3, 1, 4, 5, 2, 3, 6],3))

//Find triplets with zero sum
function findTriplets(arr){
    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length;j++){
            for(let a = 0;a < arr.length;a++){
                if(arr[i]+arr[j]+arr[a] == 0 && i != j && i != a && j != a){
                    return true
                }
            }
        }
    }   
    return false
}
// console.log(findTriplets([1, 2, 3]))

function isSubsetSum(arr, target, index = 0, memo = {}) {
    let key = `${index}-${target}`
    if (target === 0) return true
    if (index >= arr.length || target < 0) return false
    if (key in memo) return memo[key]
    let include = isSubsetSum(arr, target - arr[index], index + 1, memo)
    let exclude = isSubsetSum(arr, target, index + 1, memo)

    memo[key] = include || exclude
    return memo[key];
}
// console.log(isSubsetSum([3, 34, 4, 12, 5, 2], 9))

//Find all pairs with a given sum

function allPairs(target, arr1, arr2) {
    let pairs = []
    for(let num of arr1){
        for(let num2 of arr2){
            if(num2+num == target){
                pairs.push([num,num2])
            }
        }
    }
    return pairs
}
// console.log(allPairs(9,[1, 2, 4, 5, 7],[5, 6, 3, 4, 8]))
//Delete Mid of a Stack

//Third largest element
function  thirdLargest(arr) {
    if(arr.length < 3){
        return -1
    }
   function insertion_sort(arr){
    for(let i = 1;i < arr.length;i++){
        let num_insert = arr[i]
        let j = i -1 
        while(j >= 0 && arr[j] > num_insert){
            arr[j+1] = arr[j]
            j = j -1
        }
        arr[j+1] = num_insert
    }
   }
   insertion_sort(arr)
   return arr[arr.length -3]
}
// console.log(thirdLargest([5, 5, 5]))
//Remove Duplicates
function removeDups(s){
    let set = new Set()
    s = s.split('')
    for(let i in s){
        set.add(s[i])
    }
    return set
}
// console.log(removeDups("zvvo"))

//Insert in a Sorted List
function sortedInsert(){
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    
    class SinglyLinkedList {
        constructor() {
            this.head = null;
        }
    
        // Adicionar um nó no final
        append(data) {
            const newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }
    
        // Adicionar um nó no início
        prepend(data) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }
    
        // Remover um nó do início
        removeFromFront() {
            if (!this.head) return;
            this.head = this.head.next;
        }
    
        // Remover um nó do final
        removeFromEnd() {
            if (!this.head) return;
            if (!this.head.next) {
                this.head = null;
                return;
            }
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
    
        // Remover um nó com base em um valor
        remove(data) {
            if (!this.head) return;
    
            if (this.head.data === data) {
                this.head = this.head.next;
                return;
            }
    
            let current = this.head;
            while (current.next) {
                if (current.next.data === data) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    
        // Obter o tamanho da lista
        getSize() {
            let count = 0;
            let current = this.head;
            while (current) {
                count++;
                current = current.next;
            }
            return count;
        }
    
        // Verificar se a lista está vazia
        isEmpty() {
            return this.head === null;
        }
    
        // Exibir a lista
        display() {
            let current = this.head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
        insert_sorted(node,key){
           let new_node =  new Node(key)
           if(this.isEmpty() || this.head.data >= key){
            new_node.next = this.head
            this.head = new_node
            return this.display()
           }
           let prev = null 
           let current = this.head
           while(current && current.data < key){
            prev = current
            current = current.next 
           }
           prev.next = new_node
           new_node.next = current
           return this.display()
        }   
    }
    let list = new SinglyLinkedList()
    list.prepend(100)
    list.prepend(50)
    list.insert_sorted(list.head,75)
   
}
// sortedInsert()
//Element with left side smaller and right side greater
function  findElement(arr) {
   for(let i = 1 ;i < arr.length-1;i++){
    let left = arr.slice(0,i).some((num)=>num > arr[i])
    let right = arr.slice(i).some((num)=>num < arr[i])
    if(!left && !right){
        return arr[i]
    }
   }
   return -1
}
// console.log(findElement( [11,9,12]))
function firstNonRepeating(arr) {
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1
    }
    for (let num of arr) {
        if (count[num] === 1) {
            return num;
        }
    }
    return 0
}

console.log(firstNonRepeating([-1, 2, -1, 3, 2]))
//Transpose of Matrix
function  transpose(mat, n) {
   for(let i = 0;i < mat.length;i++){
    for(let j = i+1;j < mat[0].length;j++){
        [mat[i][j],mat[j][i]] = [mat[j][i],mat[i][j]]
    }
   }
   return mat
}
console.log(transpose([[1, 2],[9, -2]],4))