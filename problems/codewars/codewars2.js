console.clear()

function special_primes(number) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function containsZero(numStr) {
        return numStr.includes('0');
    }

    function hasRepeatingDigits(numStr) {
        let digits = new Set();
        for (let char of numStr) {
            if (digits.has(char)) return true;
            digits.add(char);
        }
        return false;
    }

    function isSumMultipleOfPerfectSquare(numStr) {
        const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81];
        let digitSum = numStr.split('').reduce((sum, digit) => sum + Number(digit), 0);
        return perfectSquares.some(square => digitSum % square === 0);
    }

    function isProductEqualTo45(numStr) {
        let firstDigit = Number(numStr[0]);
        let lastDigit = Number(numStr[numStr.length - 1]);
        return firstDigit * lastDigit === 45;
    }

    function isIncreasing(numStr) {
        for (let i = 0; i < numStr.length - 1; i++) {
            if (numStr[i] >= numStr[i + 1]) return false;
        }
        return true;
    }
    function isDecreasing(numStr) {
        for (let i = 0; i < numStr.length - 1; i++) {
            if (numStr[i] <= numStr[i + 1]) return false;
        }
        return true;
    }

    if (number < 100 || number > 50000) {
        return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }

    let primes = [];

    for (let i = 100; i <= number; i++) {
        let numStr = String(i);
        if (
            isPrime(i) &&
            !containsZero(numStr) &&
            !hasRepeatingDigits(numStr) &&
            isSumMultipleOfPerfectSquare(numStr) &&
            !isProductEqualTo45(numStr)
        ) {
            primes.push(i);
        }
    }

    let bouncy = [];
    let increasing = [];
    let decreasing = [];

    for (let prime of primes) {
        let numStr = String(prime);
        if (isIncreasing(numStr)) {
            increasing.push(prime);
        } else if (isDecreasing(numStr)) {
            decreasing.push(prime);
        } else {
            bouncy.push(prime);
        }
    }
    function generateOutput(arr) {
        if (arr.length === 0) return [0, 0, 0];
        return [Math.min(...arr), Math.max(...arr), arr.length];
    }

    return [
        generateOutput(bouncy),
        generateOutput(increasing),
        generateOutput(decreasing),
    ];
}

// console.log(special_primes(457));

//magic music box
function magicMusicBox(words) {
    const notes = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"]
    const storedWords = []
    let noteIndex = 0

    while (true) {
        let addedWord = false;

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word.includes(notes[noteIndex]) && !storedWords.includes(word)) {
                storedWords.push(word);
                addedWord = true;
                noteIndex = (noteIndex + 1) % notes.length 
                break;
            }
        }

        if (!addedWord) {
            break;
        }
    }

    return storedWords
}

const inputWords = ["DOWN", "PLANE", "AMIDST", "REPTILE", "SOFA", "SOLAR", "SILENCE", "DOWN", "MARKDOWN"]
const result = magicMusicBox(inputWords)
// console.log(result); 
// Wimbledon Scoreboard - Game
function calculateScoreboard(balls) {
    // Variáveis de estado
    let p1Games = 0, p2Games = 0;
    let p1Points = 0, p2Points = 0;
    let server = 1; 
    let fault = false; 
    const points = [0, 15, 30, 40];
    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      if (server === 1) {
        if (!ball) {
          if (fault) {
            p2Points = updatePoints(p2Points, p1Points, () => p2Games++);
            fault = false; 
          } else {
            fault = true; 
          }
        } else {
          fault = false;
          p1Points = updatePoints(p1Points, p2Points, () => p1Games++);
        }
      } else {
        if (!ball) {
          if (fault) {
            p1Points = updatePoints(p1Points, p2Points, () => p1Games++);
            fault = false;
          } else {
            fault = true; 
          }
        } else {
          fault = false;
          p2Points = updatePoints(p2Points, p1Points, () => p2Games++);
        }
      }
    }
  
    return [
      `${p1Games} games, ${formatPoints(p1Points)}`,
      `${p2Games} games, ${formatPoints(p2Points)}`
    ];
  }
  function updatePoints(playerPoints, opponentPoints, winGameCallback) {
    if (playerPoints === 40 && opponentPoints !== 40) {
      winGameCallback();
      return 0;
    } else if (playerPoints === 40 && opponentPoints === 40) {
      // Vantagem
      return "AD";
    } else if (playerPoints === "AD") {
      winGameCallback();
      return 0;
    } else if (opponentPoints === "AD") {
      return 40;
    } else {
      return playerPoints === 30 ? 40 : playerPoints + 15;
    }
  }
  function formatPoints(points) {
    if (points === 0) return "0";
    if (points === 15) return "15";
    if (points === 30) return "30";
    if (points === 40) return "40";
    return points; 
  }
  // console.log(calculateScoreboard([true, false])); 

// console.log(calculateScoreboard([true, false, true, false, true, false, true, false, true, false, false, false, false, false])); 



//Number Shortening Filter
function shorten_number(arr,num){
  return (number)=>{
    if(typeof number == 'object' || isNaN(number)){
      return typeof number == 'object'? String(`[${number}]`):number
    }else if(String(number).length < 4){
      return String(number)
    }else{

      let n = Number(number)
      let short = Math.floor(n / num)
      while(true){
          let temp_short = Math.floor(short / num)
          if(temp_short == 0){
            let length = String(n).length 
            let index 
            if(length >=4 && length <= 6){
              index = arr.findIndex((value)=>value == 'k')
            }else{
              index = arr.findIndex((value)=>value == 'm')
            }
            return String(short).concat(arr[Number(index)])
          }else{
            short = Math.floor(short / num)
          }
      }

    }

  }
}
function entrada_shorteing_num(){
  let filter1 = shorten_number(['','k','m'],1000)
  console.log(filter1('2100'))
}
// entrada_shorteing_num()
// Number Format
function number_format(num){
 if(String(num).length < 6){
  return null 
 }else {
    let arr_num = num.split('')
    let output = ''
    while(arr_num.length >=3){
      let res = ''
      res = res.concat(arr_num.pop())
      res = res.concat(arr_num.pop())
      res  = res.concat(arr_num.pop())
      output = ','+res.split('').reverse().join('') + output 
    }
   arr_num =  arr_num.join('') 
   if(arr_num.length >= 1 || arr_num == '-'){
    return arr_num == '-' ?arr_num+output.slice(1):arr_num+output
   }else{
    return output.slice(1)
   }
 }
}
function entrada_num_format(){
  let format = number_format('-12678545')
  console.log(format)
}
// entrada_num_format()

function findDuplicate(prhase){
  prhase = prhase.split('.')
  prhase = prhase.map((arr)=> arr.split(' ')).flat()
  let used = []
  while(prhase.length != 0){
    let remove = prhase.shift()
    if(prhase.includes(remove) && !used.includes(remove) && remove != ''){
      used.push(remove)
    }
  }
  return used
}
function entrada_findDuplicate(){
  let msg = 'this is a test with. test is this.'
  let find = findDuplicate(msg)
  console.log(find)
}
// entrada_findDuplicate()




//The latest clock

function latest_clock(digits){
  digits = digits.split(',').map(num => Number(num))
  let valid 
  function permute(start,permutations){
    if(start.length === 0){
      let arr = permutations.flat()
      let hour = Number(arr.slice(0,2).join(''))
      let minute = Number(arr.slice(2).join(''))
      if(hour < 23  && hour > 18 && minute  <= 59){
        valid = [hour,minute]
      }
      console.log(hour,minute)
    }else{
      for(let i = 0;i < start.length;i++){
        let dupe = [...start]
        let removed = dupe.splice(i,1)
        permutations.push(removed)
        permute(dupe,permutations)
        permutations.pop()
      }
    }
  }

   permute(digits,[])
   return valid
}
function entrada_latest_clock(){
  let digits = '1,9,8,3'
  let clock = latest_clock(digits)
  console.log(clock)
}
// entrada_latest_clock()
function permute_real(start,permutations){
  if(start.length == 0){
    console.log(permutations.flat())
  }else{
    for(let i = 0;i < start.length;i++){
      let dope = [...start]
      let removed = dope.splice(i,1)
      permutations.push(removed)
      permute_real(dope,permutations)
      permutations.pop()

    }
  }
}
// permute_real(['a','b','c','d'],[])
// Pattern Generator
//QR-Code Message Encoding
function qr_code_mensage(msg){
  if(msg == undefined ){
    return -1
  }
  let gruous = []
  let arr 
  if(typeof msg == 'number' || typeof msg == 'bigint'){
    arr = String(msg).split('').map(n => Number(n)).filter((n)=> n != 0)
    while(arr.length != 0){
      if(arr.length >= 3){
        let count = 0
        let  gruoup = []
        while(count < 3){
          gruoup.push(arr.shift())
          count++
        }
        gruous.push(Number(gruoup.join('')))
      }else{
        let gruoup = []
        while(arr.length != 0){
          gruoup.push(arr.shift())
        }
        gruous.push(Number(gruoup.join('')))
      }
    }
    return gruous[0]
  }else if(typeof msg == 'string'){
    arr =  msg.split(' ').map(str => str.split(''))
    for(let i in arr){
      while(arr[i].length != 0){
        if(arr[i].length >= 2){
          let count = 0
          let  gruoup = []
          while(count < 2){
            gruoup.push(arr[i].shift())
            count++
          }
          gruous.push(gruoup)
        }else{
          let gruoup = []
          while(arr[i].length != 0){
            gruoup.push(arr[i].shift())
          }
          gruous.push(gruoup)
        }
      }
    }
   let binary = ''
   for(let i in gruous){
    let char = gruous[i].map((c)=>c.charCodeAt(0)).toString(2).padStart(8,'0')
    binary = binary.concat(' ').concat(char)
   }
   return binary

  }else{
    return -1
  }
}
function entrada_qr_code(){
  let msg = 'hello world'
  let msg2 = 219201
  let encoding = qr_code_mensage(msg)
  console.log(encoding)
}
// entrada_qr_code()
//The Hunger Games - Foxes and Chickens
function hunger_games(arr){
  let valid = (arr_t)=>{
    return true 
  }
  if(valid(arr)){
    for(let i in arr){
      if(typeof arr[i] == 'string'){
        let new_str = arr[i].split('').map((n)=>{
          if(n == 'f'){
            return n 
          }else{
            return '.'
          }
        })
        arr[i] = new_str.join('')
      }else if(typeof arr[i] == 'object' && arr[i][0].includes('f')){
        let new_str = arr[i][0].split('').map(n =>{
          if(n == 'f'){
            return n 
          }else{
            return '.'
          }
        })
        arr[i] = new_str
  
      }
    }
    return arr
  }else{
    return null
  }

}
function entrada_hunger_games(){
  let hunger = ['ccc',['ccc'],'fcc',['ccfcc'],'cffff','ffff',['ccc'],'fff']
  let game = hunger_games(hunger)
  console.log(game)
}
// entrada_hunger_games()

//What doesn't belong to these?
function not_belong(arr){
  if(arr.some(element => element == undefined || element == 0) || arr.length < 2){
    return null 
  }else{
    let par = 0
    let impar = 0
    for(let i in arr){
      if(arr[i] % 2 == 0){
        par++
      }else{
        impar++
      }
    }
    if(par > impar){
      for(let i in arr){
        if(arr[i] % 2 != 0 && arr.filter(element => element == arr[i]).length == 1){
          return arr[i]
        }
      }
      return -1
    }else{
      for(let i in arr){
        if(arr[i] % 2 == 0 && arr.filter(element => element == arr[i].length) == 1){
          return arr[i]
        }
      }
      return -1
    }
  }
}
function entrada_not_belong(){
  let arr = [2,4,3,8]
  console.log(not_belong(arr))
}
// entrada_not_belong()

//Collatz sequence 
function collatz(n){
 try{
  if(n == undefined){
    return null
  }
  let numbers = [n]
  while(n > 1){
    if(n % 2 == 0){
      n = n / 2
      numbers.push(n)
    }else if(n % 2 != 0){
      n = (n * 3) + 1
      numbers.push(n)
    }
  }
  return numbers
 }catch(err){
  console.log(err)
 } 
}
function entrada_collatz(){
  let sequence = collatz(3)
  console.log(sequence)
} 
// entrada_collatz()
//Next smaller number with the same digits

function next_smaller(number,verified){
  try{
    if(verified(number)){
      return -1
    }else{
      let arr_num = String(number).split('').map(n => Number(n))
      if(arr_num.length == 2){
        return Number(arr_num.reverse().join(''))
      }else{
        let ultimo = arr_num.pop()
        let penultimo = arr_num.pop()
        arr_num.push(ultimo)
        arr_num.push(penultimo)
        return arr_num
      }
    }
  }catch(err){
    if(verified == undefined){
      console.log('you forgot to add a callback add one')
     return console.log(`
        (n)=>{
    let arr_num = String(n).split('').map(n => Number(n))
    if(arr_num.length == 1){
      return true
    }else if(arr_num.filter(num => num == arr_num[0]).length == arr_num.length ){
      return true
    }else{
      let menor = true 
      for(let i = 1;i < arr_num.length;i++){
        if(arr_num[i] > arr_num[i-1]){
          menor = false
        }
      }
      if(menor){
        return true
      }else{
        return false
      }
    }
  }
        `)
    }
  }
 
}
function entrada_next_smaller(){
  let next = next_smaller(531,(n)=>{
    let arr_num = String(n).split('').map(n => Number(n))
    if(arr_num.length == 1){
      return true
    }else if(arr_num.filter(num => num == arr_num[0]).length == arr_num.length ){
      return true
    }else{
      let menor = true 
      for(let i = 1;i < arr_num.length;i++){
        if(arr_num[i] > arr_num[i-1]){
          menor = false
        }
      }
      if(menor){
        return true
      }else{
        return false
      }
    }
  })
  console.log(next)
}
// entrada_next_smaller() //errado 



//How many numbers III?
function find_all(sum, count) {
  let results = []

  function generate(current, start, remainingSum, remainingCount) {
      if (remainingCount === 0) {
          if (remainingSum === 0) {
              results.push(parseInt(current.join('')))
          }
          return
      }

      for (let digit = start; digit <= 9; digit++) {
          if (digit > remainingSum) break 
          generate([...current, digit], digit, remainingSum - digit, remainingCount - 1)
      }
  }

  generate([], 1, sum, count)

  if (results.length === 0) {
      return []
  } else {
      return [results.length, results[0], results[results.length - 1]]
  }
}

// console.log(find_all(10, 3))


//Beeramid 5kyu
function beeramid(bonus,custo){
let nivel = 1
while(bonus > nivel * nivel * custo){
  bonus -=nivel * nivel * custo
  nivel++
  }
  return nivel -1
}
function entrada_beeramid(){
  let bonus = 1500
  let custo = 2
  console.log(beeramid(bonus,custo))
}
// entrada_beeramid()


//Pete, the baker 5kyu
function cakes(recipe, available) {
  let quantidade_bolo = Infinity
  for (let ingrediente in recipe) {
    if (!available[ingrediente]) {
      return 0;
    }
    let bolosPossiveis = Math.floor(available[ingrediente] / recipe[ingrediente])
    quantidade_bolo = Math.min(quantidade_bolo, bolosPossiveis)
  }
  return quantidade_bolo
}
function entrada_cakes() {
  console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))
}

// entrada_cakes()


function generatePossibilities(str) {
  let results = []
  function backtrack(current, index) {
    if (index === str.length) {
      results.push(current)
      return
    }
    if (str[index] === '?') {
      backtrack(current + '0', index + 1)
      backtrack(current + '1', index + 1)
    } else {
      backtrack(current + str[index], index + 1)
    }
  }
  backtrack('', 0)
  return results
}
// console.log(generatePossibilities('101?'))  
// console.log(generatePossibilities('1?1?'))



//Numberpad cipher
function Encrypt(digits) {
  const teclado = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
  ];

  const movimentos = {
    '-1,0': '8', 
    '1,0': '2', 
    '0,-1': '4',
    '0,1': '6',  
    '-1,-1': '7',
    '-1,1': '9', 
    '1,-1': '1', 
    '1,1': '3',   
    '0,0': '5'   
  };
  const findPosition = (num) => {
    for (let i = 0; i < teclado.length; i++) {
      for (let j = 0; j < teclado[i].length; j++) {
        if (teclado[i][j] === num) return [i, j]
      }
    }
  };

  digits = '1' + digits
  let encrypted = ''

  for (let i = 0; i < digits.length - 1; i++) {
    const [x1, y1] = findPosition(digits[i])
    const [x2, y2] = findPosition(digits[i + 1])
    let dx = x2 - x1;
    let dy = y2 - y1;
    if (dx === -2) dx = 1;
    if (dx === 2) dx = -1;
    if (dy === -2) dy = 1;
    if (dy === 2) dy = -1;
    encrypted += movimentos[`${dx},${dy}`];
  }
  return encrypted;
}
function Decrypt(digits) {
  const teclado = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
  ];

  const direcoes = {
    '8': [-1, 0], 
    '2': [1, 0],   
    '4': [0, -1],  
    '6': [0, 1],   
    '7': [-1, -1],
    '9': [-1, 1], 
    '1': [1, -1],  
    '3': [1, 1],  
    '5': [0, 0]    
  };

  const findPosition = (num) => {
    for (let i = 0; i < teclado.length; i++) {
      for (let j = 0; j < teclado[i].length; j++) {
        if (teclado[i][j] === num) return [i, j]
      }
    }
  };

  let decrypted = '1'
  let [x, y] = findPosition('1')

  for (let d of digits) {
    const [dx, dy] = direcoes[d]
    x = (x + dx + 3) % 3
    y = (y + dy + 3) % 3
    decrypted += teclado[x][y]
  }
  return decrypted.slice(1)
}
function entrada_numberpad() {
  console.log("Encrypt:", Encrypt('2583'))
  console.log("Decrypt:", Decrypt('6889'))
}
// entrada_numberpad()




//Find four numbers

function find4Number(n) {
  for (let a = Math.floor(Math.sqrt(n)); a > 0; a--) {
    let restA = n - a * a
    for (let b = Math.min(a, Math.floor(Math.sqrt(restA))); b > 0; b--) {
      let restB = restA - b * b
      for (let c = Math.min(b, Math.floor(Math.sqrt(restB))); c > 0; c--) {
        let restC = restB - c * c
        let d = Math.floor(Math.sqrt(restC));
        if (d > 0 && d <= c && (a * a + b * b + c * c + d * d === n)) {
          return [a, b, c, d]
        }
      }
    }
  }
  return []
}
// console.log(find4Number(99))


//Josephus Permutation


function Josephus_Permutation(arr, k) {
  let sequence = []
  let index = 0
  function permutation(array) {
    if (array.length === 0) return
    index = (index + k - 1) % array.length
    sequence.push(array[index])
    array.splice(index, 1)
    permutation(array);
  }
  permutation(arr);
  return sequence;
}

function entrada_Josephus_Permutation() {
  let arr = [1, 2, 3, 4, 5, 6, 7]
  let k = 3
  console.log(Josephus_Permutation(arr, k))
}

// entrada_Josephus_Permutation()
// What's a Perfect Power anyway?
function unionJack(size) {
  if (typeof size !== "number" || isNaN(size)) return false;
  size = Math.max(7, Math.ceil(size))
  let flag = Array.from({ length: size }, () => Array(size).fill('-'))
  let mid = Math.floor(size / 2)
  for (let i = 0; i < size; i++) {
      flag[i][i] = 'X'
      flag[i][size - 1 - i] = 'X'
      flag[i][mid] = 'X'
      flag[mid][i] = 'X'
      if ( size % 2 === 0) {
          flag[i][mid - 1] = 'X'
          flag[mid - 1][i] = 'X'
      }
      console.log(flag.map((row)=>row.join()))
  }


  return flag.map(row => row.join('')).join('\n')
}
// console.log(unionJack(10))
//Sum of many ints
function f(n,m){
  if(n == 0){
    return 0
  }else{
    let add = n % m
    return add + f(n-1,m)
  }
}
// console.log(f(10,5))
//String average
function average(str_initial){
  try{
    let tranlate = new Map()
    let str_nums = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i in str_nums){
      tranlate.set(str_nums[i],Number(i))
    }
    if(typeof str_initial != 'string'){
      return false
    }
    let nums = str_initial.split(' ')
    for(let num of nums){
      if(!str_nums.includes(num)){
        return false
      }
    }
    let length = nums.length
    function sum_nums(numbers){
      if(numbers.length == 0){
        return 0
      }else{
        let remove = numbers.pop()
        let add = tranlate.get(remove)
        return add + sum_nums(numbers)
      }
    }
    return Math.floor( sum_nums(nums) /length)
  }catch(err){
    console.log(err)
  }
}


// console.log(average('zero nine five two'))

//Is Integer Array?
function is_int_array(arr){
  for(let num of arr){
    if(Math.floor(num) < num){
      return false
    }
  }
  return true 
}
// console.log(is_int_array([1,2,3,4,5,2]))
//Count the number of Duplicates
function count_duplicates(str){
  let count = 0
  str = str.toLowerCase()
  str = str.split('')
  while(str.length != 0)  {
    let remove = str.pop()
    if(str.includes(remove)){
      str = str.filter((s)=>s != remove)
      count++
    }
  }
  return count
}
// console.log(count_duplicates('abcab11122c'))
function maximum_subarray(array){
  let inicial_max = 0
  let sequence = []
  for(let i = 0;i < array.length;i++){
    let stack = array.slice(i,array.length)
    while(stack.length != 0){
      let soma = stack.reduce((a,b)=>a+b)
      if(soma > inicial_max){
        inicial_max = soma
        sequence = stack
      }
      stack = stack.slice(0,stack.length-1)
    }
  }
  return sequence
}
let entrada_max_sum = () =>{
  let sequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  console.log(maximum_subarray(sequence))
}
// entrada_max_sum()

//What doesn't belong to these?

function findOutlierElement(arr) {
  const countMap = arr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1
      return acc
  }, {})
  return arr.find(el => countMap[el] === 1)
}
console.log(findOutlierElement([1, 2, 2, 2, 2]))















