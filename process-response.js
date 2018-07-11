module.exports = (statusCode, message, fetchedContent = false) => {

    const body = { message }
    if (fetchedContent) {
        body['content'] = fetchedContent
    }

    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode,
        body: JSON.stringify(body)
    }
}
