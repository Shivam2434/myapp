const BaseController = require('./Base');
const uuid = require('uuid');
const RequestHandler = require('../Services/helper/requestHandler');

class AuthController extends BaseController{
    static async login(req,res){
        try{
            let data = {
                name: req.body.name,
            }

            let getUser = await super.login(data);
            if(!getUser){
                throw({
                    message: 'User not found !!'
                })
            }
            else{
                RequestHandler.sendSuccess(res, 'Login Success', getUser, 200);
            }
        }catch(err){
            RequestHandler.sendError(res, 'Invalid Request', err, 400);
        }
    }

    static async signup(req,res){
        try{
            let user_id = uuid.v4()
            let data = {
                uuid: user_id,
                name: req.body.name
            }

            let check = {
                name: req.body.name
            }

            let check_user = await super.login(check);
            if(check_user){
                throw({
                    message: 'Username already taken !!'
                })
            }
            else{
                let newUser = await super.signup(data);
                if(!newUser){
                    throw({
                        message: "Signup Failed!"
                    })
                }
                else{
                    RequestHandler.sendSuccess(res, 'Signup success!', newUser, 200);
                }
            }
        }catch(err){
            RequestHandler.sendError(res, 'Invalid Request', err, 400)
        }
    }

    static async CreateNewResult(req,res){
        try {
            let data = {
                name: req.body.name
            }

            let getUser = super.login(data);
            if(getUser){
                throw({
                    message: 'User not found',
                })
            }
            else{
                let add = {
                    id: getUser[0].id,
                    result: req.body.result
                }

                let create = await super.newResult(add);
                if(!create){
                    throw({
                        message: 'Failed to add user result in database !!'
                    })
                }
                else{
                    RequestHandler.sendSuccess(res, 'Data added successfully', create, 200);
                }
            }
        } catch (error) {
            RequestHandler(res, 'Invalid Request', err, 400);
        }
    }
}

module.exports = AuthController;