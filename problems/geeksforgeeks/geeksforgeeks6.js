
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
console.log(perfectSum([5, 2, 3, 10, 6, 8], 10)); // Saída: 3
// console.log(perfectSum([2, 5, 1, 4, 3], 10));     // Saída: 3
// console.log(perfectSum([5, 7, 8], 3));            // Saída: 0
// console.log(perfectSum([35, 2, 8, 22], 0));       // Saída: 1
