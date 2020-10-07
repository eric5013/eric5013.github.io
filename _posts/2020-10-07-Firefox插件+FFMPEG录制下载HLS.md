---
title: Firefox插件+FFMPEG录制下载HLS
date: 2020-10-07
---

**需要用到的工具（有能力达到后面的目的的话，也可以换成其他的）：**

- **[Firefox 浏览器](https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN) ：用来获取 m3u8 地址**
- **[PotPlayer](https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup64.exe)：用来播放 m3u8 地址、加速检查下载的视频**
- **[FFmpeg](https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip)：用来下载、截取视频流**
- **记事本：用来编辑 FFmpeg 命令**

以上提供的都是 Windows 64 位版的官方下载链接，32 位和其他系统可以去官网找。



首先，下载安装 Firefox 浏览器打开，安装上 [The Stream Detector](https://addons.mozilla.org/zh-CN/firefox/addon/hls-stream-detector/) 浏览器扩展。





![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/gif/ikaeyv1601989784989.gif)





当检测到网页请求 m3u8 地址时，扩展图标🎵会进行计数，桌面右下角会弹出提醒。



此时右键扩展图标⇒The Stream Detector，可以看到检测到的链接地址，点击地址即可复制到剪贴板。



左键点击扩展图标会将记录的地址清空。





![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/gif/Ab3Ndk1601989784986.gif)





打开某网站视频播放页，先切换到目标清晰度之外的画质，左键点击扩展图标清空记录。



然后切换到目标画质，此时扩展图标应该会计数，右键图标，点击前面是 [M3U8] 的地址复制链接到剪贴板。



（复制有可能失败，要注意右下角的提醒，失败了就多点几次试试。）



这时可以打开 PotPlayer 按 CTRL+V 来播放剪贴板里的链接，确认目标视频和清晰度是正常的，把链接粘贴备份到记事本里就可以进行下一步了。



（记事本可以勾上格式⇒自动换行，以防链接过长不好编辑。）



下载解压 FFmpeg，放到任何方便的位置就行。



进入 bin 目录，在路径栏输入`cmd`然后⏎在当前目录打开命令提示符。



在命令提示符里输入`ffmpeg`并⏎，确认 ffmpeg 可以正常运行。



（建议在命令提示符标题栏上右键⇒属性，把编辑选项下的快速编辑模式前的√去掉。）





![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/gif/Sq4DRV1601989786196.gif)





## 下载完整视频流



复制下面这条命令到记事本，把要下载的链接替换成之前得到的 m3u8 链接。



输出文件名如果不带路径默认就和 ffmpeg.exe 同在 bin 目录下。



输出容器格式由源视频流决定，某网站可以用 mp4，mkv、ts 等也可以试试。



```
ffmpeg -i "要下载的链接" -c copy "输出文件名.输出容器格式" 
```



`-i`是输入选项其后是输入文件的地址；



`-c`是输出文件的编码选项，此处值为 copy 即为复制原视频音频流，避免转码损失画质；



最后是输出文件名，后缀决定了视频容器格式。



例：



```
ffmpeg -i "http://xxx/.../xxx.m3u8?xxx..." -c copy "test.mp4" 
```



然后将改好的命令选中复制，在命令提示符里右键⇒粘贴并⏎执行即可开始下载。





![img](https://gitee.com/eric-zeng/image/raw/master/picBed/image/gif/s8LpTN1601989787206.gif)





下载好之后可以用 PotPlayer 打开来查看视频是否正常，ZXC 键分别是正常速度、减速、加速播放。



如果视频很长或很大可能需要些时间下载，在下载中途按一次 CTRL+C 并稍等片刻即可中止，已下好的片段能正常播放但想要完整的视频仍需从头开始下，这可以用来测试下载是否正常。



如果输入文件名与已有文件重复会提示是否覆盖，此时输入`y`为确认，输入其他则会取消。



如果下载的视频播放出现画面停顿等异常，可以尝试在`-i`前加上`-re`选项，但下载时间将不会小于视频播放时间。



```
ffmpeg -re -i "http://xxx/.../xxx.m3u8?xxx..." -c copy "test.mp4" 
```