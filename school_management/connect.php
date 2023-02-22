<?php

    $student_name = $_POST['Name'];
    $student_age = $_POST['Age'];
    $student_class = $_POST['Stdentclass'];
    $student_rank = $_POST['Rank'];
    
    $conn = new mysqli('localhost', 'root','', 'studentslist');
    if($conn->connect_error){
        die('connection Failed :' .$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into students(name,age,class,rank)values(?,?,?,?)");
        $stmt->bind_param("siii",$student_name,$student_age,$student_class,$student_rank);
         $stmt->execute();
         echo "200";
         $stmt->close();
         $conn->close();

    }

?>