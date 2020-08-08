const num = 266219;
let total = 1;

const array = num
  .toString()
  .split("")
  .map(function (item, index) {
    return parseInt(item);
  });
console.log(array);

for (let i = 0; i < array.length; ++i) {
  total *= array[i];
}

//console.log(total ** 3);

alert(String(total ** 3).substr(0, 2));
