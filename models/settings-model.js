module.exports = (dbPoolInstance) => {

// select pay_day::date from settings where id= 1;


    let show = (requestdata, callback) => {
        console.log("entering model show");
        console.log("requestdata", requestdata);
        let user_id = parseInt(requestdata.id);
        let query = `SELECT * FROM settings WHERE user_id = ${user_id}`;
        dbPoolInstance.query(query, (err, result) => {
            if(err){
                callback(err, null);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            };
        });
    };

//     CREATE TABLE IF NOT EXISTS settings (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER,
//     pay_day TIMESTAMPTZ DEFAULT NULL,
//     next_pay_day TIMESTAMPTZ DEFAULT NULL,
//     pay_amount INTEGER,
//     save_amount INTEGER
// );

    let edit = (requestdata, callback) => {
        console.log("entering model edit");
        console.log("requestdata: ", requestdata);
        let x = requestdata;
        let user_id = parseInt(x.params.id);
        //prepare dates for query
        let pay_day_query = new Date(x.body.pay_day);
        let next_pay_day_query = new Date(x.body.next_pay_day);

        let values = [pay_day_query, next_pay_day_query, x.body.pay_amount, x.body.save_amount, user_id];
        let query = `UPDATE settings SET
            pay_day = $1,
            next_pay_day = $2,
            pay_amount = $3,
            save_amount = $4
            WHERE user_id = $5 RETURNING *`;
        console.log(values)
        console.log(query)
        dbPoolInstance.query(query, values, (err, result) => {
            if(err){
                callback(err, null);
            } else if (result.rows.length > 0){
                callback(err, result.rows);
            } else {
                callback(null, null);
            };
        });
    };



    return {
        show,
        edit
    };
};