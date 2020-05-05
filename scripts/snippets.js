//call to php
function test() {
    jQuery.ajax({
        type: "POST",
        url: thisURL + "test.php",
        data: {
            testingData: "69"
        },
        dataType: "html"
    }).done(function (result) {
        document.getElementById("out").textContent = result;
    })
}

