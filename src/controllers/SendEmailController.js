const nodemailer = require('nodemailer');

module.exports = {
        send(email,message){
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: 'suporte.vivapets@gmail.com',
                    pass: 'lllj76vivapets'
                  
                }
            });
            
            let mailOptions = {
                from: 'suporte.vivapets@gmail.com',
                to: email,
                subject: 'Boas Vindas :)',
                text: message
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error.message);
                }
                console.log('success');
            }); 
        }
 }
