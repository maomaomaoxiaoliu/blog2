//模块一:完成用户登录
//1:为登录按钮绑定点击事件
console.log(1);
//jquery:blur失去焦点
$("#uname").blur(function(){
	 var n = $("#uname").val();
    //用户名：字母或数字3~8
	var unameReg=/^[a-zA-Z0-8]{3,8}$/;
	if(!unameReg.test(n)){
		var html='';
		html=`<p>用户名格式不正确，必须在3~8位之间</p>`;
		$("#tips1").html(html);
		//alert("用户名格式不正确，必须在3~8位之间");
		return;
	}else{
		var html='';
		html=`<p></p>`;
		$("#tips1").html(html);
	}
})
$("#upwd").blur(function(){
    var p = $("#upwd").val();
	//密码：字母或数字3~8
    var upwdReg=/^[a-zA-Z0-8]{3,8}$/;
	if(!upwdReg.test(p)){
		var html='';
		html=`<p>密码格式不正确，必须在3~8位之间</p>`;
		$("#tips2").html(html);
		//alert("密码格式不正确，必须在3~8位之间");
		return;
	}else{
		var html='';
		html=`<p></p>`;
		$("#tips2").html(html);
	}
})
$("#btn").click(function(e){
    console.log(2);
    //2:阻止事件默认行为,原因:a默认行为
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var n = $("#uname").val();
    var p = $("#upwd").val();
    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"index.php",
        data:{uname:n,upwd:p},
        success:function(data){
         //alert(data.code+":"+data.msg);
            if(data.code>0){
                //将用户名和用户编号保存sessionStorage
                sessionStorage.setItem("uname",n);
                sessionStorage.setItem("uid",data.uid);
                //登录成功跳转首页index.html
				alert("登录成功");
                location.href="index.html";
            }else{
				var html='';
				html=`<p>用户名或密码错误</p>`;
				$("#tips2").html(html);
				
			}
        },
        error:function(data){
            alert("您的网络出现故障，请检查");
        }
    });
});

$("#cancel").click(()=>{
	//console.log(10);
	$("#tips1").html("");
	$("#tips2").html("");
	$("#uname").val("");
	$("#upwd").val("")
})
