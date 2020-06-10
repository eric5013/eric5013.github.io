---
layout: post
title: "bundle install 出现错误解决方案"
subtitle: 'bundle install 出现 Could not fetch specs from https://rails-assets.org 错误'
author: "Eric"
header-style: text
tags:
  - bundle
  - Gem
---

# bundle install 出现 Could not fetch specs from https://rails-assets.org 错误
> 参考: https://www.cnblogs.com/java0619/p/5864207.html

**1. 查看当前使用的源地址**

**gem source**

**2.**

**删除默认的源地址。**

**   输入：gem sources -r https://rubygems.org/**

**注：默认的 url 地址后必须有”/”, 否则删不掉**

**3\. 添加淘 宝的源地址。**

**    输入：gem sources -a https://ruby.taobao.org**

**注：国内使用淘 的源比较稳定，且安装或更新网速都比较快**。

**4\. 更新源的缓存**

**     输入：gem sources -u**

**更新源的缓存后即完成了 Ruby 的 gem 源修改**

国内无法连接到https://rails-assets.org/

```
Could not fetch specs from https://rails-assets.org/

Step 10/22 : RUN bundle install --without test development
 ---> Running in 5529d20b66ce
Fetching source index from https://rails-assets.org/

Retrying fetcher due to error (2/4): Bundler::HTTPError Could not fetch specs from https://rails-assets.org/
Retrying fetcher due to error (3/4): Bundler::HTTPError Could not fetch specs from https://rails-assets.org/
Retrying fetcher due to error (4/4): Bundler::HTTPError Could not fetch specs from https://rails-assets.org/
Could not fetch specs from https://rails-assets.org/
ERROR: Service 'web' failed to build: The command '/bin/sh -c bundle install --without test development' returned a non-zero code: 17
```
![](https://cdn.jsdelivr.net/gh/eric5013/image@master/2020/06/10/r4ZUK01591764328566r4ZUK0.png)

在 docker on OSEM 应用程序中, 有个 gemfile 文件.

![](https://cdn.jsdelivr.net/gh/eric5013/image@master/2020/06/10/8VOFrC15917643305398VOFrC.png)

https://ruby.taobao.org 页面:

![](https://cdn.jsdelivr.net/gh/eric5013/image@master/2020/06/10/kySEv11591764333695kySEv1.png)

修改之后还是无法安装.

![](https://cdn.jsdelivr.net/gh/eric5013/image@master/2020/06/10/CkL4C01591764339128CkL4C0.png)



