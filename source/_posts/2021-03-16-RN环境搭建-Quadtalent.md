---
title: RN环境搭建-Quadtalent
top: false
cover: false
toc: true
mathjax: true
date: 2021-03-16 16:35:36
password:
summary:
tags: RN
categories: javascript
---
# 泰国智慧社区

### 运行

1. 安装依赖 `yarn`
2. 如果是 ios，需 link 底层包`yarn run pod_install`，安卓无需操作
3. 启动项目 `yarn run start`

## 更新依赖
1. yarn
2. yarn run pod_install

### 环境搭建场景问题：

1. mac 下解决 EMFILE: too many open files, watch。。。

- brew install watchman

2. mac 下，yarn run pod_install 安装问题。。

- 从其他同事电脑拷贝 ~/Library/Caches/CocoaPods 到本地（特别注意，需要使用本机的 version 文件替换其他同事下 Pods 下的 version 文件）
- 拷贝完成后，再运行一次yarn run pod_install

3. mac 下，12.3 版本的 xcode 下，安装 pod，出现 ：Build issue with Xcode 12.3 - file not found #include "ruby/config.h"

- https://github.com/CocoaPods/CocoaPods/issues/10286
  cd $(xcode-select -p)/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0 && ln -s universal-darwin20 universal-darwin19

4. mac 下，找不到 ios/bundle 目录

- 手动创建 ios/bundle 目录

### 调试

1. 需安装[reactotron](https://github.com/infinitered/reactotron/releases) ，根据自己的系统安装对应的应用即可
2. 打开安装好的 reactotron 应用，重启模拟器就 ok
3. 如果是安卓模拟器，需进入`Reactotron.ts`文件，将第 8 行 host 填自己本地 ip 即可(port 不用)
4. 在想调试的地方 console.react(...yourContent)即可在应用上看到

### 开发

- 模块目录结构

    1. Actions：定义 redux 的各个 key 以及对应的 dispatch action 方法
    2. Comps: 存放页面组件
    3. Navigations:该模块相关的路由定义
    4. Services: 改模块涉及的 api 服务
    5. Reducers:该模块的状态管理

- 适配：`designUtils`下已经做好了机型适配，暴露出了对应的函数供使用 `getRealPx`
- 公共组件：
    1. uiKit: 公共组件规范，需设计师给出，比如导航、弹框等，在`src/UiKit`目录下
    2. 公共组件：项目中可复用且非常公共的组件，位于`src/CommonComponents`目录下
    3. 项目主题：由设计师给出规范，各处组件使用该处定义的主题进行样式配置`src/UiKit/Theme`
       包含的组件：参考[公共组件使用文档](./commonComponent.md)
- 资源文件：
    1. 资源文件位于`src/Assets`目录下
    2. 不同的资源文件建立不同的目录
    3. 特别：svg 文件，放在 svg 目录下之后，要运行`yarn run getSvg`
- 网络请求
    1. 在`src/utils/HttpUitl`封装好了发请求的各种方法

### 发包

需要确保安装了 `appcenter`: `yarn global add appcenter-cli`

1. android 出 apk `yarn run build_android_release`
2. ios 出 ipa 包
    1. 将 js 资源打包 `yarn run build_ios_release`
    2. 在 xcode 上 archive project `build-> archives`，注意 buildType 必须是 release,team 是公司/企业开发者账号
3. android/ios 发测试环境热更新 `yarn run qa-hot-update-android` `yarn run qa-hot-update-ios`
    - 注意：热更新会发到 codepush 服务器上，这里的脚本是固定强制更新的，如果有定制化需求，参考[官方文档](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli)

### 其他

1. 包名修改：android & ios & app.json 中的包名需要保持一致，如果修改 app.json 中的包名，需要对应在 `ios/xxx/appDelegate.m` 和 `android/app/src/main/Java/com/xxx/MainActivity.java` 入口文件中将包名同步，否则启动会报错。
