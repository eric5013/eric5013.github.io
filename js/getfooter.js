// getfooter.js

$.get("/footer", ,
    function (data, textStatus, jqXHR) {
        console.log(data)
    },
    "dataType"
);