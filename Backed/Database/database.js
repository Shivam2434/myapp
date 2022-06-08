const mysql = require('mysql')

let config = {
    port: 3306,
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

// let con

// function createConn(){
//     con = mysql.createConnection(config)

//     con.connect(function(err){
//         if(err){
//             console.log("error occured while connecting to database ... ",err);
//             setTimeout(createConn,2000)
//         }
//     })

//     con.on('error',function(err){
//         console.log("database error :: ",err);
//         if(err.code === 'PROTOCOL_CONNECTION_LOST'){
//             createConn();
//         }
//         else{
//             throw err
//         }
//     })
// }



// createConn()

let con = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})



con.connect(function(err){
    if(err) throw err;
    if(err){
        console.log("Error occured in during connection :: ",err)
    }
    console.log("Connected to database..");
})

module.exports = con;