<?php
/**
 * 数据库操作类
 *@author Jason
 */
header("Content-type:text/html;charset=utf-8");

class Db
{
	private   $host;
	private   $name;
	private   $passwd;
	private   $dbname;
	protected $conn;

	public function __construct($host, $name, $passwd, $dbname)
	{
		$this->host 	= $host;
		$this->name 	= $name;
		$this->passwd   = $passwd;
		$this->dbname   = $dbname;
	}
	public function connect()
	{
		$conn       = mysql_connect($this->host,$this->name,$this->passwd);
		mysql_select_db($this->dbname,$conn);
		mysql_query("SET NAMES UTF8");
		$this->conn = $conn;
	}
	public function sql($sql)
	{
		if(!isset($sql))
		{
			$return = 'no sql';
			return $return; 
		}
		$res 		= mysql_query($sql);
		return $res;
	}
	public function  close()
	{
		mysql_close($this->conn);
	}
}