var sgMail = require('@sendgrid/mail');
const {
    SENDGRID
} = require('../../config/credentials')
sgMail.setApiKey(SENDGRID.API_KEY);

const sendgrid = module.exports = (function () {

    const sendMessage = (params) => {
        return new Promise((resolve, reject) => {
            
            sgMail.send(params.msg)
                .then(() => {
                    resolve('successfully sent email')
                })
                .catch(error => {
                    console.error(error.toString());

                });
        });
    };
    return {
        sendMessage,

    };

})();
