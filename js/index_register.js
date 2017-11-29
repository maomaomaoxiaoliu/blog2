
(()=>{
	console.log(2);
  var result=true;
  $("input[name=uname1]").blur(e=>{
    vali($(e.target),"vali.php");
  })
  function vali($txt,url){
    return new Promise(resolve=>{
      var $span=$txt.next();
      if($txt.val()==""){
        $span.removeClass("right").addClass("error")
              .text("不能为空!");
        result=false;
      }else{
        $.get(url,"uname="+$txt.val())
          .then(data=>{//data:"true"/"false"	
			console.log(data);
          if(data=="true"){
            $span.removeClass("error")
                  .addClass("right").text("可用");
            result=true;
            resolve();
          }else{
            $span.removeClass("right")
                  .addClass("error").text("已存在，不可用");
            result=false;
          }
        })
      }
    })
  }
	function checkPwd(){
    var $upwd1=$("input[name=upwd1]"),
        $upwd2=$("#upwd2"),
        $span=$upwd2.next();
    if($upwd1.val()!=$upwd2.val()){
      $span.addClass("error")
            .text("两次输入的密码不一致!");
      result=false;
    }else{
      $span.removeClass("error").text("");
      result=true;
    }
  }
  $("input[name=upwd1]").blur(checkPwd);
  $("#upwd2").blur(checkPwd);
})()
$("#register").click(e=>{
	console.log(3);
	e.preventDefault();
    var n = $("#uname1").val();
    var p = $("#upwd1").val();
	$.ajax({
			type:"GET",
			url:"register.php",
			data:{uname:n,upwd:p},
			success:function(data){
			 //alert(data.code+":"+data.msg);
			 console.log(data.code+":"+data.msg);
				if(data.code>0){
					//登录成功跳转首页index.html
					alert("注册成功");
					location.href="index.html";
				}else{
					//var html='';
					//html=`<p>用户名或密码错误</p>`;
					//$("#tips2").html(html);
					alert("注册失败");
				}
			},
			error:function(data){
				alert("您的网络出现故障，请检查");
			}
		});
})

$("#cancel1").click(()=>{
	//console.log(10);
	$("#span").html("");
	$("#span1").html("");
	$("#uname1").val("");
	$("#upwd1").val("");
	$("#upwd2").val("");
})