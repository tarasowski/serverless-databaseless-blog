module.exports = (event) => {
    if (!event || !event.pathParameters) {
        return ''
    }
    return event.pathParameters.url
}
