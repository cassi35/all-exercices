console.clear()
function queueImplement(){
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
        isempy(){
            return this.size==0 
        }
        getsize(){
            return this.size
        }
        append(value){
            const node = new Node(value)
            if(this.isempy()){
                this.head = node
                this.tail = node
            }else{
                this.tail.next = node
                this.tail = node

            }
            this.size++
        }
        removeFromFront(){
            if(this.isempy()){
                return null 
            }else{
                let removed = this.head.value
                let new_head = this.head.next  
                this.head = new_head
                this.size-- 
                return removed
            }
        }
        print(){
            return console.log(this.head)
        }

    }
    class Queue{
        constructor(){
            this.queue = null 
        }
        enqueue(value){
            return this.queue.append(value)
        }
        dequeue(){
            return this.queue.removeFromFront()
        }
        getsizes(){
            return this.queue.getsize()
        }
        prints(){
            return this.queue.print()
        }
    }
}
function isPresents(tree,target){
    let swaped
    do{
        swaped = false
        for(var i = 0;i < tree.length-1;i++){
            if(tree[i] > tree[i+1]){
                let temp = tree[i]
                tree[i] = tree[i+1]
                tree[i+1] = temp 
            }
        }
    }while(swaped)
  function bs(arr,leftindex,rightindex,target){
    if(leftindex > rightindex){
        return -1
    }else {
        let mid = Math.floor((leftindex+rightindex)/2)
        if(target == arr[mid]){
            return 1
        }else if(target < arr[mid]){
            return bs(arr,leftindex,mid-1,target)
        }else {
            return bs(arr,mid+1,rightindex,target)
        }
    }
  }
  return bs(tree,0,tree.length-1,target)
}
console.log(isPresents([-5,2,10,4,6],4))
function reverseWords(str){
    let new_string = []
    let word = ''
    let last = ''
    let index 
    for(var i in str){
        if(str[i] == '.'){
            index = i 
        }
    }
    for(var i in str){
        if(str[i] == '.' || str[i] == '.'){
            new_string.push(word)
            word = ''
        }else{
            word = word+str[i]
        }
    }
    let res =  str.split('.').reverse().map(s => s.concat('.'))
    new_string = new_string.concat(str.slice(index)).reverse().map((s)=>s.concat('.')).join('')
    return new_string.slice(1,new_string.length-1)
}
console.log(reverseWords('pqr.mno'))
//Remove loop
function removeLop(){
    class Node{
        constructor(value){
            this.value = value
            this.next =  null
        }

    }
    class linkedList{
        constructor(){
            this.data = null 
        }
        append(value){
            if(this.data){
                this.data = new Node(value)
                return
            }else{
                let temp = this.data
                while(temp.next){
                    temp = temp.next
                }
                let node = new Node(value)
                temp.next = node
                return
            }
        }
        hasLoop(pos){
            let temp =this.data
            for(let i = 0;i < pos;i++){
                temp = temp.next
            }
            if(!temp.next){
                return true
            }else{
                return false
            }
        }
    }
}
function missingNumber(arr){
    let n = arr.length;

    // Passo 1: Colocar os números no lugar certo
    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            // Trocar os números para as posições corretas
            let correctIndex = arr[i] - 1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    // Passo 2: Encontrar o primeiro índice onde arr[i] != i+1
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }

    // Caso especial: Se todos os números de 1 a n estão presentes, o próximo número é n+1
    return n + 1;
}
console .log(missingNumber( [0, -10, 1, 3, -20]))
function findUnion(a,b){
    let res = [];
    let i = 0, j = 0;

    // Comparar os dois arrays até que todos os elementos de um deles sejam processados
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            // Se o elemento de `a` não está no resultado, adicione-o
            if (res.length === 0 || res[res.length - 1] !== a[i]) {
                res.push(a[i]);
            }
            i++;
        } else if (a[i] > b[j]) {
            // Se o elemento de `b` não está no resultado, adicione-o
            if (res.length === 0 || res[res.length - 1] !== b[j]) {
                res.push(b[j]);
            }
            j++;
        } else {
            // Se ambos os elementos são iguais, adicione apenas um deles
            if (res.length === 0 || res[res.length - 1] !== a[i]) {
                res.push(a[i]);
            }
            i++;
            j++;
        }
    }

    // Adicionar os elementos restantes de `a`, se houver
    while (i < a.length) {
        if (res.length === 0 || res[res.length - 1] !== a[i]) {
            res.push(a[i]);
        }
        i++;
    }

    // Adicionar os elementos restantes de `b`, se houver
    while (j < b.length) {
        if (res.length === 0 || res[res.length - 1] !== b[j]) {
            res.push(b[j]);
        }
        j++;
    }

    return res;
}
console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]))
function middleLinkedList(){
    class Node{
        constructor(value){
            this.next = null 
            this.value = value 
        }
    }
    class LinkedList{
        constructor(){
            this.head = null 
            this.size = 0
        }
        append(value){
            if(this.size==0){
                let node = new Node(value)
                this.head = node 
                this.size++
            }else{
                let temp = this.head
                while(temp.next){
                    temp = temp.next
                }
                let node = new Node(value)
                temp.next = node
                this.size++
            }
        }
        middle(){
            if(this.size == 0){
                return null 
            }
            let mid = Math.floor(this.size/2)
            let mid_res 
            let temp = this.head
            for(var i = 0;i <= mid;i++){
                mid_res = temp.value 
                temp = temp.next
            }
            return console.log(mid_res)
        }
        reverse(){
            let curll = this.head
            let prev = null 
            let next
            while(curll != null){
                next = curll.next 
                curll.next = prev
                prev = curll
                curll= next
            }
            let res = ''
            let temp = prev
            while(temp){
                let str = String(temp.value)
                res+=str 
                temp = temp.next
            }
            return res 
        }
        reverseDoble(){

        }
        print(){
            let total = ''
            let temp = this.head
            while(temp){
                let str = String(temp.value)
                total+=str 
                temp = temp.next 
            }
            console.log(total)
        }

    }
   // let list = new LinkedList()
    //let res = 10
    //for(var i = 1;i <= 6;i++){
       // list.append(res)
       // res = res+10
    //}
    //list.print()
    //list.middle()
    //console.log(list.reverse())
    class Nodedoble {
        constructor(value) { 
            this.prev = null; 
            this.next = null; 
            this.data = value;
        }
    }
    
    class LinkedListDoble {
        constructor() {
            this.head = null; 
            this.tail = null;
        }
    
        isempy() {
            return this.head == null;    
        }
    
        addItem(value) {
            let temp = new Nodedoble(value);
            if (this.isempy()) {
                this.head = temp;
                this.tail = temp;
            } else {
                this.tail.next = temp;
                temp.prev = this.tail; // Atualiza o ponteiro prev do novo nó
                this.tail = temp;
            }
        }
    
        reverseDoble(curll) {
            if (curll == null) {
                return null; 
            }
    
            // Troca os ponteiros
            const temp = curll.next;
            curll.next = curll.prev;
            curll.prev = temp;
    
            // Se curll.prev for null, significa que chegamos ao novo head
            if (curll.prev == null) { 
                this.head = curll; // Atualiza a nova cabeça
                return curll;
            }
    
            return this.reverseDoble(curll.prev);
        }
        rotateLinkedList(head,k){
            if(k == 0|| head == null){  
                return head
            }
            for(let i = 0;i < k;i++){
                let curr = head 
                while(curr.next){
                    curr = curr.next
                }
                curr.next = head 
                curr = curr.next
                head = head.next
                curr.next = null 
            }
        }
        findNthLast(head,n){
            let len = 0
            let temp = head 
            while(temp != null){
                temp = temp.next
                len++ 
            }
            if(len < n){
                return -1
            }
            temp = head 
            for(var i = 1;i < len-n+1;i++){
                temp = temp.next
            }
            return temp.data
        }
        deleteLastOcurrrence(head,key){
            let last = null 
            let lasprev = null 
            let curr = head 
            let prev = null 
            while(curr != null){
                if(curr.data == key){
                    lasprev = prev
                    last = curr
                }   
                prev = curr
                curr = curr.next
            }   
            if(last != null ){
                if(lasprev != null){
                    lasprev.next = last.next 

                }else{
                    head = head.next 
                }
            }
            return head 
        }
        print() {
            if (this.isempy()) {
                return null; 
            } else {
                let res = '';
                let curr = this.head;
                while (curr) {
                    res += String(curr.data) + ' '; // Adiciona um espaço para melhor visualização
                    curr = curr.next;
                }
                return console.log(res);
            }
        }
    }
    
    var dobble = new LinkedListDoble();
    for (var i = 0; i < 10; i++) {
        dobble.addItem(i);
    }
    
    //dobble.rotateLinkedList()
    //dobble.reverseDoble(dobble.head); // Inverte a lista
   // dobble.rotateLinkedList(dobble.head,7)
    console.log(dobble.findNthLast(dobble.head,4)),
    dobble.deleteLastOcurrrence(dobble.head,3)
    dobble.print(); // Imprime a lista invertida
}

middleLinkedList()