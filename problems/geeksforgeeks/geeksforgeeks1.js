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
    prepend(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node 
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
         }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
                
            }
            prev.next = node 
         }
         this.size++
    }//final
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
console.log('testando commit')