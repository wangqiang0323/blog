---
title: Vue源码（nextTick）
top: false
cover: false
toc: true
mathjax: true
tags:
  - 源码
categories: Vue
abbrlink: 6587
date: 2021-03-25 21:17:57
password:
summary: nextTick作用及原理
---

# Vue源码（nextTick）

### 源码

注意看注释

```javascript
/* @flow */
/* globals MutationObserver */

import { noop } from 'shared/util'
import { handleError } from './error'
import { isIE, isIOS, isNative } from './env'

export let isUsingMicroTask = false

const callbacks = []  // by wq 首先创建一个数组，用来存放回调数组
let pending = false

function flushCallbacks () {  // by wq 遍历执行callbacks数组方法
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

let timerFunc

// by wq promise > MutationObserver > setImmediate > setTimeout 兼容做法, 
// 实现timerFunc, 原理事件循环
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

/**
 * by wq 将回调函数放在callbacks 中
 * @param cb 函数
 * @param ctx 
 */
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

```

### 什么时候用到 $nextTick

当需要操作dom时，一般需要用到`$nextTick`。

为什么呢？

每次Vue数据状态发生变化，会异步更新dom节点（diff算法，异步更新原理），这都属于主线任务（可参考事件循环）。
此时操作dom，可能dom节点都还没有生成。放在`$nextTick`里面（即异步处理的方式），可保证在dom节点更新完毕之后执行。

### 总结

`$nextTick` 就是`promise`那套异步函数的原理。
