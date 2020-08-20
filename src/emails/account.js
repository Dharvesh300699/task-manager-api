const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kaminikumari169@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(() => {
        console.log('Email sent successfully');
    }).catch(() => {
        console.log('Some error occurred');
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kaminikumari169@gmail.com',
        subject: 'Membership cancelation',
        text: `GoodBye ${name}. Is there something we could have done to keep you on board?`
    }).then(() => {
        console.log("Email sent successfully");
    }).catch(() => {
        console.log("Some error occurred");
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}