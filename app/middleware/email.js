let cron = require('node-cron');
let nodemailer = require('nodemailer');

// e-mail message options


function sendEmailToDelayStudents(bookName, emailId, fineAmount, username) {
    let useremail = 'eyvno67wizub2eui@ethereal.email';
    // let testAccount = await nodemailer.createTestAccount();

    let mailOptions = {
        from: useremail,
        to: emailId,
        subject: 'Due in library Book',
        text: 'Hi' + username + ', Your book ' + bookName + ' is in over due. Your fine amount is' + fineAmount
    };

    // e-mail transport configuration
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // tr
        auth: {
            user: useremail,
            pass: 'ew4nBt7EDrXgJCwNH9'
        }
    });

    cron.schedule('* * * * *', () => {
        // Send e-mail
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            res.end();
        });
    });

}
module.exports = sendEmailToDelayStudents