console.clear()
class Queue{
    constructor(){
        this.head = null 
        this.tail = null 
        this.size = 0
    }
    length(){
        return this.size
    }
    enqueue(data){
        const node = {data,next:null}
        if(!this.head && !this.tail){
            this.head = node
            this.tail = node 
        }else{
            this.tail.next = node 
            this.tail = node 
        }
        return this.size++
    }
    dequeue(){
        if(this.size == 0){
            return false
        }else{
            const fisrtData = this.peek()
            this.head = this.head.next
            if(!this.head){
                this.tail = null 
            }
            this.size--
        }
    }
    peek(){
        return this.head.data
    }
    peekLast(){
        return this.tail.data
    }
    toArr(){
        var arr = []
        var node = this.head
        while(node){
            arr.push(node.data)
            node = node.next
        }
        console.log(arr)
        return 
    }
}
var queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.toArr()
console.log(queue.head)
/* 
Uma fila circular (circular queue) é uma estrutura de dados em que a última posição da fila é conectada à primeira,
*/
class CircularQueue{
    constructor(size){
        this.size = size
        this.queue = new Array(size)
        this.front = -1
        this.rear = -1 
    }
    isfull(){
        return (this.front==0 && this.rear == this.size-1) ||(this.rear == (this.front-1+this.size)%this.size)
    }
    isemphy(){
        return this.front == -1
    }
    enqueue(item){
        if(this.isfull()){
            return null
        }
        if(this.isemphy()){
            this.front=0
            this.rear=0
        }else{
            this.rear = (this.rear +1)% this.size
        }
        this.queue[this.rear] = item
    }
    dequeue(){
        let item 
        if(this.isemphy()){
            
            console.log("queue is emphy")
            return
        }
        if(this.front === this.rear){
            item = this.queue[this.front]
            this.front = -1
            this.rear = -1 

        }else{
            item = this.queue[this.front]
            this.front = (this.front+1)%this.size
        }
        console.log("dequeue",item)
        return item
    }   
    isEmpty() {
        return this.front === -1;
    }
    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let i = this.front;
        do {
            console.log(this.queue[i]);
            i = (i + 1) % this.size;
        } while (i !== (this.rear + 1) % 
            this.size);
            console.log(this.queue,this.front,' é o front')
    }
}
/* var queueCircular = new CircularQueue(4)
queueCircular.enqueue(1)
queueCircular.enqueue(2)
queueCircular.enqueue(3)
queueCircular.enqueue(4)
queueCircular.displayQueue()
queueCircular.dequeue()
queueCircular.displayQueue() */
class QueueNonNode{
    constructor(){
        this.items ={}
        this.rear = 0
        this.front = 0
    }
    enqueue(value){
        this.items[this.rear] = value
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front==0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
}
class Stack{
    constructor(){
        this.top = 0
        this.stack = []
    }
    push(value){
        this.stack[this.top] = value
        this.top++
    }
    pop(){
        if (this.top == 0) {
            return 'stack is empty';
        } else {
            this.top--;
            const result = this.stack[this.top];
            return result;
        }
    }
    size(){
        return this.top
    }
    peek()
    {
        return this.stack[this.top-1]
    }
    view(){
        for(var i = 0;i < this.top;i++){
            console.log(this.stack[i])
        }
    }
}
// https://www.youtube.com/watch?v=tWVWeAqZ0WU
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
    removeEdge(vertex1,vertex2){
        this.adjencylist[vertex1].delete(vertex2)
        this.adjencylist[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjencylist[vertex]){
            return
        }
        for(var adjacenteVertice of this.adjencylist[vertex]){
            this.removeEdge(vertex,adjacenteVertice)
        }
        delete this.adjencylist[vertex]
    }
    addEdge(vertex1,vertex2){
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
    depthFrirstPrint(source) {
        const stack = new Stack();
        stack.push(source);
        
        while (stack.size() > 0) {
            const current = stack.pop();
            console.log(current);
            
            for (let neighbor of this.adjencylist[current]) {
                stack.push(neighbor);
            }
        }
    }
    breadthFirstPrint(source) {
        const queue = new QueueNonNode();
        const visited = new Set(); // para evitar visitar nós repetidos
        queue.enqueue(source);
        visited.add(source);

        while (!queue.isEmpty()) {
            const current = queue.dequeue();
            console.log(current);

            // Usando a lista de adjacências correta (this.adjencylist)
            for (let neighbor of this.adjencylist[current]) {
                if (!visited.has(neighbor)) {
                    queue.enqueue(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    }
    hasPath(graph,src,dst){
        if(src==dst){
            return true
        }
        for(let neibor of this.adjencylist[src]){
           if( this.hasPath(graph,neibor,dst)==true){
            return true
           }
        }
        return false
    }
    undirectedPath(edges,nodeA,nodeB){
            const graph = this.buildGraph(edges)
            function hasPaths(graph,src,dst,visited){
                if(src==dst){
                    return true
                }
                if(visited.has(src)){
                    return false
                }
                visited.add(src)
                for(let neibor of this.adjencylist[src]){
                   if( this.hasPath(graph,neibor,dst,visited)==true){
                    return true
                   }
                }
                return false
            }
            return hasPaths(graph,nodeA,nodeB,new Set())
    }
    buildGraph(edges){
        const graph = {}
        for(let edge of edges){
            const [a,b] = edge
            if(!(a in graph)){
                graph[a] = []
            }
            if(!(b in graph)){
                graph[b] =[]
            }
            graph[a].push(b)
            graph[b].push(a)
        }
        console.log(graph)
        return graph
    }   
    connnectedComponents(graph){
        const visited = new Set();
        let count = 0;
        for(let node in graph){
            if(this.explore(graph, node, visited)){
                count++;
            }
        }
        return count;
    }
    
    explore(graph, current, visited){
        if(visited.has(current)){
            return 0;
        }
        visited.add(current);
        let size = 1;
        for(let neighbor of graph[current]){
            size += this.explore(graph, neighbor, visited);
        }
        return size;
    }
    largestComponent(graph){
        const visited = new Set();
        let longest = 0;
        for(let node in graph){
            const size = this.explore(graph, node, visited);
            if(size > longest) longest = size;
        }
        return longest;
    }
    shortedPath(edges,nodeA,nodeB){
        const graph = this.buildGraph(edges)
        const visited = new Set([nodeA])
        const queue = [[nodeA,0]]
        while(queue.length>0){
             const [node,distance] = queue.shift()
             if(node == nodeB) return distance
             for(let neibor of graph[node]){
                if(!visited.has(neibor)){
                    visited.add(neibor)
                    queue.push([neibor,distance+1])
                }
            }
          }
          return -1
    }
    islandCount(grid){
        const visited = new Set()
        function explores(grid,r,c,visited){
            const rowBalanced = 0 < r && r < grid.length
            const colBalanced = 0 < r && r < grid[0].length
            if(!rowBalanced && !colBalanced){
                return false
            }
            if(grid[r][c] == 'w'){
                return false
            }
            const pos = r+','+c 
            if(visited.has(pos)) return false
            visited.add(pos)

            explores(grid,r-1,c,visited)
            explores(grid,r+1,c,visited)
            explores(grid,r,c-1,visited)
            explores(grid,r,c+1,visited)
            return true
        }
        let count = 0
        for(let r = 0;r < grid.length;r++){
            for(let c = 0;c < grid[0].length;c++){
               if( explores(grid,r,c,visited)== true) {
                count+=1
               }
            }
        }
    }
    print(){
        for(var vertex in this.adjencylist){
            console.log(vertex+' -> '+[...this.adjencylist[vertex]])
        }
    }
}
const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')
graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('c','e')
graph.addEdge('d','f')
graph.depthFrirstPrint('a')
console.log()
graph.breadthFirstPrint('a')
console.log()
graph.print()
var edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
    ,]
console.log(graph.hasPath(graph.adjencylist,'a','d'))
console.log(graph.buildGraph(edges))
console.clear()
/* graph.connnectedComponents({
    0:[8,1,5],
    1:[0],
    5:[0,8],
    2:[3,4],
    3:[2,4],
    4:[3,2]
})//_> 2 */
console.log(graph.largestComponent(graph.adjencylist))
console.log(graph.shortedPath(edges,'i','k'))
const grid = [
    ['w','l','w','w','w'],
    ['w','l','w','w','w'],
    ['w','w','w','l','w'],
    ['w','l','w','l','w'],
    ['w','l','w','l','l'],
    ['l','l','w','w','w']
]
//console.log(graph.islandCount(grid))