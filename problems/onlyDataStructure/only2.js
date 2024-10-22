console.clear()
//geeksforgeeks easy probeam
function waveArray(n,arr){
    for(let i = 0;i < n-1;i+=2){
        var temp = arr[i]
         arr[i]= arr[i+1]
         arr[i+1] = temp
     }
     console.log(arr)
     return arr
}
//waveArray(5,[1,2,3,4,5])
function threeWayPartition(array, a, b)
{
    //your code here
    
    var i = 0
    var k = 0
    var j = array.length -1
    while(k <= j){
        if(array[k] < a){
            [array[k],array[i]] = [array[i],array[k]]
            i++
            if(i >k){
                k++
            }
        }else if(array[k]>b){
            [array[k],array[j]] = [array[j],array[k]]
            j--
        }else{
            k++
            
            
        }
    }
}
//Sorted subsequence of size 3
function findNumbers(arr){
    var new_array = []
    for(var i = 0;i < arr.length;i++){
        if(!new_array.includes(arr[i])){
            new_array.push(arr[i])
        }
    }
    let swaped 
    do{
        swaped = false
        for(var i = 0;i < new_array.length-1;i++){
            if(new_array[i]> new_array[i+1]){
                let temp = new_array[i]
                new_array[i] = new_array[i+1]
                new_array[i+1] = temp
                swaped = true
            }
        }
    }while(swaped)
        console.log(new_array)
    if(new_array[0]+1 == new_array[1]){
        return 1
    }else{
        return 0
    }
}
console.log(findNumbers([104, 753, 852 ,120 ,676 ,984]))
function detectloop(){
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
        }

        prepend(value){
            let new_node = new Node(value)
            if(this.isemphy()){
                this.head = new_node
                this.size++
            }else{
                new_node.next = this.head
                this.head = new_node
                this.size++
            }
        }   
        detectloop(pos){
            if(this.isemphy()){
                return -1
            }else{
                if(pos == 0){
                    return false
                }else if(pos > this.size){
                    return false
                }else{
                    let temp = this.head
                    for(let i = 1;i < pos;i++){
                        temp = temp.next
                    }
                    if(temp.next){
                        return true
                    }else{
                        return false
                    }
                }
            }
        }
        isemphy(){
            return this.size == 0
        }
        print(){
            let temp = this.head
            while(temp){
                console.log(temp.value)
                temp = temp.next
            }
        }
    
    }
    var l = new LinkedList()
    l.prepend(3)
    l.prepend(2)
    l.prepend(1)
    l.prepend(4)
    console.log(l.detectloop(4))
}
detectloop()
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1; // New nodes always start with a height of 1.
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Utility function to get the height of a node.
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Utility function to get balance factor of a node.
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Rotate node to the right.
    rightRotate(y) {
        const x = y.left;
        const T3 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T3;

        // Update heights post rotation
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x; // New root
    }

    // Rotate node to the left.
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights post rotation
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y; // New root
    }

    // Recursively inserts a node and performs rotations if necessary.
    insert(node, data) {
        if (!node) return new Node(data);

        if (data < node.data) {
            node.left = this.insert(node.left, data);
        } else if (data > node.data) {
            node.right = this.insert(node.right, data);
        } else {
            return node; // Duplicate data not allowed.
        }

        // Update node's height.
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get the balance to check if it became unbalanced.
        const balance = this.getBalanceFactor(node);

        // Left heavy scenario
        if (balance > 1) {
            if (data < node.left.data) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }

        // Right heavy scenario
        if (balance < -1) {
            if (data > node.right.data) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }

        return node;
    }

    add(data) {
        this.root = this.insert(this.root, data);
    }
}
            //ROTACAO ESQUERDA

                // let novopai = root.left
                // root.left = novopai.right
                // novopai.right = root
                // root = novopai 
                //pai +2 filho 0 ou +1
            //ROTACAO DIREITA

                // let novopai = root.right
                // root.right = novopai.left
                // novopai.left = root
                // root = novopai
                //pai -2 filho -1 ou 0

            //ROTACAO DUPLA_DIREITA_ESQUERDA
                // let new_filho = root.right
                // rotacaodireita(filho)
                // root.right = new_filho
                // rotacaoesquerda(pai)
                //pai +2 filho -1

            //ROTACAO DUPLA_ESQUERDA_DIREITA
                //let new_filho = root.left
                //rotacaoesqeurda(filho)
                //root.left = new_filho
                //rotacaodireita(pai)
                //pai -2 filho +1