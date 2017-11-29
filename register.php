<?php
header("Content-Type:application/json;charset=UTF-8");
$conn=mysqli_connect('127.0.0.1','root','123456','login',3306);
mysqli_query($conn,'SET NAMES UTF8');
function sql_execute($sql,$arr_type){
    global $conn;
    $result = mysqli_query($conn, $sql);
    return mysqli_fetch_all($result, $arr_type);
}
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];
$sql="insert into user(uname,upwd) values('$uname','$upwd')";
$result=mysqli_query($conn,$sql);
if($result==true){
	echo '{"code":1,"msg":"注册成功"}';
}else{
	echo '{"code":-1,"msg":"注册失败"}';
}
?>
