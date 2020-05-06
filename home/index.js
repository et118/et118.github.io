function send() {
    if(thisURL == "/et118.github.io/") {
        var url = "http://localhost/";
    } else {
        var url = thisURL;
    }
    
    jQuery.ajax({
        type: "POST",
        url: url + "test.php",
        data: {
            testingData: "Something"
        },
        dataType: "html"
    }).done(function (result) {
        document.getElementById("out").textContent = result;
    })
    
}