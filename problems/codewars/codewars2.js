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
