---
title: 'call、apply和bind'
top: false
cover: false
toc: true
mathjax: true
abbrlink: 53995
date: 2021-03-29 12:52:50
password:
summary: 用法和区别
tags:
 - 基础
categories: Javascript
---

# call、apply和bind

### call
**语法**
```javascript
func.call(thisArg, arg1, arg2, ...argN)
```
**参数**
- thisArg
  The value to use as this when calling func.
- arg1, arg2, ...argN
  Arguments for the function.

**返回**

The result of calling the function with the specified `this` value and arguments.

**描述（重点）**

call() provides a new value of `this` to the function/method. With call(), you can write a method once and then **inherit** it in another object, without having to rewrite the method for the new object.

### apply

与call相似，只是第二个参数不同。

> While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

### bind

**ployfill**

```javascript
//  Yes, it does work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.bind = function(otherThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          baseArgs.length = baseArgsLength; // reset to default base arguments
          baseArgs.push.apply(baseArgs, arguments);
          return fToBind.apply(
                 fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
          );
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
})();
```

### 区别