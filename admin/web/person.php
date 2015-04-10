<?php
header("Content-type:text/html;charset=utf-8");

include('./Db.class.php');
require('./config.php');
require('./func.php');

$db 	 = new Db($host,$name,$passwd, $dbname);

$db->connect();

$type 	 = $_POST['type'];

$sql	 = "SELECT * FROM baoming WHERE type ='{$type}' ";

$res 	 = $db->sql($sql);

$i  = 0;
while ( $row = mysql_fetch_array($res))
{
	$array[$i] = $row;
	$i++;
}

foreach ($array as $key => $value)
{
	$return[$key]['id'] 		 = $value['id'];
	$return[$key]['user'] 		 = $value['user'];
	//$return[$key]['type']		 = $value['type'];
	$return[$key]['major'] 		 = $value['major'];
	$return[$key]['email'] 		 = $value['email'];
	$return[$key]['phone'] 		 = $value['phone'];
	$return[$key]['name'] 		 = $value['name'];
	$return[$key]['description'] = $value['description'];
}
$returnData = array(
	'data'	=>$return,
	'error' =>0,
	);
echo json_encode($returnData);