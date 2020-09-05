---
title: Jamendo Audio Downloader
author: Eric
date: 2020-09-03
---

```javascript
// Edit date: September 3 2020
// Author: Eric Zeng
// Licensed by MIT license

// Jamendo Audio Downloader

//URL: https://licensing.jamendo.com/en/royalty-free-music/search?


var resultObj = document.querySelector(".track-list").children;
// 20 children HTML Collection
for(var i = 0; i<resultObj.length;i++){

  var id = resultObj[i].querySelector("a.link-wrap").href.replace("https://licensing.jamendo.com/en/track/","")
  var downlink = "https://mp3l.jamendo.com/?trackid="+ id +"&format=mp32"
  console.log(downlink)
  resultObj[i].querySelector("a.link-wrap").href = downlink;  

}

```

