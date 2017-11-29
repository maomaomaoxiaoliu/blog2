<?php
header("Content-Type:text/plain;charset=UTF-8");
$conn=mysqli_connect('127.0.0.1','root','123456','login',3306);
mysqli_query($conn,'SET NAMES UTF8');
function sql_execute($sql,$arr_type){
    global $conn;
    $result = mysqli_query($conn, $sql);
    return mysqli_fetch_all($result, $arr_type);
}

@$uname=$_REQUEST["uname"];
if($uname){
  $sql="select * from user where uname='$uname'";
  if(count(sql_execute($sql,MYSQLI_ASSOC))==0)
    echo "true";
  else
    echo "false";
}