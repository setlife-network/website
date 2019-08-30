require('dotenv').config()

module.exports = {
  
    SENDGRID: {
        API_KEY: process.env.SENDGRID_API_KEY,
    },

    AIRTABLE: {
        API_KEY: process.env.AIRTABLE_API_KEY,
        BASE_ID: process.env.AIRTABLE_BASE_ID
    },
        
    
};