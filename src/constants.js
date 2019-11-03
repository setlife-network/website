export const SITE_ROOT = process.env.NODE_ENV == 'production'
    ? 'https://www.setlife.network'
    : 'http://localhost:4000'

export const API_ROOT = `${SITE_ROOT}/api`
