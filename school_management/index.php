<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "studentslist";

    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_error) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    }

    // Set the INSERT SQL data
    $sql = "SELECT  ROW_NUMBER() over (ORDER BY ID desc)SNO, name as NAME,age AS AGE,class as CLASS,rank AS RANK FROM students";

    // Process the query so that we will save the date of birth
    $results = $mysqli->query($sql);

    // Fetch Associative array
    $row = $results->fetch_all(MYSQLI_ASSOC);

    // Free result set
    $results->free_result();

    // Close the connection after using it
    $mysqli->close();

    echo json_encode($row);
?>


