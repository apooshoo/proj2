// make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 1;
// let due_date_string = body.due_date.replace(/-/g, ', ');
        // console.log("duedatestring:", due_date_string);
/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // };
    let getAll = (callback) => {
        console.log("entering model getAll")
        let query = `SELECT * FROM items`;
        dbPoolInstance.query(query, (err, result) => {
            if(err){
                callback(err, null);
                console.log(err.stack);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            }
        });
    };

    let create = (requestdata, callback) => {
        console.log("entering model create");
        console.log("request data in model: ", requestdata);
        let recurringState = false;
        if (requestdata.recurring === 'on'){
            recurringState = true;
        }
        //provisional REMEMBER TO DELETE---------
        let user_id = 1;
        let values = [requestdata.name, requestdata.amount, recurringState, requestdata.due_date, requestdata.creditor, user_id];
        console.log("VALUES: ", values)
        let query = `INSERT INTO items (name, amount, recurring, due_date, creditor, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        dbPoolInstance.query(query, values, (err, result) => {
            if(err){
                callback(err, null);
                console.log(err.stack);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            }
        });
    };


    let edit = (requestdata, callback) =>{
        console.log("entering model edit");
        console.log("request data in model: ", requestdata);
        let id = requestdata.params.id;
        let body = requestdata.body;
        let recurringState = false;
        if (body.recurring === 'on'){
            recurringState = true;
        };

        console.log("body due date", body.due_date);

        //prepare due date for query
        let due_date_query = new Date(`${body.due_date}`);
        console.log("due date query", due_date_query);

        let values = [body.name, body.amount, recurringState, due_date_query,
         body.creditor, id];
        console.log("VALUES: ", values);

        let query = `UPDATE items SET
            name = $1,
            amount = $2,
            recurring = $3,
            due_date = $4,
            creditor = $5,
            updated_at = current_timestamp
            WHERE id = $6
            RETURNING *`;
        console.log("QUERY", query)

        dbPoolInstance.query(query, values, (err, result) => {
            if(err){
                callback(err, null);
                console.log(err.stack);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            };
        });
    };

    let del = (requestdata, callback) => {
        console.log("entering model delete");
        console.log("req data in model delete: ", requestdata);
        let values = [requestdata.id];
        let query = `DELETE FROM items WHERE id = $1 RETURNING *`;
        console.log("QUERY: ", query);

        dbPoolInstance.query(query, values, (err, result) => {
            if(err){
                callback(err, null);
                console.log(err.stack);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            };
        });
    };

    let sortAll = (requestdata, callback) =>{
        console.log("entering model sortAll");
        console.log("req data in model sortAll: ", requestdata);
        // let values = [requestdata.parameter, requestdata.order];
        // console.log("VALUES: ", values)
        let query = `SELECT * FROM items ORDER BY ${requestdata.parameter} ${requestdata.order}`;

        dbPoolInstance.query(query, (err, result) =>{
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
        getAll,
        create,
        edit,
        del,
        sortAll
    };
};