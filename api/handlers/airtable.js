const Airtable= require('airtable');
//const Airtable = require('../handlers/airtable')
const {
    AIRTABLE
} = require('../../config/credentials')

const base = new Airtable({apiKey: AIRTABLE.API_KEY
}).base(AIRTABLE.BASE_ID);

const airtable = module.exports = (function () {

    const createRecord = (params) => {
        return new Promise((resolve, reject) => {
            
            base(params.tableName)
            .create({
                ...params.fieldData
            }, function(err, record) {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(record)
                }
            });
        });
    };
    return {
        createRecord,
        
    };

})();