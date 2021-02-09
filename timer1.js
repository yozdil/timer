let input = process.argv.splice(2).sort((a, b) => a - b);
if (input.length === 0) {
  return;
}

input.forEach((e) => {
  if (typeof parseInt(e) === "number" && e >= 0) {
    setTimeout(() => {
      process.stdout.write(".");
    }, e * 1000);
  }
});
