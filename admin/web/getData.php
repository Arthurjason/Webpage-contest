<?php
header("Content-type:text/html;charset=utf-8");

include('./Db.class.php');
require('./config.php');
require('./func.php');

$db 	 = new Db($host,$name,$passwd, $dbname);

$db->connect();

$user 	 	 = fliter_script($_POST['user']);
$type        = fliter_script($_POST['type']);
$major 	 	 = fliter_script($_POST['major']);
$email	 	 = fliter_script($_POST['email']);
$phone	 	 = fliter_script($_POST['phone']);
$name	 	 = fliter_script($_POST['name']);
$description = fliter_script($_POST['description']);
$time 		 = time();

if(!$user||!$major||!$type||!$name||!$phone||!$description){
	echo "请填写必要信息";
	return false;
}

$sql = "INSERT INTO baoming (user,type,major,email,phone,name,description,time) VALUES 
('{$user}','{$type}','{$major}','{$email}','{$phone}','{$name}','{$description}','{$time}')";
$result = $db->sql($sql);
if($result)
{
	echo "<script>alert('提交成功');history.back();</script>";

}else
{
	echo "<script>alert('提交失败正在跳转');window.location.href='http://web.ldustu.com'</script>";
}
$db->close();