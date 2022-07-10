const { count } = require("./count.js");
setTimeout(() => {
  console.log("count in b:", count); // count in b: 1
}, 2000);
