let a = "原始值-a模块内变量";
export { a };
// import语句有提升的效果
import * as b from "./b.mjs";
console.log("a模块引用b模块：", b);
a = "修改值-a模块内变量";
