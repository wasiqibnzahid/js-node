const arr = [1, 2, [2, 3], [4, 5, [5, [3, 4, 5]]]];

const ab = (arr) => {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      list.push(arr[i]);
    } else {
      list = [...list, ...ab(arr[i])];
    }
  }
  return list;
};
console.log(ab(arr));
