---
title: React Native搭建环境中遇到的问题
top: false
cover: false
toc: true
mathjax: true
updated:
  '[object Object]': null
tags:
  - 开发环境
  - 框架
  - App
categories: React Native
abbrlink: 51881
date: 2021-03-16 16:35:36
password:
summary: 开发环境搭建
---
# React Native搭建环境中遇到的问题

### 环境搭建场景问题：

1. mac 下解决 EMFILE: too many open files, watch。。。

- brew install watchman

2. mac 下，yarn run pod_install 安装问题。。

- 从其他同事电脑拷贝 ~/Library/Caches/CocoaPods 到本地（特别注意，需要使用本机的 version 文件替换其他同事下 Pods 下的 version 文件）
- 拷贝完成后，再运行一次yarn run pod_install

3. mac 下，12.3 版本的 xcode 下，安装 pod，出现 ：Build issue with Xcode 12.3 - file not found #include "ruby/config.h"

- https://github.com/CocoaPods/CocoaPods/issues/10286
  cd $(xcode-select -p)/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/
  Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0 && ln -s universal-darwin20 universal-darwin19

4. mac 下，找不到 ios/bundle 目录

- 手动创建 ios/bundle 目录

### 调试

1. 需安装[reactotron](https://github.com/infinitered/reactotron/releases) ，根据自己的系统安装对应的应用即可
2. 打开安装好的 reactotron 应用，重启模拟器就 ok
3. 如果是安卓模拟器，需进入`Reactotron.ts`文件，将第 8 行 host 填自己本地 ip 即可(port 不用)
4. 在想调试的地方 console.react(...yourContent)即可在应用上看到

