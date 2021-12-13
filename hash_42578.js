function solution(clothes) {
  //   console.log(`clothes: ${clothes}`);

  let count = clothes.reduce((a, c) => {
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
    return a;
  }, {});

  //   console.log(`count: ${JSON.stringify(count)}`);

  let val = Object.values(count);
  //   console.log(`val: ${val}`);

  let result = 1;
  val.map((v) => (result *= v + 1));

  result = result - 1;

  return result;
}

const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const result = solution(clothes);
console.log(`result : ${result}`);
