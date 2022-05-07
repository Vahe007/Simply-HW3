const input = [5, 98, 6, 7, 97, 98, 78, 2, 5, 74, 92, 2, 62, 1];

const sort = (input) => {
  if (!Array.isArray(input)) {
    throw new Error("The argument should be array");
  }
  const res = [];
  let min = Math.min(...input);
  const max = Math.max(...input);

  res.push(min);
  for (let j = 0; j < max; j++) {
    if (input.includes(++min)){
      const elem = input.filter((item) => {
        return item === min;
      }) 
      res.push(...elem);
    }
  }
  return res;
};

console.log(sort(input));

