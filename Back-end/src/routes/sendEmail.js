const nodemailer = require("nodemailer");
var ejs = require('ejs');

// Khởi tạo transporter với tài khoản Gmail của bạn
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nguyenphuthinh122500@gmail.com",
    pass: "ysqm uyvq yfiy nhez"
  },
});



// Tạo một hàm gửi email với from cố định
function sendEmail(to,subject,text) {
  transporter.sendMail(
    {
      from: "nguyenphuthinh122500@gmail.com", 
      to,
      subject,
      html:text,
    },
    (error, info) => {
      if (error) {
        return console.error("Error:", error);
      }
      console.log("Email sent:", info.response);
    }
  );
}


module.exports = { sendEmail };
