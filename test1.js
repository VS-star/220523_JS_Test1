/*
    A.length > 0
    0 < K
    A.length >= K
    String(A[N]).length >= 1
    typeof A[N] === 'number' // true

    Input:
    A = [12, 345, 6, 789, 0, 123, 45678]  
    K = 3

    Expected output:
    +-----+-----+-----+
    |   12|  345|    6|
    +-----+-----+-----+
    |  789|    0|  123|
    +-----+-----+-----+
    |45678|
    +-----+
*/

function validate(A, K) {
  if (!(A.length && K) || A.length < K) return false;

  if (A.includes(undefined)) return false;

  if (!A.every(item => {
    return (typeof item === 'number');
  })) return false;

  return true;
};

function test1(A, K) {
  if (!validate(A, K)) return false;

  const arr = A.map(item => item.toString());
  const maxLength = Math.max(...(arr.map(item => item.length)));
  if (!(maxLength > 0)) return false;

  const lineTop = '+' + (('-').repeat(maxLength) + '+').repeat(K) + '\n';
  let count = 0;
  let lineBottom = '+';
  let lineMain = arr.map(item => {
    count = (++count) % K;
    let row = '|' + (' ').repeat(maxLength - item.length) + item;
    lineBottom += ('-').repeat(maxLength) + '+';
    if (count === 0) {
      row += '|\n' + lineBottom + '\n';
      lineBottom = '+';
    }
    return row;
  }).join('');
  if (count) lineMain += '|\n' + lineBottom + '\n';
  return lineTop + lineMain;
}

const arr = [12, 345, 6, 789, 0, 123, 45678123];
const colCount = 3;

const res = test1(arr, colCount);
console.log(res);
