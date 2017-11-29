<?php
//1:修改响应头的格式json
header("Content-Type:application/json;charset=utf-8");
//2:创建数据库连接
$conn=mysqli_connect("127.0.0.1","root","123456","login",3306);
//3:设置编码
mysqli_query($conn,"SET NAMES UTF8");
//4:获取参数
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];
//5.创建sql语句并且发送sql语句
$sql="SELECT * FROM user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
//6.获取返回结果(不是true/false)并且抓取结果(一行)
$row=mysqli_fetch_assoc($result);
//7.判断输出结果
if($row==null){
	echo '{"code":-1,"msg":"用户名或密码不正确"}';
}else{
	$uid=$row["uid"];
	echo '{"code":1,"msg":"登录成功","uid":'.$uid.'}';
}
?>
