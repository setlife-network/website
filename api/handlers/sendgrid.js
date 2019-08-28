var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendgrid = module.exports = (function () {

    const sendMessage = (params) => {
        return new Promise((resolve, reject) => {
            
            const msg = [
                {
                    to: params.recipient,
                    from: 'contact@setlife.education',
                    subject: 'Setlife Newsletter',
                    text: 'Contact form submitted successfully',

                },
                {
                    to: 'social@setlife.network',
                    from: 'contact@setlife.education',
                    subject: 'New Subscription',
                    text: 'New users email: ' + params.recipient,
                },
            ];
            sgMail.send(msg)
                .then(() => {
                    //Celebrate
                })
                .catch(error => {

                    //Log friendly error
                    console.error(error.toString());

                });
        });
    };
    return {
        sendMessage,

    };

})();
