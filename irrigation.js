const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    'content':'测试：估计这是评论最多的课程了',
    'mid':8837
})

const option = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=fee502d3-0783-4180-93d2-1ef2cbe9e0e8; imooc_isnew_ct=1495616395; PHPSESSID=rgonm1l1uor1mt3e50kf3q8qe0; loginstate=1; apsid=kxZmRlOGViZjFlMjRmOWM2MDg3MDJkZGViYmFhYjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDM1NjY4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3MDQ1MzcyNjdAcXEuY29tAAAAAAAAAAAAAAAAAAAAADhkZDIzYmY0YWI2YjVlNTczMjg0ODZhZmE3YTJlZGY1uypNWbsqTVk%3DZj; last_login_username=704537267%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1497935946,1498117942,1498218451,1498229224; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1498229445; imooc_isnew=2; cvde=594d29e5ad388-29',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

const req = http.request(option,(res)=>{
    console.log(`Status: ${res.statusCode}`);
    console.log(`header: ${JSON.stringify(res.headers)}`);
    res.on('data',(chunk)=>{
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })
    res.on('end',()=>{
        console.log('评论完毕!');
    })
    res.on('error',(e)=>{
        console.log(`Error: ${e.message}`);
    })
})

    req.write(postData);
    // req.end();