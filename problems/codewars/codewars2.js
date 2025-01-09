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
  console.log(calculateScoreboard([true, false])); 

console.log(calculateScoreboard([true, false, true, false, true, false, true, false, true, false, false, false, false, false])); 
