# CommonJS vs ESM

reference: [blog](https://mp.weixin.qq.com/s/dklhkoF2qdkDYCojJAEcRw)

## 循环引入

* CommonJS借助模块缓存，遇到require函数会先检查是否有缓存，已经有的则不会进入执行，在模块缓存中还记录着导出的变量的拷贝值；
* ES Module借助模块地图，已经进入过的模块标注为获取中，遇到import语句会去检查这个地图，已经标注为获取中的则不会进入，地图中的每一个节点是一个模块记录，上面有导出变量的内存地址，导入时会做一个连接——即指向同一块内存。


## 模块查找

* 对于核心模块，node将其已经编译成二进制代码，直接书写标识符fs、http就可以
* 对于自己写的文件模块，需要用‘./’'../'开头，require会将这种相对路径转化为真实路径，找到模块
* 对于第三方模块，也就是使用npm下载的包，就会用到当前模块的paths这个变量，会依次查找当前路径下的node_modules文件夹，如果没有，则在父级目录查找node_modules，一直到根目录下，找到为止。在node_modules下找到对应包后，会以package.json文件下的main字段为准，找到包的入口，如果没有main字段，则查找index.js/index.json/index.node