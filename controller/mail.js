const nodeMailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config()
exports.sendMail = (req, res) => {
    console.log(req.body)
    let userMail = req.body.email
    let name = req.body.name

    let transporter = nodeMailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'darasimidideoluwa@gmail.com',
            pass: 'tocsxttxooendrxh'
        }
    })

    let message = {
        from: process.env.EMAIL,
        to: userMail,
        subject: "this is test",
        text: name,
    }

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log("error in sending mail", err)
            return res.status(400).json({
                message : `error in sending mail ${err}`
            })
        } else{
            console.log(`success in sending message ${info}`)
            return res.json({
                message : info
            })
        }
    })
}