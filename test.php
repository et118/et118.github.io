<?php
    header('Access-Control-Allow-Origin: https://et118.github.io');
    if(isset($_POST["testingData"])) 
    {
        $conn = new mysqli("localhost","id13564302_admin", "EsmeraldaGillarAttFiska4+", "id13564302_testbase") or die("Failed Database Connection". $conn -> error);

        if($conn === false) {

            die("Error: Could Not Connect To Database. " . $conn->connect_error);
            $conn -> close();
        }

        $result = $conn->query("SELECT UserID, UserName FROM users");

        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }
        echo json_encode($rows);
        $conn -> close();
    } 
    else 
    {
        echo "No requesti!";
        
    }
    //esmeraldserver
    //esmeraldagillarattfiska
?>