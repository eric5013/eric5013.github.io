---
title: JS报错“Uncaught SyntaxError: Cannot use import statement outside a module”解决办法
date: 2020-06-10
category: dev
author: Eric
tags:
 - Javascript
 - ES6
---

## 错误信息

![image-20200610122920760](https://cdn.jsdelivr.net/gh/eric5013/image@master/2020/06/10/hecUgW1591763361355hecUgW.png)

## 错误分析

HTML 网页中，浏览器通过 `script` 标签加载 `JavaScript` 脚本。由于浏览器脚本的默认语言是 `JavaScript`，`type="application/javascript"`可以省略。在报错中了解到，是说无法在模块外部使用`import`语句，因为`Module`的加载实现的是`ES6`语法，所以在浏览器加载html文件时，需要在`<script>`中加入`type="module”`属性即可。

## 一句话总结

HTML想用ES6，`<script>`加`type="module”`

