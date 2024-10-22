//problems interviews
console.clear()
//array pair sum 
function pair(n,arr){
    let times = []
    for(var i = 0;i < arr.length;i++){
        for(var e = i + 1;e < arr.length ;e++){
            if(arr[i] + arr[e] == n){
                times.push([arr[i],arr[e]])
            }
        }
    }
    return times

}
let res = pair(8,[3,4,5,4,4])
//console.log(res)
//blanced brackets
// Use an object to map sets of brackets to their opposites
// On each input string, process it using the balance checker
function brackets (string) {
    var brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
      };
      
    var stack = [];
    // Process every character on input
    for (var i = 0; i < string.length; i++) {
      if (brackets[stack[stack.length - 1]] === string[i]) {
        stack.pop();
        console.log(stack)
      } else {
        stack.push(string[i]);
        console.log(stack)
      }
    }
  
    return !stack.length;
  };
/*  var b = brackets('()[]{}(([])){[()][]}')
 console.log(b) */