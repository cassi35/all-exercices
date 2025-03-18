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
var findDuplicate = function(nums) {
    for(let i = 0;i < nums.length;i++){
        if(nums.slice(i+1).includes(nums[i])){
            return nums[i]
        }
    }
};
// console.log(findDuplicate([1,3,4,2,2]))
var getHint = function(secret, guess) {
    secret = secret.split('')
    guess = guess.split('')
    let a = 0
    let b = 0
    for(let i in secret){
        if(secret[i] == guess[i]){
            a++
        }else{
            if(guess.includes(secret[i])){
                b++
            }

        }
       
    }
    return `${a}A${b}B`
}
// console.log(getHint("1123","0111"))
//Bulb Switcher

var bulbSwitch = function(n) {
   return Math.floor(Math.sqrt(n))

};
// console.log(bulbSwitch(3))
//super ugly number
function nthSuperUglyNumber(n, primes) {
    let heap = [1]
    let seen = new Set([1])
    let uglyNumber = 1;
    for (let i = 0; i < n; i++) {
        uglyNumber = heap.shift()

        for (let prime of primes) {
            let newNum = uglyNumber * prime

            if (!seen.has(newNum)) {
                heap.push(newNum)
                seen.add(newNum)
            }
        }
        heap.sort((a, b) => a - b)
    }
    return uglyNumber;
}

// console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))

//Sum of Two Integers

var getSum = function(a, b) {
    let parcial = a ^ b; 
    let carry = (a & b) << 1
    while (carry != 0) {
      let temp = parcial
      parcial = parcial ^ carry
      carry = (temp & carry) << 1
    }
    return parcial
  }
//   console.log(getSum(5, 3))

//degree of an array
var findShortestSubArray = function(nums) {
    if(nums.some((n)=>n < 0)){
        return -1
    }
    let frequence = new Map();
    let firstIndex = new Map()
    let maxDegree = 0
    let lastIndex = new Map()
    for (let i = 0;i < nums.length;i++) {
        let num = nums[i]
        frequence.set(num, (frequence.get(num) || 0) + 1);
        maxDegree = Math.max(maxDegree,frequence.get(num))
        if(!firstIndex.has(num)){
            firstIndex.set(num,i)
        }
        lastIndex.set(num,i)
    }
    let minLength = Infinity
    for(let [num,count] of frequence){
        if(count == maxDegree){
            let length = lastIndex.get(num) - firstIndex.get(num)+1
            minLength = Math.min(minLength,length)
        }
    }
    return minLength
};
// console.log(findShortestSubArray([1,2,2,3,1]))

var checkRecord = function(s) {
    let ausente = 0
    let atraso = 0
    for(let i = 0;i < s.length;i++){
        switch(s[i]){
            case 'A':
                ausente++
                break
            case 'L':
                atraso++
                break
        }
    }
    if(ausente < 2 && atraso < 3){
        return true 
    }else{
        return false
    }

};
// console.log(checkRecord("PPALLL"))

// Robot Return to Origin
var judgeCircle = function(moves) {
    let cordinates = [0,0]
    for(let move of moves){
        switch(move){
             case 'L':
                cordinates[0]--
                break
            case 'R':
                cordinates[0]++
                break
            case 'U':
                cordinates[1]--
                break
            case 'D':
                cordinates[1]++
        }
    }
    return cordinates[0] == 0 && cordinates[1] == 0
};
// console.log(judgeCircle("UL"))

//Find Smallest Letter Greater Than Target
var nextGreatestLetter = function(letters, target) {
  
    let left = 0 
    let right = letters.length 
    while(left < right){
        let mid = Math.floor((left+right)/2)
        if(letters[mid] > target){
            right = mid 
        }else{
            left = mid +1 
        }
    }
    return letters[left % letters.length]
};
console.log(nextGreatestLetter( ["x","x","y","y"],'z'))


// Toeplitz Matrix
var isToeplitzMatrix = function(matrix) {
   for(let i = 0;i < matrix.length-1;i++){
    for(let j = 0;j < matrix[0].length -1;j++){
        if(matrix[i][j] != matrix[i+1][j+1]){
            return false
        }
    }
   }
   return true

};
// console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
var lemonadeChange = function(bills) {
    let fiveCount = 0
    let tenCOunt = 0
    for(let bill of bills){
           switch(bill){
            case 5:
                fiveCount++
                break
            case 10:
                if(fiveCount > 0){
                    fiveCount++
                    tenCOunt--
                }else{
                    return false 
                }
                break
            default:
                if(tenCOunt > 0 && fiveCount > 0){
                    tenCOunt--
                    fiveCount--
                }else if(fiveCount >= 3){
                    fiveCount-=3
                }else{
                    return false 
                }
           }
    }
    return true 
};
// console.log(lemonadeChange([5,5,5,10,20]))
var isMonotonic = function(nums) {
    let isIncreasing = true
    let isDecreasing = true
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            isDecreasing = false
        }
        if (nums[i] < nums[i - 1]) {
            isIncreasing = false
        }
    }
    return isIncreasing || isDecreasing
}
// console.log(isMonotonic([1,2,2,3]))
var reverseOnlyLetters = function(s) {
    let left = Math.floor(s.length/2)
    let right = s.length -1
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    while(left < right){
        if(alphabet.includes(s[left].toLowerCase()) && alphabet.includes(s[right].toLowerCase())){
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        }
        if(alphabet.includes(s[left]) && !alphabet.includes(s[right])){
            right--
        }else if(!alphabet.includes(s[left].toLowerCase()) && alphabet.includes(s[right].toLowerCase())){
            left++
        }
    }   
    return s
}
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))
// Container With Most Water
console.clear()
var maxArea = function(height) {
  let area = 0
 let left = 0
 let right = height.length -1 
 while(left < right){
    let value = (right - left)* Math.min(height[left],height[right])
    if(value > area){
        area = value
    }
    if(height[left] < height[right]){
        left++
    }else{
        right--
    }
 }

 return area
};
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
var letterCombinations = function(digits) {
    if(!digits){
        return []
    }
    const numbers = new Map([
        ['2', 'abc'], ['3', 'def'], ['4', 'ghi'], ['5', 'jkl'],
        ['6', 'mno'], ['7', 'pqrs'], ['8', 'tuv'], ['9', 'wxyz']
    ]);

    let combinations = [];
   function backtrack(index,current){
    if(index == digits.length){
        combinations.push(current)
        return
    }
    let letters = numbers.get(digits[index])
    for(let letter of letters){
        backtrack(index+1,current+letter)
    }
   }
   backtrack(0,"")
   return combinations
};
// console.log(letterCombinations("23"))

//Generate Parentheses
var generateParenthesis = function(n) {
    let result = [];
    function backtrack(current, open, close) {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        if (open < n) {
            backtrack(current + "(", open + 1, close)
        }
        if (close < open) {
            backtrack(current + ")", open, close + 1)
        }
    }
    backtrack("", 0, 0)
    return result
};
// console.log(generateParenthesis(3))

var combinationSum = function(candidates, target) {
    let result = []
    function backtrack(start,combination , total){
        if(total == target){
            result.push([...combination])
        }
        if(total > target){
            return 
        }
        for(let  i = start;i < candidates.length;i++){
            combination.push(candidates[i])
            backtrack(i,combination,total+candidates[i])
            combination.pop()
        }
    }
    backtrack(0,[],0)
    return result
};
// console.log(combinationSum([2,3,6,7],7))
//Edit Distance
var minDistance = function(word1, word2) {
    let m = word1.length
    let n = word2.length
    let dp = Array(m+1).fill(null).map(()=>Array(n+1).fill(0))
   for(let i = 0;i <= m;i++){
    dp[i][0] = i
   }
   for(let j = 0;j<= m;j++){
    dp[0][j] = j
   }
   for(let i = 1;i <=m;i++){
    for(let j = 1;j <= n;j++){
        if(word1[i-1] == word2[j-1]){
            dp[i][j] = dp[i-1][j-1]
        }else{
            dp[i][j] = Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1],+1)
        }
    }
   }
   return dp[m][n]
};

//Rotate Image
var rotate = function(matrix) {
  for(let i = 0;i < matrix.length;i++){
    for(let j = i+1;j < matrix.length;j++){
        [matrix[i][j] , matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    }
  } 
  for(let i in matrix){
    matrix[i] = matrix[i].reverse()
  }
  return matrix
};
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currentSum = 0
    for (let num of nums) {
        if (currentSum < 0) {
            currentSum = 0
        }
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
}
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
//Spiral Matrix
var spiralOrder = function(matrix) {
  let lado = 'left'
  let count = 0
  let nums = []
  let up = matrix.length-2
  let teste = true 
  while(true){
    if(count > 2){
        let arr = matrix.flat()
        if(arr.length == nums.length){
            return nums 
        }else{
           if(teste){
                let add = matrix[up].slice(0,matrix[up].length-2)
                nums.push(...add)
               teste = false
           }else{
            let add = matrix[up].slice(0,matrix[up].length-2).reverse()
            nums.push(...add)
            teste = true 
           }
           up--
        }
    }else{
        switch(lado){
            case 'left':
            for(let num of matrix[0]){
                nums.push(num)
            }
            lado = 'right'
            break
            case 'right':
                for(let i = 1;i < matrix.length;i++){
                    nums.push(matrix[i][matrix.length-1])
                }
                lado = 'down'
                break
            case 'down':
                for(let i = matrix[matrix.length-1].length-2;i >= 0;i--){
                    nums.push(matrix[matrix.length-1][i])
                }
                break
        }
        count++
    }
  }  
};
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val) {
        this.stack.push(val)
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const val = this.stack.pop()
        if (val === this.getMin()) {
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

function min_stack(functions, arr) {
    let stack = new MinStack();
    let res = [];
    let arrIndex = 0;

    for (let fun of functions) {
        switch (fun) {
            case "MinStack":
                stack = new MinStack();
                res.push(null);
                break;
            case "push":
                stack.push(arr[arrIndex]);
                res.push(null);
                arrIndex++;
                break;
            case "pop":
                stack.pop();
                res.push(null);
                break;
            case "top":
                res.push(stack.top());
                break;
            case "getMin":
                res.push(stack.getMin());
                break;
        }
    }

    return res
}
// console.log(min_stack(
//     ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
//     [[], [-2], [0], [-3], [], [], [], []]
// ));

function integerBreak(n){
    if(n == 2){
        return 1 
    }
    if(n == 3){
        return 2 
    }
    let product = 1
    while(n > 4){
        product*=3 
        n-=3 
    }
    product*=n 
    return product
}
// console.log(integerBreak(10))
var restoreIpAddresses = function(s) {
    let ip_valido = []
    if (s.length < 4 || s.length > 12) return ip_valido;
    const isValid = (part) => {
        if (part.length > 1 && part[0] === '0') return false
        let num = Number(part);
        return num >= 0 && num <= 255
    }
    for (let i = 1; i < s.length && i < 4; i++) {
        for (let j = i + 1; j < s.length && j < i + 4; j++) {
            for (let k = j + 1; k < s.length && k < j + 4; k++) {
                let part1 = s.slice(0, i)
                let part2 = s.slice(i, j)
                let part3 = s.slice(j, k)
                let part4 = s.slice(k)
                if (isValid(part1) && isValid(part2) && isValid(part3) && isValid(part4)) {
                    ip_valido.push(part1 + '.' + part2 + '.' + part3 + '.' + part4)
                }
            }
        }
    }
    return ip_valido
};
// console.log(restoreIpAddresses("25525511135"))
//Product of Array Except Self

var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1)
    for(let i = 0;i < nums.length;i++){
        answer[i] = nums.filter(n => n != nums[i]).reduce((a,b)=> a* b)
    }
    return answer
};
// console.log(productExceptSelf([1,2,3,4]))

// Best Time to Buy and Sell Stock with Cooldown
var uniqueOccurrences = function(arr) {
    let uniques = new Set()
    let queue = new Set()
    for(let i in arr){
        if(!queue.has(arr[i])){
            let count = arr.filter(n => n == arr[i]).length
            if(uniques.has(count)){
                return false
            }
            uniques.add(count)
            queue.add(arr[i])
        }
    }
    return true
};
// console.log(uniqueOccurrences([1,2]))
function balancedStringSplit(s) {
    let count = 0
    let balance = 0
    for (let char of s) {
      balance += char === 'L' ? 1 : -1
      if (balance === 0) {
        count++
      }
    }
    return count
  }
//   console.log(balancedStringSplit("LLLLRRRR")) 
  