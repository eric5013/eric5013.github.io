---
title: TamperMonkey遇到「function is not defined」的解决办法
date: 2020-06-22
header-style: text
tags:
 - JS
 - ES6

---



> **Tampermonkey** 是一款免费的浏览器扩展和最为流行的用户脚本管理器，它适用于 [**Chrome**](https://www.tampermonkey.net/#), [**Microsoft Edge**](https://www.tampermonkey.net/#), [**Safari**](https://www.tampermonkey.net/#), [**Opera Next**](https://www.tampermonkey.net/#), 和 [**Firefox**](https://www.tampermonkey.net/#)。
>
> 虽然有些受支持的浏览器拥有原生的用户脚本支持，但 Tampermonkey 将在您的用户脚本管理方面提供更多的便利。 它提供了诸如便捷脚本安装、自动更新检查、标签中的脚本运行状况速览、内置的编辑器等众多功能， 同时Tampermonkey还有可能正常运行原本并不兼容的脚本。



昨天写了一段脚本，目的用于爬取网页图片的资源信息并格式化成markdown格式，调用 `document.queryselector(selector)`方法

```javascript
window.onload = function(){
  ...
}
function getPicInfo() {

	...


}
```

导入tampermonkey后，`window.onload`的代码正常运行，试过按钮事件，console调用，`getPicInfo()`方法完全无法调用，搞了很久最后看了一下后台，写一点笔记。

TamperMonkey允许引用外部JS（如jQuery），但是所有的代码都在一个`「big」function`下

```javascript
(function(that) {
    ((context,fapply,console)=>{
        with (context) {
            (module=>{
                "use strict";
                try {
                    fapply(module, context, [, , context.CDATA, context.uneval, context.define, context.module, context.exports, context, context.unsafeWindow, context.console, context.cloneInto, context.exportFunction, context.createObjectIn, context.GM, context.GM_info]);
                } catch (e) {
                    if (e.message && e.stack) {
                        console.error("ERROR: Execution of script （脚本名称） " + e.message);
                        console.log(e.stack.replace(/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g, ""));
                    } else {
                        console.error(e);
                    }
                }
            }
            )(function tms_e59a9a41_b6ee_417f_8d88_33fXXXXX5cef(context, fapply, CDATA, uneval, define, module, exports, window, unsafeWindow, console, cloneInto, exportFunction, createObjectIn, GM, GM_info) {
              
//***********
//外部引用JS
//***********

              
                              (function() {

                    'use strict';
//***********
//用户代码
//***********
                                
                })();

            })
        }
    }
    )(that.context, that.fapply, that.console);
    
)((()=>{
    const k = "__u__5907087.XXXXXXXXX"
      , r = this[k];
    delete this[k];
    return r;
}
)())
```

使用的是ES6的语法，部分代码也经过混淆不是很能推理出其作用。结合TamperMonkey的参数设置`Line 7`为读取代码中CDATA/module/export/console等特定的关键词，便于正常调用。

文件结构看，用户输入代码的位置`Line 28`在两层函数嵌套下，局部方法的作用域是私有的。所以访问不到

## 解决方法

如果需要添加按钮事件，可以在`window.onload`中对按钮进行事件监听`addEventListener`，直接在内部写函数即可，如果需要调用方法，需要在监听事件中定义。

这个方法的问题是代码的可维护性比较差，没办法，先这样凑合着吧。以后有新的解决办法再写。

### 2020.6.24

想到一个新方法，实测好用，而且可全局调用：

TamperMonkey只需要写一下代码，require和脚本都一样。引用文件在前。

❗️module引入时注意添加`type="module”`(上次被这个玩意坑惨了)

    window.onload = function(){
        function addJS(src){
            var srcObj = document.createElement("script")
            srcObj.setAttribute("src",src)
            document.body.prepend(srcObj)
        }
        addJS("{{jsLink}}")
    }
简单说就是把script直接在文档加载时Load进去。需要注意当服务器启用HTTPS访问时，所访问的资源也需要是HTTPS的（localhost除外），否则会被[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)直接blocked。