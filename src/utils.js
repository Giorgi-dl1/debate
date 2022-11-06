export function objSum(obj) {
  const keys = Object.keys(obj);
  let sum = 0;
  keys.forEach((key) => {
    sum += obj[key];
  });
  return sum;
}
export default function calculateTotal(rates) {
  let total = 0;
  rates.forEach((item) => {
    const keys = Object.keys(item.rate);
    let sum = 0;
    console.log(keys);
    keys.forEach((key) => {
      sum += item.rate[key];
    });
    total += sum;
  });
  return total;
}
