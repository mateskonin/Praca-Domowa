function minMax(arr) {
  arr = [...arr];
  arr.sort(function (a, b) {
    return a - b;
  });

  return [arr[0], arr[arr.length - 1]]; // fix me!
}

function sumDigPow(a, b) {
  let empty = [];
  for (a; a <= b; a++) {
    const arr = a.toString().split("");
    let index = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] ** ++index;
    }
    if (a == sum) {
      empty.push(sum);
    }
  }
  return empty;
}

function countSmileys(arr) {
  arr = [...arr];
  let counter = 0;
  let a, b, c, d, e, f, g, h;
  i, j, k, l;
  a = ":-)";
  b = ":-D";
  c = ":)";
  d = ":D";
  e = ";D";
  f = ";)";
  g = ":~)";
  h = ":~D";
  i = ";-)";
  j = ";-D";
  k = ";~)";
  l = ";~D";
  for (const face of arr) {
    if (
      face.includes(a || b || c || d || e || f || g || h || i || j || k || l)
    ) {
      counter++;
    }
  }
  return counter;
}

function solution(roman) {
  roman = [...roman];
  let I, V, X, L, C, D, M;
  I = 1;
  V = 5;
  X = 10;
  L = 50;
  C = 100;
  D = 500;
  M = 1000;
  return roman.toString();
}

function solution(roman) {
  roman = [...roman];
  let I, V, X, L, C, D, M;

  let sum = 0;
  for (let i = 0; i < roman.length; i++) {
    if ((roman[i] = "I")) {
      I = 1;
      sum += 1;
    }
    while (roman[i] == M) {
      M = 1000;
      sum += roman[i];
    }
    while (roman[i] == D) {
      M = 1000;
      sum += roman[i];
    }

    V = 5;
    X = 10;
    L = 50;
    C = 100;
    D = 500;
  }
  return sum;

  //return roman//.toString();
}
