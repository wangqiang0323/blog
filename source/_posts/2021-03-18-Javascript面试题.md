---
title: javascript面试题
top: false
cover: false
toc: true
mathjax: true
tags:
  - 面试
  - 基础
categories: Javascript
abbrlink: 3927
date: 2021-03-18 11:11:49
password:
summary: 面试题
---
# Javascript面试题

### 1. 闭包原理

### 2. http缓存

### 3. 防抖和节流

### 4. 安全策略（XSS, CROS等）

### 5. call、apply、bind区别

### 6. bind函数实现

### 7. 事件捕获、事件冒泡和事件委托

[参考](https://zhuanlan.zhihu.com/p/39567900)

W3C：element.addEventListener（"click/mouseover...",fn,boolean）第三个参数为true（捕获） 为false（冒泡）

### 8. get和post的区别

[参考](https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/)

- 参数

	Get方法参数拼接在url中，写在 ? 后面，用 & 分割。（当然也可以自己约定参数的写法）
	Post方法参数放在body中

- 安全性

	按照网上大部分文章的解释，POST 比 GET 安全，因为数据在地址栏上不可见。
	
	然而，从传输的角度来说，他们都是不安全的，因为 HTTP 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文。
	
	要想安全传输，就只有加密，也就是 HTTPS。

- 长度限制 
  
	在网上看到很多关于两者区别的文章都有这一条，提到浏览器地址栏输入的参数是有限的。
	
	首先说明一点，HTTP 协议没有 Body 和 URL 的长度限制，对 URL 限制的大多是浏览器和服务器的原因。
	
	浏览器原因就不说了，服务器是因为处理长 URL 要消耗比较多的资源，为了性能和安全（防止恶意构造长 URL 来攻击）考虑，会给 URL 长度加限制。

### 9. HTTP报文结构

[参考](https://www.jianshu.com/p/e29a327f9441)
   
一个HTTP请求报文由四个部分组成：请求行、请求头部、空行、请求数据。

### 10. 前端模块化

[参考](https://zhuanlan.zhihu.com/p/112068916)

### 11. promise
	
- 异步原理（三种状态，pending、fulfilled、rejected,同一时间只能存在一种状态,且状态一旦改变就不能再变。

  ```javascript
	new Promise((resolve, reject) => {
		reject(2)
		resolve(1)
	}).then((res) => {
		console.log(res)
	}).catch(res => {
		console.log(res)
	})
	
	// 打印结果：2  考察点 promise同一时间只能存在一种状态,且状态一旦改变就不能再变。
	```

- promise.all实现思路


[参考指南](https://github.com/mqyqingfeng/Blog)

