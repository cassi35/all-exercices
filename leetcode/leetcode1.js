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

//best time to buy and sell stock 
function maxProfit(prices){
   let minPrice = Infinity
   let maxProfit = 0
   for(let i = 0;i < prices.length;i++){
    if(prices[i] < minPrice){
        minPrice = prices[i]
    }else{
        let profit = prices[i] - minPrice
        maxProfit = Math.max(maxProfit,profit)
    }
   }
    return maxProfit
}
// console.log(maxProfit([7,1,5,3,6,4]))
function singleNumber(nums){
    if(nums.length == 0){
        return 
    }
    for(let i = 0;i < nums.length;i++){
        let soma = 1
        for(let j = 0;j < nums.length;j++){
            if(nums[j] == nums[i] && i != j){
                soma++
            }
        }
        if(soma == 1){
            return nums[i]
        }
    }
}
// console.log(singleNumber([4,1,2,1,2]))
//majory element
function majorityElement(nums) {
    let candidate = null
    let count = 0
    for (let num of nums) {
        if (count === 0) {
            candidate = num
        }
        count += (num === candidate) ? 1 : -1
    }
    return candidate
}

// console.log(majorityElement([2,2,1,1,1,2,2]))
//valid phone numbers
function validPHone(file){
    if(file.length == 0){
        return -1
    }
    let valid = ''
    for(let number of file){
        let rule = /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/g
        if(rule.test(number)){
            valid = valid.concat(number).concat('\n')
        }
    }
    return valid
}
var listPhones = [
'987-123-4567',
'123 456 7890',
'(123) 456-7890'

]
// console.log(validPHone(listPhones))
//happy number
function isHappy(num) {
    let seen = new Set()
    while (num !== 1 && !seen.has(num)) {
        seen.add(num)
        num = String(num)
            .split('')
            .map(n => Number(n) ** 2)
            .reduce((a, b) => a + b, 0)
    }
    return num === 1
}
// console.log(isHappy(19))
function reverseString(s){
    let start = 0
    let end = s.length-1
    while(start <= end){
        [s[start],s[end]] = [s[end],s[start]]
        end--
        start++
    }
    return s
}
// console.log(reverseString(["h","e","l","l","o"]))


//ransom note
function canConstruct(ransomNote, magazine) {
    let magazineCount = {}
    for (let char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1
    }
    console.log(magazineCount)
    for (let char of ransomNote) {
        if (!magazineCount[char] || magazineCount[char] === 0) {
            return false
        }
        magazineCount[char]--
    }

    return true
}

// console.log(canConstruct('aa', 'aab'))

//multiply string
function multiplyStrings(num1, num2) {
    let len1 = num1.length, len2 = num2.length
    let res = new Array(len1 + len2).fill(0)
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0')
            let sum = mul + res[i + j + 1]
            res[i + j + 1] = sum % 10
            res[i + j] += Math.floor(sum / 10)
        }
    }
    while (res.length > 1 && res[0] === 0) {
        res.shift()
    }
    return res.join('')
}
// console.log(multiplyStrings("123", "456"))
//find common characters
function commonChars(words) {
    let common = []
    let word = words[0].split('')
    for (let letter of word) {
        if (words.every(wrd => wrd.includes(letter))) { 
            common.push(letter)
            words = words.map(wrd => wrd.replace(letter, ''))
        }
    }
    return common
}

// Teste
// console.log(commonChars(["bella", "label", "roller"]))
//Maximize Sum Of Array After K Negations
function largestSumAfterKNegations(nums, k) {
    let index = 0
    let max_soma = 0
    for(let i = 0;i < k;i++){
        let temp = nums[index]
        nums[index] = temp * -1
        let sum = nums.reduce((a,b)=>a+b)
        max_soma = Math.max(sum,max_soma)
        nums[index] = temp
        if(index == nums.length){
            index = 0
        }else{
            index++
        }
    }
    return max_soma
}
// console.log(largestSumAfterKNegations([4,2,3],3))
