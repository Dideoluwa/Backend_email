const nodeMailer = require("nodemailer");
const dotenv = require('dotenv');
// const ical = require('ical-generator');
dotenv.config()



exports.sendMail = (req, res) => {
    console.log(req.body)
    let userMail = req.body.email
    let signUpMail = req.body.userEmail
    let name = req.body.name
    let dates = req.body.dates
    let timer = req.body.timer
    let purpose = req.body.purpose

    let transporter = nodeMailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'darasimidideoluwa@gmail.com',
            pass: 'tocsxttxooendrxh'
        }
    })


    let message = {
        from: 'Darasimi Oni <darasimidideoluwa@gmail.com>',
        to: userMail,
        subject: `New Event: ${name} - ${timer} ${dates}.`,
        html: `<b>Hi ${name}, <br>A new event has been scheduled.<br>Event date/Time: <br>${dates}/${timer}<br>Purpose of meeting : ${purpose}<br>Invitee:<br><a href=mailto:${signUpMail}>${signUpMail}<a/>.`
        // icalEvent: {
        //     filename: "invitation.ics",
        //     method: 'request',
        //     content: content
        //     }

    }

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log("error in sending mail", err)
            return res.status(400).json({
                message: `error in sending mail ${err}`
            })
        } else {
            console.log(`success in sending message ${info}`)
            return res.json({
                message: info
            })
        }
    })
}