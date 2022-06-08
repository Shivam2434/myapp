const db = require('../database');

const queries = {
    login: function(data){
        let sql = 'SELECT * FROM  users where name = ?';
        let response = new Promise((resolve, reject) => {
            db.query(sql, [data.name], (err,result) => {
                if(err) throw err;
                if(result){
                    resolve(result);
                }
                else{
                    reject(err)
                }
            })
        })
        return response
    },

    signup: function(data){
        let sql = 'INSERT INTO users(uuid, name) VALUES(?, ?)';
        let response = new Promise((resolve,reject) => {
            db.query(sql, [data.uuid, data.name], (err, result) => {
                if(err) throw err;
                if(result){
                    resolve(result)
                }
                else{
                    reject(err)
                }
            })
        })
        return response
    },

    newResult: function(data){
        let sql = "INSERT INTO results(user_id, result) VALUES (?, ?)";
        let response = new Promise((resolve, reject) => {
            db.query(sql, [data.id, data.result], (err,result) => {
                if(err) throw err;
                if(result){
                    resolve(result);
                }
                else{
                    reject(err)
                }
            })
        })
        return response;
    }
}

module.exports = queries
