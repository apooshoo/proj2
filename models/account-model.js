const sha256 = require('js-sha256');
const SALT = "bonk";

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let register = (requestdata, callback) => {
        console.log("entering register model");
        let password = sha256(requestdata.password);
        let values = [requestdata.username, password];
        console.log("VALUES: ", values)
        let query = `INSERT INTO users (username, password) SELECT $1, $2 WHERE NOT EXISTS (SELECT * FROM users WHERE username = $1) RETURNING *`;
        dbPoolInstance.query(query, values, (err, result) =>{
            if(err){
                callback(err, null);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            };
        });
    };

    let login = (requestdata, callback) =>{
        console.log("entering login model");
        let password = sha256(requestdata.password);
        let values = [requestdata.username, password];
        console.log("VALUES: ", values);
        let query = `SELECT * FROM users WHERE username = $1 AND password = $2`;
        dbPoolInstance.query(query, values, (err, result) =>{
            if(err){
                callback(err, null);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            };
        });
    };


    return {
        register,
        login
    };
};