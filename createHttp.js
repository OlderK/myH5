function XHR(url,method,target,callback){
    // 创建请求
    var htp = new XMLHttpRequest();
    // 建立与服务器端连接(get/post)  https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c
    htp.open(method,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + url);
    // 设置头信息，让数据以表单形式传递给服务器
    htp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // 发送请求
    htp.send(target);
    //第四步接收服务端返回的数据
    htp.onreadystatechange = function(){
        if(htp.readyState == 4 && htp.status == 200){
            var res = JSON.parse(htp.responseText)

            callback(res);
        }
    }
    
}

