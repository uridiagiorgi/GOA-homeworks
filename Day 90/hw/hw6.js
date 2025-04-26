let output = "";
for (let i = 1; i <= 10; i = i + 1) {
  output = output + i;
  if (i < 10) {
    output = output +  ", ";
  }
}
console.log(output);