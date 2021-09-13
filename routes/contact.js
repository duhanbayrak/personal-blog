const express = require('express'),
    router = express.Router()


router.post("/send", (req, res) => {

    const outputHTML = `
    <h2>Mail Details</h2>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>E-Mail: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message </h3>
    <p>${req.body.message}</p>`;

    "use strict";
    const nodemailer = require("nodemailer");

    async function main() {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
                user: 'duhanbayrak6@gmail.com', 
                pass: 'hkfgsxscvalutzzp', 
            }
        });

        let info = await transporter.sendMail({
            from: '"Duhan BLog Mesajı" <duhanbayrak@gmail.com>', 
            to: "duhanbayrak6@gmail.com", 
            subject: "Mesaj", 
            text: "Hello world?", 
            html: outputHTML, 
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        
        res.redirect("/contact")
    }
    main().catch(console.error);
});

module.exports = router;