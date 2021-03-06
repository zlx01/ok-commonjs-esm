var a = require("./a");
console.log("入口模块引用a模块：", a);

// b模块引用a模块 { a: '原始值-a模块内变量' }
// a模块引用b模块： { b: '修改值-b模块内变量' }
// 入口模块引用a模块： { a: '修改值-a模块内变量' }

// 执行过程：
// 【入口模块】开始执行，把入口模块加入缓存，
// var a = require('./a') 执行 将a模块加入缓存，进入a模块，
// 【a模块】exports.a = '原始值-a模块内变量'执行，a模块的缓存中给变量a初始化，为原始值，
// 执行var b = require('./b')，将b模块加入缓存，进入b模块
// 【b模块】exports.b ='原始值-b模块内变量'，b模块的缓存中给变量b初始化，为原始值，
// var a = require('./a')，尝试导入a模块，发现已有a模块的缓存，所以不会进入执行，而是直接取a模块的缓存，此时打印{ a: '原始值-a模块内变量' },
// exports.b = '修改值-b模块内变量 执行，将b模块的缓存中变量b替换成修改值，
// 【a模块】console.log('a模块引用b模块：',b) 执行，取缓存中的值，打印{ b: '修改值-b模块内变量' }
// exports.a = '修改值-a模块内变量' 执行，将a模块缓存中的变量a替换成修改值，
// 【入口模块】console.log('入口模块引用a模块：',a) 执行，取缓存中的值，打印{ a: '修改值-a模块内变量' }
