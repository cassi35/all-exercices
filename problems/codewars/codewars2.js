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
entrada_hunger_games()

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
entrada_not_belong()