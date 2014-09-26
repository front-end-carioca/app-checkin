<?php

	$email = $_POST['email'];

	// $retorno = "";

	// require('conection.php');

	// try {

	// $con = Conexao::getConnection();

	// 	$sql = "SELECT FROM importaexcel WHERE email=$email";

	// 	$stmt = $con->prepare($sql);
	// 	$retorno = $stmt->execute();
	
	// } catch (PDOException $e) {
	// 	$retorno = $e->getCode();
	// }

	// $con = null;

	// if ($retorno == 1) {
	// 	$resultado = array('resultado' => 'Sucesso!' );	
	// }else{
	// 	$resultado = array('resultado' => 'Houve um erro!' );
	// }

	$email = array('email' => $email);

	echo json_encode($email);
	
?>

