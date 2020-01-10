var fs = require('fs');
var { UNSUSCRIBETEXT } = require('../constants');

var airtable = require('../handlers/airtable');
var sendgrid = require('../handlers/sendgrid');

const emailSubscriptions = module.exports = (() => {

    var emailTemplate = fs.readFileSync(__dirname + '/../subscriptionEmail.html', 'utf8', (error, jsonString) => {
        if (error) {
            console.log('Error reading file', err)
            return
        }
        try {
            JSON.parse(jsonString)
        } catch (err) {
            console.log('Error parsing JSON string:', err)
        }
    })


    const subscribeNewUser = (req, res) => {

        airtable.createRecord({
            tableName: 'Subscriptions',
            fieldData: {
                'Email': req.body.email,
                'Date Subscribed': currentDate(),
                'Unsubscribed': false
            }
        })
        .then(record => {

            emailTemplate = emailTemplate.replace(':unsuscribe_user_id', record.id);
            return (
                sendgrid.sendMessage({
                    recipient: record[0].fields.Email,
                    msg: [
                        {
                            to: record.fields.Email,
                            from: 'contact@setlife.education',
                            subject: 'Setlife Newsletter',
                            html: emailTemplate,

                        },
                        {
                            to: 'social@setlife.network',
                            from: 'contact@setlife.education',
                            subject: 'New Subscription',
                            text: 'New users email: ' + record.fields.Email,
                        },
                    ]

                })
            )
        })
        .then(sendgridResponse => {
            res.json({ message: 'Success' })
        })
    }

    const unsubscribeUser = (req, res) => {

        airtable.updateRecord({

            tableName: 'Subscriptions',
            id: req.params.id,
            fieldData: {
                'Unsubscribed': true,
            }
        })
        .then(record => {
            return (
                sendgrid.sendMessage({
                    recipient: record[0].fields.Email,
                    msg: [
                        {
                            to: record[0].fields.Email,
                            from: 'contact@setlife.education',
                            subject: 'Setlife Newsletter',
                            text: UNSUSCRIBETEXT.body,

                        },
                        {
                            to: 'social@setlife.network',
                            from: 'contact@setlife.education',
                            subject: 'New Subscription',
                            text: record[0].fields.Email + 'has sent a request to unsubscribe. The records on Airtable should be updated accordingly',
                        },
                    ]

                })
            )
        })
        .then(sendgridResponse => {
            res.json({ message: 'Success' })
        })
    }

    //method to insert Date in airtable
    function currentDate() {
        var d = new Date();
        var date = [
            d.getFullYear(),
            ('0' + (d.getMonth() + 1)).slice(-2),
            ('0' + d.getDate()).slice(-2)
        ].join('-');
        return date
    }

    return {
        subscribeNewUser,
        unsubscribeUser,


    };

})();
