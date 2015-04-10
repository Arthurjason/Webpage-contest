<?php
header("Content-type:text/html;charset=utf-8");

include('./Db.class.php');
require('./config.php');
require('./func.php');

$db 	 = new Db($host,$name,$passwd, $dbname);

$db->connect();

$sql 	 = "SELECT *  FROM baoming";

$res 	 = mysql_num_rows($db->sql($sql));

$data 	 = array(
	'num' => $res,
	'error' =>0,
	);
echo json_encode($data);