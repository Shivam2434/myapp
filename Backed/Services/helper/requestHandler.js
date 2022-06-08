class RequestHandler {
    static sendSuccess(res, message, data = [], status = 200) {
        return res.status(status).json({
            status: true,
            type: 'success',
            message: message,
            data: data
        })
    }

    static sendError(res, message, data = [], status = 400) {
        return res.status(status).json({
            status: false,
            type: 'error',
            message: message,
            data: data
        })
    }
}

module.exports = RequestHandler;