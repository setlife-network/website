const { SENDGRID } = require('../../config/credentials')
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID.API_KEY);
//const { SENDGRID } = require('../handlers/sendgrid.js');

const Airtable = require('airtable');
//const Airtable = require('../handlers/airtable')
const { AIRTABLE } = require('../../config/credentials')
const base = new Airtable({
    apiKey: AIRTABLE.API_KEY
}).base(AIRTABLE.BASE_ID);

//var base = require('../handlers/airtable.js');

var crud = module.exports = (function () {

    const subscribeNewEmail = (req, res) => {

        const msg = {
            to: 'rebecarubiolopez@gmail.com',
            from: 'contact@setlife.education',
            subject: 'Setlife Newsletter',
            text: 'Contact form submitted successfully',
            // html: '<strong> thanks </strong>',
        };
        sgMail.send(msg);

    }

    const insertNewEmail = (req, res) => {
        //insert newEmail on airtable
        base('Subscriptions').create({

            "Email": req.body.email,
            "Date Subscribed": req.body.date,
            "Unsubscribed": req.body.subscribed

        }, 
        function (err, record) {
            if (err) {
                console.error(err);
                return;
            }
            console.log(record.getId());
        });


    }

    return {
        subscribeNewEmail,
        insertNewEmail,

    };
})();