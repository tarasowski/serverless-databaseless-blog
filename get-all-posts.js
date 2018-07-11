const gsjson = require('google-spreadsheet-to-json')
const processResponse = require('./process-response')

const spreadsheetId = process.env.SPREADSHEET_ID || '1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c'

exports.handler = async(event, context, callback) => {

    await gsjson({
            spreadsheetId: spreadsheetId,
        })
        .then(fetchedContent => {
            let response = processResponse(200, 'Everything worked well', fetchedContent)
            callback(null, response)
        })
        .catch(err => {
            console.log(err.message)
            console.log(err.stack)
            let response = processResponse(200, 'Something went wrong, please try again')
            callback(err, response)
        })
}
