let schema = require('../helper/validator')

module.exports = {
    async validate(req, res, next){
        try{
            console.log(req.body);
            const result = schema[req.url].validate(req.body);
            if(result.error){
                res.status(400).json({
                    status: false,
                    type: 'error',
                    message: result.error.details[0].message.replace(/\"/g,''),
                    data: []
                })
            }
            else{
                next();
            }
        }catch(err){
            res.status(400).json({
                status: false,
                type: 'error',
                message: (error.message) ? error.message : "Invalid Request",
                data: err
            })
        }
    }
}