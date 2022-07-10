import * as a from "./a.mjs";
console.log("入口模块引用a模块：", a);

// b模块引用a模块： [Module: null prototype] { a: <uninitialized> }
// a模块引用b模块： [Module: null prototype] { b: '修改值-b模块内变量' }
// 入口模块引用a模块： [Module: null prototype] { a: '修改值-a模块内变量' }

// 【入口模块】首先进入入口模块，在模块地图中把入口模块的模块记录标记为“获取中”（Fetching），表示已经进入，但没执行完毕，
// import * as a from './a.mjs' 执行，进入a模块，此时模块地图中a的模块记录标记为“获取中”
// 【a模块】import * as b from './b.mjs' 执行，进入b模块，此时模块地图中b的模块记录标记为“获取中”，
// 【b模块】import * as a from './a.mjs' 执行，检查模块地图，模块a已经是Fetching态，不再进去，
// let b = '原始值-b模块内变量' 模块记录中，存储b的内存块初始化，
// console.log('b模块引用a模块：', a) 根据模块记录到指向的内存中取值，是{ a:}
// b = '修改值-b模块内变量' 模块记录中，存储b的内存块值修改
// 【a模块】let a = '原始值-a模块内变量' 模块记录中，存储a的内存块初始化，
// console.log('a模块引用b模块：', b) 根据模块记录到指向的内存中取值，是{ b: '修改值-b模块内变量' }
// a = '修改值-a模块内变量' 模块记录中，存储a的内存块值修改
// 【入口模块】console.log('入口模块引用a模块：',a) 根据模块记录，到指向的内存中取值，是{ a: '修改值-a模块内变量' }
