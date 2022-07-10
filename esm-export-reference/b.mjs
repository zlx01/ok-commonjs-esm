import { count } from "./count.mjs";

setTimeout(() => {
  console.log("count in b:", count); // count in b: 2
}, 2000);
