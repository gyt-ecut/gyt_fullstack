// requier 关键字，引入库
const fs =  require('fs');//文件系统，内置模块
const nodemailer = require('nodemailer'); //第三方库
// // 模块语法 module
// const modA = require('./a.js') //相对地址
// console.log(modA.add(1,2));
// fs.re
// async(异步函数) + await
// 获取情话
function getWords(){

}
// 发邮件
async function sendMail(){
    let user = "1239701476@qq.com";
    let pass = "zphjdyxphdiugehi"; //授权码
    let to = "1471867575@qq.com"
    let transporter = nodemailer.createTransport({
        host:"smtp.qq.com",
        port:587,
        secure:false,
        auth:{
            user:user,
            pass:pass
        }
    })
    let info = await transporter.sendMail({
        form:`hjt<${user}>`, //sender address
        to:`hjt<${to}>`,
        subject:"aoaoaooao",
        text:'xiao la ji'
    })
    console.log("发送成功");
}

sendMail();