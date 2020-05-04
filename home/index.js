function send() {
    
    jQuery.ajax({
        type: "POST",
        url: thisURL + "test.php",
        data: {
            testingData: "Something"
        },
        dataType: "html"
    }).done(function (result) {
        document.getElementById("out").textContent = result;
    })
    
}