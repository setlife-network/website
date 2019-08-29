var airtable = require('../handlers/airtable');
var sendgrid = require('../handlers/sendgrid');

var emailSubscriptions = module.exports = (function () {
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
                return record.fields.Email,
                
                sendgrid.sendMessage({
                    recipient: record.fields.Email,
                    
                })
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


    };
})();