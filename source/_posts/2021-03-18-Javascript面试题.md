---
title: javascript知识点
top: false
cover: false
toc: true
mathjax: true
tags:
  - 知识点
  - 基础
categories: Javascript
abbrlink: 3927
date: 2021-03-18 11:11:49
password:
summary: 知识点
---
# Javascript知识点

### 1. 闭包原理

### 2. http缓存

[强制缓存和协商缓存](https://wangqiang0323.github.io/blog/2021/031756648.html)

### 3. 防抖和节流

### 4. 安全策略（XSS, CROS等）

### 5. call、apply、bind区别

### 6. bind函数实现

### 7. 事件捕获、事件冒泡和事件委托

`element.addEventListener（"click/mouseover...",fn,boolean）`第三个参数为true（捕获） 为false（冒泡）

[事件捕获、事件冒泡和事件委托](https://zhuanlan.zhihu.com/p/39567900)


### 8. get和post的区别



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

[get和post的区别](https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/)

### 9. HTTP报文结构

一个HTTP请求报文由四个部分组成：请求行、请求头部、空行、请求数据。

[HTTP报文结构](https://www.jianshu.com/p/e29a327f9441)
   

### 10. 前端模块化

[前端模块化](https://zhuanlan.zhihu.com/p/112068916)

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

### 12. 深拷贝和浅拷贝

- 深拷贝

	方法一

	```javascript
	const newObj = JSON.parse(JSON.stringify(oldObj));
	```

	**缺点：**
	- 如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；
	- 如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；
	- 如果obj里有function，Symbol 类型，undefined，则序列化的结果会把函数或 undefined丢失；
	- 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
	- JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor

	方法二

	```javascript
	function deepClone(obj) {
    let newObj = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
            }
        }
    } 
    return newObj
	}
	const newObj = deepClone(oldObj));
	```
 
	方法三

  调用postMessage结构化克隆算法就可以使用。我们可以创建一个 MessageChannel 并发送消息。在接收端，消息包含我们原始数据对象的结构化克隆。

	```javascript
	function structuralClone(obj) {
	  return new Promise(resolve => {
	    const {port1, port2} = new MessageChannel();
	    port2.onmessage = ev => resolve(ev.data);
	    port1.postMessage(obj);
	  });
	}
	
	const obj = /* ... */;
	const clone = await structuralClone(obj);
	```
	
	这种方法的缺点是它是异步的。虽然这并无大碍，但是有时候你需要使用同步的方式来深度拷贝一个对象。
 
- 浅拷贝
	
	```javascript
	const newObj = Object.assign([],oldObj);
	```
 
	另外数组浅拷贝还可使用Array.concat()和slice(0)。或者使用ES6扩展运算符`{...oldObj}`

[参考指南](https://github.com/mqyqingfeng/Blog)

### 13 箭头函数和function的区别

- 作用域 this指向问题
- 箭头函数没有arguments

### 14 html之间通信

`postMessage` 和 `onMessage`

