// Define console.lol method
console.lol = function (...args) {
  console.info("\n" + args.join(" ") + "\nヅ ヅ ヅ\n"); };

// Save console.log functionality
const originalLog = console.log;

// Override console.log to call console.lol
console.log = function (...args) {
  console.lol(...args); };

// Testing...
originalLog("Why are programmers always so serious?");
console.log("Because they keep console.logging when they should be console.lolling!");
