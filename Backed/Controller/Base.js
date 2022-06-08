const authQueries = require('../Database/queries/auth')

class BaseController {
    static login(data){
        let result = authQueries.login(data).then(response => {
            return response
        }).catch(err => {
            return err
        })
        return result
    }

    static signup(data){
        let result = authQueries.signup(data).then(response => {
            return response;
        }).catch(err => {
            return err
        })
        return result
    }

    static newResult(data){
        let result = authQueries.newResult(data).then(response => {
            return response;
        }).catch(err => {
            return err
        })
        return result;
    }
}

module.exports = BaseController