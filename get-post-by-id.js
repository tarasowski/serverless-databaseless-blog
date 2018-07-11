const gsjson = require('google-spreadsheet-to-json')
const parse = require('./parse-api-gateway-request')
const processResponse = require('./process-response')

const spreadsheetId = process.env.SPREADSHEET_ID || '1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c'

exports.handler = async(event, context, callback) => {
    const url = parse(event)

    await gsjson({
            spreadsheetId: spreadsheetId,
        })
        .then(result => {
            const filteredResults = result.filter(element => {
                return element.url === url
            })

            const response = processResponse(200, 'Everything worked well', filteredResults)
            callback(null, response)
        })
        .catch(err => {
            console.log(err.message)
            console.log(err.stack)
            const response = processResponse(400, 'Something went wrong')
            callback(err, response)
        })

}
