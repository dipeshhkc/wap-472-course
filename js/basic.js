function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  }
  return num3;
}

function isVowel(c) {
  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c == 'u') return true;
  return false;
}

function sum(arr) {
  return arr.reduce((a, e) => a + e, 0);
}

function multiply(arr) {
  return arr.reduce((a, e) => a * e, 1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function findLongestWord(arr) {
  let max = 0;
  arr.forEach((e) => {
    max = e.length > max ? e.length : max;
  });
  return max;
}

function filterLongWords(arr, i) {
  let result = [];
  arr.forEach((e) => {
    if (e.length > i) result.push(e);
  });
  return result;
}

function jsFiddleFn(a) {
  const b = a.map(function (elem, _, _) {
    return elem * 10;
  });
  console.log('multiply each element by 10;', b);
  const c = a.filter(function (elem, _, _) {
    return elem === 3;
  });
  console.log('return array with all elements equal to 3;', c);
  const d = a.reduce(function (prevValue, elem, _, _) {
    return prevValue * elem;
  });
  console.log('return the product of all elements', d);
}

//TEST CASES

console.log('Expected output of max(20,10) is 20');
console.log('Actual Output ', max(20, 10));

console.log('Expected output of maxOfThree(5,4,44) is 44');
console.log('Actual Output ', maxOfThree(5,4,44));

console.log('Expected output of maxOfThree(5,4,44) is 55');
console.log('Actual Output ', maxOfThree(55,4,44));

console.log('Expected output of isVowel("a") is true');
console.log('Actual Output ', isVowel("a") );

console.log('Expected output of isVowel("b") is false');
console.log('Actual Output ', isVowel("b") );

console.log('Expected output of sum([5,3,2]) is 10');
console.log('Actual Output ', sum([5,3,2]) );


console.log('Expected output of multiply([5,3,2]) is 30');
console.log('Actual Output ', multiply([5,3,2]) );

console.log('Expected output of reverse("cow") is woc');
console.log('Actual Output ', reverse("cow"));

console.log('Expected output of findLongestWord("apple","banana","cat") is 6');
console.log('Actual Output ', findLongestWord(["apple","banana","cat"]));

console.log('Expected output of filterLongWords(["apple","banana","cat"],4) is ["apple","banana"]');
console.log('Actual Output ', filterLongWords(["apple","banana","cat"],4));

