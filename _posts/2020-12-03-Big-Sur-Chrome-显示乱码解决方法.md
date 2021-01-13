---
title: Big Sur Chrome 显示乱码解决方法
origin: true
date: 2020-12-03
---

## 故障描述

英文显示乱码，中文正常。升级至最新版本Chrome及Mac OS无法修复异常

![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/jpeg/XYOI3j1606967193785.jpg)



刚刚研究了一下，现在已经找到问题并修复。

![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/jpeg/W2SOcj1606967101632.jpg)

目前推断是因为系统升级（具体原因不详），系统对Roboto字体文件识别不正确导致的。

## 解决方案（分析过程附后）

在如下页面下载Roboto字体

[http://www.fonts.net.cn/font-18685322206.html](http://www.fonts.net.cn/font-18685322206.html)

> 百度网盘链接： https://pan.baidu.com/s/1mSLxqKaZRvI0MWQ-CD_AOg 
>
> 提取码: b8f2



下载Roboto.zip后得到如下若干个字体文件

![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/jpeg/kD20Eo1606967101621.jpg)

全选右键打开安装字体，点击「安装字体」

![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/jpeg/WlemEQ1606967101626.jpg)

彻底关闭Chrome，重新打开，字体应该已经恢复了。（我在操作时没有重启，如果不行的话可以重启试一下）

## 分析过程（CSS）

打开其他网页时没有问题，只有浏览器系统页面（偏好设置、下载）存在此现象，中文显示正常。

综上可以排除浏览器编码的问题（一般编码会导致中文乱码英文正常，这里是英文异常）

![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/jpeg/MpXSSJ1606967101621.jpg)

编码没毛病。

那就只有可能是字体的问题了。

打开系统偏好控制台，查询页面CSS中font相关属性

![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/jpeg/xTrVuH1606967101646.jpg)

```
body{
    font-family: Roboto, system-ui,PingFang SC,STHeiti,sans-serif;
    font-size: 81.25%;
}
```

删除Roboto属性值后界面恢复正常。

