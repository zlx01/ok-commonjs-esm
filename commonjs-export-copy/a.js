const { count, add, get } = require("./count.js");
console.log(count); // 1
add();
console.log(count); // 1
// 只有用方法才能获取最新值！！！
console.log(get()); // 2
