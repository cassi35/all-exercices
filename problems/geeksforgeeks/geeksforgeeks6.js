console.clear()
//Count Inversions
function inversionCount(arr) {
    function mergeAndCount(left, right) {
 let i = 0, j = 0, inversions = 0;
 const merged = [];
 
 while (i < left.length && j < right.length) {
     if (left[i] <= right[j]) {
         merged.push(left[i]);
         i++;
     } else {
         merged.push(right[j]);
         inversions += left.length - i; // Todos os elementos restantes em 'left' formam inversões
         j++;
     }
 }
 // Adiciona os elementos restantes
 while (i < left.length) merged.push(left[i++]);
 while (j < right.length) merged.push(right[j++]);
 
 return [merged, inversions];
}

function sortAndCount(arr) {
 if (arr.length <= 1) return [arr, 0];
 const mid = Math.floor(arr.length / 2);
 const [left, leftInversions] = sortAndCount(arr.slice(0, mid));
 const [right, rightInversions] = sortAndCount(arr.slice(mid));
 const [merged, mergeInversions] = mergeAndCount(left, right);
 return [merged, leftInversions + rightInversions + mergeInversions];
}

const [, inversions] = sortAndCount(arr);
return inversions;
}
