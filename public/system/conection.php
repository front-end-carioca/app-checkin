<?php

class Conexao{

	public static function getConnection(){
		
		$connString = "mysql:host=localhost;dbname=importexcel";
		$usuario = "root";
		$senha = "root";
		
		try {

		    $conn = new PDO($connString, $usuario, $senha);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    
		} catch (PDOException $e) {
		    print "Error!: " . $e->getMessage() . "<br/>";
		    die();
		}
		return $conn;
	}
}

?>
