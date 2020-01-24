const UNSUSCRIBETEXT = {
    body: 'We have received your request to unsubscribe from SetLife emails and this has been automaticallyprocessed in our system. After this email we wont bother you again! If for some reason you continue to receive emails, we apologize in advance and ask that you please send a message to contact@setlife.network so we can resolve this manually. Thanks and have a great day!'
}

const SITE_ROOT = process.env.NODE_ENV == 'production'
    ? 'https://www.setlife.network'
    : 'http://localhost:4000'

const API_ROOT = `${SITE_ROOT}/api`

module.exports = { UNSUSCRIBETEXT, API_ROOT }
