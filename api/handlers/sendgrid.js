var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'rebecarubiolopez@gmail.com',
    from: 'contact@setlife.education',
    subject: 'Setlife Newsletter',
    text: 'Contact form submitted successfully',
   // html: '<strong> thanks </strong>',
};
sgMail.send(msg);