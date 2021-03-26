---
title: vue源码(keep-alive)
top: false
cover: false
toc: true
mathjax: true
tags:
  - 深入
  - 框架
  - 源码
categories: Vue
abbrlink: 10385
date: 2021-03-19 10:55:35
password:
summary: 源码解析
---
# Vue源码(keep-alive)

### 官方代码 (version: 2.6.12)
详见注释部分
```javascript
/* @flow */

import { isRegExp, remove } from 'shared/util'
import { getFirstComponentChild } from 'core/vdom/helpers/index'

type VNodeCache = { [key: string]: ?VNode };

function getComponentName (opts: ?VNodeComponentOptions): ?string {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern: string | RegExp | Array<string>, name: string): boolean {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance: any, filter: Function) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const cachedNode: ?VNode = cache[key]
    if (cachedNode) {
      const name: ?string = getComponentName(cachedNode.componentOptions)
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}

/**
 * 销毁缓存的实例
 * @param cache
 * @param key
 * @param keys
 * @param current
 */
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  // 判断是否已缓存并且不是当前实例
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  // 销毁缓存实例后，remove对于的key
  cache[key] = null
  remove(keys, key)
}

const patternTypes: Array<Function> = [String, RegExp, Array]

export default {
  name: 'keep-alive',
  abstract: true,
		
  // keep-alive的三个属性
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created () {
    // 创建存放缓存实例的cache以及存放响应的[]key
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed () {
    // 遍历销毁所有实例
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    // 判断cache中的实例，不在include数组中，则销毁
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    // 判断cache中的实例，在exclude数组中，则销毁
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render () {
    const slot = this.$slots.default
    // 获取第一个子组件
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
	    // 获取key值
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
	    // 如果已经有缓存
      if (cache[key]) {
        // 取出对于的缓存，并放在keys数组最后
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      } else {
        // 如果没有缓存，则缓存，
        cache[key] = vnode
        keys.push(key)
		      
        // 判断是否超过最大缓存组件数max，若超过，则销毁keys数组中的第一个实例
        // prune oldest entry 
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}

```

### 总结
1. `keep-alive` 有三个属性 `include` `exclude` `max`
2. `keep-alive` 是一个抽象组件，Vue 的文档没有提这个概念，实际上它在组件实例建立父子关系的时候会被忽略
1. `keep-alive` 只处理第一个子元素，所以一般和它搭配使用的有 component 动态组件或者是 `router-view`，这点要牢记
1. `keep-alive` 采用LRU缓存策略，即最近的缓存放在[]keys最后，当超过max时，从keys[0]删除。

另外，keep-alive不会执行`created`和`mounted`钩子，若想进行一些操作，可使用`actived`和`deactivated`


### 参考博客：

[Vue.js技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v2/extend/keep-alive.html#keep-alive)