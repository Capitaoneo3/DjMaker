<?php
require_once '../class/conexao.php';
require_once '../class/usuario.php';

// Create connection
$nome=$_POST['Nome'];
$email=$_POST['Email'];
$senha=$_POST['Senha'];
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO usuario (nome_Usr,senha_Usr, email_Usr )
VALUES ('$nome', '$senha', '$email')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>