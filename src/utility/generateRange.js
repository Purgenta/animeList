export default function generateRange(low, high) {
  const range = [];
  for (let i = low; i <= high; i++) {
    range.push(i);
  }
  return range;
}
