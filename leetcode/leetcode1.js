const { fontsSync } = require("figlet");

// Check if One String Swap Can Make Strings Equal
console.clear()
function areAlmostEqual(s1, s2) {
    if (s1.length !== s2.length) return false;
    let diff = []
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diff.push(i);
      }
    }
    if (diff.length === 0) return true
    if (diff.length === 2) {
      const [i, j] = diff
      return s1[i] === s2[j] && s1[j] === s2[i]
    }
    return false
  }
  
  function entrada_areAlmostEqual() {
    console.log(areAlmostEqual('attack', 'defend'))
  }
//   entrada_areAlmostEqual()
function twoSum(nums, target) {
    for(let i = 0;i < nums.length;i++){
        for(let e = i+1;e < nums.length;e++){
           let soma = nums[i] + nums[e]
           if(soma == target){
            return [i,e]
           }

       }    
    }
    return -1
}
function entrada_twosum() {
    let nums =[2,7,11,15]
    let target = 9
    console.log(twoSum(nums,target))
}
// entrada_twosum()

//Roman to Integer
function romanToInt(roman) {
    let values = new Map([
        ['I', 1], ['V', 5], ['X', 10], 
        ['L', 50], ['C', 100], ['D', 500], ['M', 1000]
    ]);
    let soma = 0
    for (let i = 0; i < roman.length; i++) {
        let current = values.get(roman[i])
        let next = values.get(roman[i + 1])
        if (next && current < next) {
            soma -= current
        } else {
            soma += current
        }
    }
    return soma
}
function entrada_romanToInt() {
    console.log(romanToInt('MCMXCIV'))
}
// entrada_romanToInt()
// valid parenteses
function isValid(s) {
    let stack = []
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            if (stack.length === 0) {
                return false
            }
            let topo = stack[stack.length - 1]
            if ((topo === '[' && char === ']') ||
                (topo === '(' && char === ')') ||
                (topo === '{' && char === '}')) {
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

function entrada_isValid() {
    let parenteses = '(()[])';
    console.log(isValid(parenteses))
}
// entrada_isValid();

//length of last word
function lengthOfLastWord(string){
    let last =  string.split(' ').filter((word)=>word != '')
    return last[last.length-1].length
}
function entrada_lengthOfLastWord(){
    let s = 'luffy is still joyboy'
    console.log(lengthOfLastWord(s))
}   
// entrada_lengthOfLastWord()
//search insert position
function searchInsert(nums,target){
    let position = 0
    let index = 0
    while(index < nums.length){
        let diferenca =  target - nums[index]
        if(diferenca == 1 || diferenca == 0){
            return diferenca == 1?position+1:position
        }
        index+=1
        position++
    }
    return -1
}
function entrada_searchInsert(){
    let nums = [1,3,5,6]
    let target = 5
    console.log(searchInsert(nums,target))
}
// entrada_searchInsert()

//plus one 
function plusOne(digits){
    let str_digits = String(Number(digits.join('')) +1).split('').map((n)=> Number(n))
    return str_digits
}
function entrada_plusOne(){
    let digits = [4,3,2,1]
    console.log(plusOne(digits))
}
// entrada_plusOne()

//remove duplicates from sorted linkedlist
//same tree
function same_tree() {
    class BinaryNode {
        constructor(value) {
            this.value = value
            this.left = null
            this.right = null
        }
    }
    class BinaryTree {
        constructor() {
            this.root = null
        }
        isEmpty() {
            return this.root === null
        }
        insert(value) {
            const newNode = new BinaryNode(value)
            if (this.isEmpty()) {
                this.root = newNode
            } else {
                this.insertNode(this.root, newNode)
            }
        }

        insertNode(root, newNode) {
            if (newNode.value < root.value) {
                if (root.left === null) {
                    root.left = newNode
                } else {
                    this.insertNode(root.left, newNode)
                }
            } else {
                if (root.right === null) {
                    root.right = newNode
                } else {
                    this.insertNode(root.right, newNode)
                }
            }
        }
        preorder(root = this.root) {
            if (root) {
                console.log(root.value)
                this.preorder(root.left)
                this.preorder(root.right)
            }
        }
        inorder(root = this.root){
            if(root){
                this.inorder(root.left)
                console.log(root.value)
                this.inorder(root.right)
            }
        }
        postorder(root = this.root){
            if(root){
                this.postorder(root.left)
                this.postorder(root.right)
                console.log(root.value)
            }
        }
        isSameTree(root1, root2) {
            if (!root1 && !root2) return true
            if (!root1 || !root2) return false
            if (root1.value !== root2.value) return false
            return (
                this.isSameTree(root1.left, root2.left) &&
                this.isSameTree(root1.right, root2.right)
            );
        }
        sortedArrayToBST(nums){
            for(let num of nums){
                this.insert(num)
            }
            return this.inorder()
        }
    }
    let tree1 = new BinaryTree()
    let tree2 = new BinaryTree()
    tree1.insert(1)
    tree1.insert(2)
    tree1.insert(10)
    tree1.insert(9)
    tree1.insert(11)
    tree2.insert(1)
    tree2.insert(2)
    tree2.insert(3)
    tree2.insert(4)
    tree2.insert(5)
    tree2.insert(6)
    console.log("As árvores são iguais?", tree1.isSameTree(tree1.root, tree2.root))
    // tree1.inorder()
    tree2.postorder()
}
// same_tree()
//implement stack usig queues
function stack_using_queues() {
    class Queue {
        constructor() {
            this.items = []
        }
        enqueue(value) {
            this.items.push(value)
        }
        dequeue() {
            return this.items.shift()
        }
        front() {
            return this.items[0]
        }
        isEmpty() {
            return this.items.length === 0
        }
        size() {
            return this.items.length
        }
    }
    
    class MyStack {
        constructor() {
            this.q1 = new Queue()
            this.q2 = new Queue()
        }
        
        push(x) {
            this.q1.enqueue(x)
        }
        
        pop() {
            if (this.q1.isEmpty()) return null
            while (this.q1.size() > 1) {
                this.q2.enqueue(this.q1.dequeue())
            }
            let removedElement = this.q1.dequeue()
            let temp = this.q1
            this.q1 = this.q2
            this.q2 = temp
            
            return removedElement
        }
        
        top() {
            if (this.q1.isEmpty()) return null
            while (this.q1.size() > 1) {
                this.q2.enqueue(this.q1.dequeue())
            }
            let topElement = this.q1.front()
            this.q2.enqueue(this.q1.dequeue())
            let temp = this.q1
            this.q1 = this.q2
            this.q2 = temp
            
            return topElement
        }
        
        empty() {
            return this.q1.isEmpty()
        }
    }
    let myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    console.log(myStack.top())
    console.log(myStack.pop())
}
// stack_using_queues()
///move zeros
function move_zero(arr){
    let no_zero = arr.filter((element)=> element != 0)
    let zeros = arr.filter(element => element == 0)
    no_zero.push(...zeros)
    arr = no_zero
    return arr
}
// console.log(move_zero([0,1,0,3,12]))

//intersection two arrays
function intersection_arr(num1,num2){
    let numbers = []
    for(let num of num1){
        if(num2.includes(num) && !numbers.includes(num)){
            numbers.push(num)
        }
    }
    return numbers
}
let entrada_intersection_arr = ()=>{
    let nums1 = [4,9,5]
    let nums2 =  [9,4,9,8,4]
    console.log(intersection_arr(nums1,nums2))
}
// entrada_intersection_arr()
//15 3sum 
function threeSum(nums ){
    let arrs = []
    for(let i = 0;i < nums.length;i++){
        for(let j = 0;j < nums.length;j++){
            for(let k = 0;k < nums.length;k++){
                let soma = nums[i]+ nums[j]+nums[k]
                let sequence = [nums[i],nums[j],nums[k]]
                if(i!=j && i!=k && k !=j && soma == 0){
                    if(arrs == []){
                        arrs.push([nums[i],nums[j],nums[k]])
                    }else{
                        let pricipal = true  
                       for(let arr of arrs){
                        let teste = true 
                        for(let num of sequence){
                            if(arr.includes(num) == false){
                                teste = false
                            }
                        }   
                        if(teste){
                            pricipal = false
                           break
                        }
                       }
                       if(pricipal){
                        arrs.push(sequence)
                       }
                        
                    }
                }
            }
        }
    }
    return arrs
}
// console.log(threeSum([-1,0,1,2,-1,-4])) //de prima coisa linda