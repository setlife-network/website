import UNSUSCRIBETEXT from '../constants'

var airtable = require('../handlers/airtable');
var sendgrid = require('../handlers/sendgrid');


const emailSubscriptions = module.exports = (() => {

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
            return (
                sendgrid.sendMessage({
                    recipient: record.fields.Email,
                    msg: [
                        {
                            to: record.fields.Email,
                            from: 'contact@setlife.education',
                            subject: 'Setlife Newsletter',
                            text: 'Contact form submitted successfully',

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
            id: req.id,
            fieldData: {
                'Unsuscribed': true,
            }
        })
        .then(record => {
            return (
                sendgrid.sendMessage({
                    recipient: record.fields.Email,
                    msg: [
                        {
                            to: record.fields.Email,
                            from: 'contact@setlife.education',
                            subject: UNSUSCRIBETEXT,
                        },
                        {
                            to: 'social@setlife.network',
                            from: 'contact@setlife.education',
                            subject: 'New Subscription',
                            text: record.fields.Email + 'has sent a request to unsubscribe. The records on Airtable should be updated accordingly',
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
        unsubscribeUser


    };

})();
