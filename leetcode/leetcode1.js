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
entrada_twosum()

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
entrada_isValid();
