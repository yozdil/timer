const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key.name === "b") {
    process.stdout.write("🔔\n");
  } else if (key.name % 10 > 0) {
    console.log(`setting timer for ${str} seconds...`);
    setTimeout(() => {
      process.stdout.write("🔔\n");
    }, str * 1000);
  }
});
console.log("Press b for 🔔 or a number to set the timer...");