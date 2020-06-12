// loadQuestion.js
// written by Eric Zeng on June 12,2020
// wechat:eic5013

// mask status
loadMask("Loading")

// getRandomNum
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function checkUni(obj, arr) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === obj) {
            return false
        }
    }
    return true
}

// getQueries
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}


// initialize
var qData //JSON:save questionList
var testList = [] //Array:save test questionNum
var startAns = false

// 隐藏全部选项
$(".option").hide()

window.onload = function () {

    // getQuestionJSON
    $.ajax({
        url: "question.json",
        async: false
    }).done(function (result) {
        qData = result
    })

    // init end

    // select mode
    if (getQueryVariable("mode") == "1") {
        // default mode

        // loadAnswersheet
        var ansSh = $("#question-block")
        ansSh[0].innerHTML = ""
        for (var i = 0; i < qData.length; i++) {
            var blockObj = document.createElement("div")
            blockObj.setAttribute("class", "btn btn-outline-info single-block")
            blockObj.setAttribute("qid", qData[i].qId)
            // 设置定长宽度
            blockObj.style.width = (String(qData[i].qId).length + 1) + "em"

            blockObj.innerText = qData[i].qId
            ansSh.append(blockObj)
        }
        this.setTimeout(function () {
            $(".single-block:eq(0)").click()

        })
        removeMask()

    }

    if (getQueryVariable("mode") === "2") {
        // test Mode
        var questionNum = parseInt(prompt("请设置本次考试的题目数量", "100"))
        for (var i = 0; i < questionNum; i++) {
            var a = String(parseInt(randomNum(0, qData.length - 1)))
            if (checkUni(a, testList)) {
                testList.push(a)
            } else {
                i--;
            }
        }

        var ansSh = $("#question-block")
        ansSh[0].innerHTML = ""
        for (var i = 0; i < questionNum; i++) {
            var realID = parseInt(testList[i])
            var blockObj = document.createElement("div")
            blockObj.setAttribute("class", "btn btn-outline-info single-block")
            blockObj.setAttribute("qid", qData[realID].qId)
            // 设置定长宽度
            blockObj.style.width = ((String(i + 1)).length + 1) + "em"

            blockObj.innerText = i + 1
            ansSh.append(blockObj)
        }
        this.setTimeout(function () {
            $(".single-block:eq(0)").click()

        })
        removeMask()

        $("#submit-ans").show()
    }


    // // loadAnswersheet
    // var ansSh = $("#question-block")
    // ansSh[0].innerHTML = ""
    // for (var i = 0; i < qData.length; i++) {
    //     var blockObj = document.createElement("div")
    //     blockObj.setAttribute("class", "btn btn-outline-info single-block")
    //     blockObj.setAttribute("qid", qData[i].qId)
    //     // 设置定长宽度
    //     blockObj.style.width = (String(qData[i].qId).length + 1) + "em"

    //     blockObj.innerText = qData[i].qId
    //     ansSh.append(blockObj)
    // }

    $(".single-block").click(function () {
        // start timing
        if (!startAns) {
            startTiming()
            startAns = true
        }

        console.log(qData[parseInt($(this).attr("qid") - 1)]);
        // reset
        $(".option").removeClass("correct")
        $(".option").removeClass("wrong")
        $(".option").removeClass("finished")

        // set Answer Status
        var qidNow = parseInt($(".question > .qid")[0].innerText)
        var thisIndex = qidNow - 1
        var ansObj = $(this)

        if (ansObj.hasClass("correct") || ansObj.hasClass("wrong")) {
            var ans = opt2Arr(ansObj.attr("user-answer"))
            var refAns = opt2Arr(qData[thisIndex].answer)
            if (ans === refAns) {
                $(".option:eq(" + ans + ")").addClass("correct")
            } else {
                $(".option:eq(" + refAns + ")").addClass("correct")
                $(".option:eq(" + ans + ")").addClass("wrong")
            }
        }


        // answerSheet status reset
        $(".single-block").removeClass("onanswer")
        $(this).addClass("onanswer")

        // init
        var qId = $(".question > .qid")[0]
        var qQues = $(".question > .text")[0]
        var qAnsA = $("#optionA > .option-text")[0]
        var qAnsB = $("#optionB > .option-text")[0]
        var qAnsC = $("#optionC > .option-text")[0]
        var qAnsD = $("#optionD > .option-text")[0]

        var qInfo = qData[parseInt($(this).attr("qid") - 1)]

        qId.innerText = qInfo.qId
        qQues.innerText = qInfo.question
        $(qQues.parentElement).attr("answer", qInfo.answer)

        function checkNull(str, target) {
            if (str === null) {
                $(target.parentElement).hide();
            } else {
                target.innerText = str;
                $(target.parentElement).show();
            }
        }
        checkNull(qInfo.option.optionA, qAnsA)
        checkNull(qInfo.option.optionB, qAnsB)
        checkNull(qInfo.option.optionC, qAnsC)
        checkNull(qInfo.option.optionD, qAnsD)

    })

    $("#q-prev").click(function () {
        var qidNow = parseInt($(".question > .qid")[0].innerText)
        var prevIndex = qidNow - 2
        var ansList = $("#question-block > .single-block")
        ansList[prevIndex].click()

    })

    $("#q-next").click(function () {
        var qidNow = parseInt($(".question > .qid")[0].innerText)
        var nextIndex = qidNow
        var ansList = $("#question-block > .single-block")
        ansList[nextIndex].click()

    })

    $(".option").click(function () {
        // 开始计时
        if (!startAns) {
            startTiming()
            startAns = true
        }

        // 已作答
        if ($(this).hasClass("finished")) {
            return
        }

        var qidNow = parseInt($(".question > .qid")[0].innerText)
        var thisIndex = qidNow - 1
        var ansObj = $($("#question-block > .single-block")[thisIndex])

        var refAns = this.parentElement.parentElement.children[0].attributes["answer"].value

        var ans = $(this).attr("id").slice(6, 7)
        ansObj.attr("user-answer", ans)

        // checkAns(refAns,ans)
        if (refAns === ans) {
            // 正确
            $(this).addClass("correct")
            ansObj.addClass("correct")
        } else {
            // 错误
            $(this).addClass("wrong")

            ansObj.addClass("wrong")
            switch (refAns) {
                case "A":
                    $(this.parentElement.children[0]).addClass("correct")
                    break;
                case "B":
                    $(this.parentElement.children[1]).addClass("correct")
                    break;
                case "C":
                    $(this.parentElement.children[2]).addClass("correct")
                    break;
                case "D":
                    $(this.parentElement.children[3]).addClass("correct")
                    break;
            }
        }

        // 完成判断
        $(".options > .option").addClass("finished")
        updateStatus()
    })

    $("#submit-ans").click(function () {
        var finishTotalNum = countClass($(".single-block"), "correct") + countClass($(".single-block"), "wrong")
        var correctPercent = countClass($(".single-block"), "correct") / finishTotalNum
        if (confirm("您确定提交答案吗？\n预设题目数量：" + testList.length + "\n已作答：" + finishTotalNum + "\n")) {
            alert("模拟考试结束！\n 预设数量：" + testList.length + "道\n已作答：" + finishTotalNum + "道\n答对题目：" + countClass($('.single-block'), 'correct') + "道\n答错题目：" + countClass($('.single-block'), 'wrong') + "道\n正确率：" + finishTotalNum)
        }
    })


}

function opt2Arr(str) {
    switch (str) {
        case "A":
            return 0
            break;
        case "B":
            return 1
            break;
        case "C":
            return 2
            break;
        case "D":
            return 3
            break;

    }
}

function countClass(jqObj, className) {
    var count = 0
    $.each(jqObj, function () {
        if ($(this).hasClass(className)) {
            count++
        }
    })

    return count

}

function updateStatus() {
    $(".correct-num > span").text(countClass($(".single-block"), "correct"))
    $(".err-num > span").text(countClass($(".single-block"), "wrong"))
}

document.addEventListener("mousedown", () => {
    updateStatus()
})


function loadMask(str) {
    loading.showLoading({
        type: 5,
        tip: str
    })
    $("#mask").show()
}

function removeMask() {
    loading.hideLoading()
    $("#mask").hide()
}