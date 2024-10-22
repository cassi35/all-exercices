console.clear()
//Missing in Array

function missing(arr,numero){
    let n = arr.length
    for(let i = 0; i < n;i++){
        for(let j = 0;j < n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    var sumI = 0
    for(var i = 0;i <= numero;i++){
        sumI=sumI+i
    }
    var sumC = 0

    for(var num of arr){
        sumC+=num
    }
    return sumI-sumC

}
console.log(missing([1,2,3,5],5))
//second largest []
function bubble(arr){
    let swaped
    do{
        swaped = false
        for(var i = 0;i < arr.length -1;i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swaped = true
            }
        } 
    }while(swaped)
return arr
}
console.log(bubble([9,7,4,2]))
//Kth from End of Linked List
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
    isempty(){
        return this.size ==0
    }
    getSize(){
        return this.size
    }
    peek(){
        return this.head.value
    }
    prepend(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node 
            this.tail = node 
        }else{
            node.next = this.head//inicio
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node
            this.tail = node 
         }else{
            this.tail.next = node 
            this.tail = node 
         }
         this.size++
    }//final
    removeFromFront(){
        if(this.isempty()){
            return null 
        }else{
            const value = this.head.value
            this.head = this.head.next
            this.size-- 
            return value
        }
    }
    removeFromEnd(){
        if(this.isempty()){
            return null
        }else{
            const value = this.tail.value
            if(this.size==1){
                this.head = null 
                this.tail = null
            }else{
                let prev = this.head
                while(prev.next != this.tail){
                    prev = prev.next
                }
                prev.next = null
                this.tail = prev 
            }   
            this.size--
            return value
        }

    }
    insert(value,index){
        if(index < 0 || index > this.size){
            return false
        }
        if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(var i = 0;i < index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node 
            this.size++
        }
    }
    removeFrom(index){
        if(index < 0 || index >= this.size){
            console.log(null)
            return 
        }
        let removeNode
        if(index == 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(var i = 0;i < index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
        
    }
    removeValue(value){
        if(this.isempty()){
            console.log(null)
            return

        }
        if(this.head.value == value){
            this.head = this.head.next
            this.size--
            console.log(value)
            return 
        }else{
            let prev = this.head
            while(prev.next && prev.next.value != value){
                prev = prev.next
            }
            if(prev.next){
                var removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null 
        }
    }
    search(value){
        if(this.isempty()){
            return -1
        }
        var temp = this.head
        while(temp){
            if(temp.value == value){
                return true 
            }
            temp = temp.next
        }
        return false
    }

    reverse(){
        let prev = null 
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print(){
        if(this.isempty()){
            console.log(false)
        }else{
            var ponteiro = this.head
            var listaValor = ''
            while(ponteiro){
                listaValor+=` ${ponteiro.value} `
                ponteiro = ponteiro.next
            }
            console.log(listaValor)
        }
    }

}
/* 
SOBRE O OBJETO QUANDO ARMAZENA EM UMA OUTRA VARIAVEL 
ELAS DUAS OU TRES E ETC.. FICAM IGUAIS ENTAI SIGNIFICA
QUE SE EU MUDAR O VALOR DE ALGUMA VAI MUDAR OS DAS OUTRAS TAMBEM 

VAR OBJ1 = {NOME:'CASSIANO'}
VAR OBJ2 = OBJ1
OBJ2.NOME = 'MARIA'
RETORNA 
(MARIA E MARIA )OBJ1 E OBJ2
*/
const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.insert(10,4)
list.removeFrom(9)
console.log(list.size)
console.log(list.isempty())
list.print()
list.reverse()
//console.log(list.removeValue(3))
list.print()
console.log(list.search(1))
class linkedListStack{
    constructor(){
        this.list = new LinkedList()
    }
    push(item){
     return this.list.append(item)//final 

    }
    pop(){
        return this.list.removeFromEnd()
     }
     peek(){
        return this.list.value
     }
     isemphy(){
        return this.list.isempty()  
     }
     getSize(){
        return this.list.getSize()
     }
     print(){
        return this.list.print()
     }
}
class queueLiked{
    constructor(){
        this.list = new LinkedList()
    }
    enqueue(value){
        return this.list.append()
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.peek()
    }
    isemphy(){
        return this.list.isempty()
    
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}
class Graph{
    constructor(){
        this.adjencylist = {}
    }
    addVertex(vertex){
        if(!this.adjencylist[vertex]){
            this.adjencylist[vertex] = new Set()//adicionar vertices e um conjundo 
            //de arestas
        }
    }
    removeEge(vertex1,vertex2){
        this.adjencylist[vertex1].delete(vertex2)
        this.adjencylist[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjencylist[vertex]){
            return
        }
        for(var adjacenteVertice of this.adjencylist[vertex]){
            this.removeEge(vertex,adjacenteVertice)
        }
        delete this.adjencylist[vertex]
    }
    addEge(vertex1,vertex2){
        if(!this.adjencylist[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjencylist[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjencylist[vertex1].add(vertex2)
    }
    hasEdge(vertex1,vertex2){
console.log(this.adjencylist[vertex1].has(vertex2) || this.adjencylist[vertex2].has(vertex1))
    }
    print(){
        for(var vertex in this.adjencylist){
            console.log(vertex+' -> '+[...this.adjencylist[vertex]])
        }
    }
}
const graph = new Graph()
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")
graph.addVertex("d")
graph.addEge("a","b")
graph.addEge("c","b")
graph.hasEdge("c","b")
// graph.removeVertex('a')
// graph.removeEge("a","b")
// graph.print()
// const dephyfirstprint = (graph,source)=>{
//     const stack = [source]
//     while(stack.length > 0){
//         const current = stack.pop()
//         console.log(current)
//        for(let nei of graph[current]){
//         stack.push(nei)
//        }
//     }
// }
// const dfs = {
//     a:['b','c'],
//     b:['d'],
//     d:['f'],
//     e:[],
//     f:[]
// }
// dephyfirstprint(dfs,'a')