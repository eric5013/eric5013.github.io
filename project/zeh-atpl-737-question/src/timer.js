// timer.js
// written by Eric Zeng on June 12,2020
// wechat:eic5013

var hour, minute, second; //时 分 秒
hour = minute = second = 0; //初始化

var int;
function resetTiming() //重置
{
    window.clearInterval(int);
    hour = minute = second = 0;
}
function stopTiming(){
    window(clearInterval)
}

function startTiming() //开始
{
    int = setInterval(timer, 1000);
}

//计时
function timer() {
    second++;
    if (second >= 60) {
        second = 0;
        minute = minute + 1;
    }

    if (minute >= 60) {
        minute = 0;
        hour = hour + 1;
    }

    document.getElementById('lapse-time').innerText = checkDouble(hour) + ':' + checkDouble(minute) + ':' + checkDouble(second);

}

function checkDouble(num){
    if(String(num).length <= 2){
        return "0"+String(num)
    }else{
        return String(num)
    }
}