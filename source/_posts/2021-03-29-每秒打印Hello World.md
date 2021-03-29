---
title: 每隔一秒打印一次hello world
top: false
cover: false
toc: true
mathjax: true
abbrlink: 7415
date: 2021-03-28 16:19:02
password:
summary: 考察点主要在作用域
tags:
  - 基础 
categories: Javascript
---
# 实现每隔一秒打印一次hello world

###  ES6写法
```
let func = (arg0) => {
  for(let i = 0; i < 5; i++) {
    setTimeout(() => console.log(arg0), 1000 * i, arg0)
  }
}

func("hello world")
```
### ES5写法
```
function func(arg0) {
  for(var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(function() {
        console.log(arg0)
      }, 1000*i, arg0)
    })(i)
  }
}

func("hello world")
```
当setTimeout执行的时候，i 的值才能确定，这时循环模块已经运行完成，i 值为5。
使用立即执行函数，立即绑定，用每次的值绑定到事件上，而不是循环结束的值。

### 闭包
```
function test(timing){
  return function(arg0) {    // 闭包
    setTimeout(function() {  // 引用了外部变量timing，使timing一直存在内存中，直到setTimeout执行完毕。
      console.log(arg0)
    }, 1000 * timing, arg0) 
  }
}

function func(arg0) {
  for(var i = 0; i < 5; i++){
    test(i)(arg0)
  }
}

func("hello world")
```
这里使用到了闭包的概念，为每一个回调都创建一个新的词法环境。

容易犯错的地方：
- setTimeout方法第一个参数不能传参数
- i 值的变化