const sha256 = require('js-sha256');
const SALT = "bonk";
const loggedInTrue = sha256('true' + SALT);

module.exports = (db) => {

    // *
    //  * ===========================================
    //  * Controller logic
    //  * ===========================================


    let getAllItemsCC = (req, res) => {
        if(req.cookies.loggedIn === loggedInTrue){
            console.log("starting getAllItemsCC");
            let requestdata = {
                cookies: req.cookies
            }
            db.item.getAll(requestdata, (err, result) => {
                console.log("back in getAllItemsCC");
                let data = {
                    itemsData: result
                };
                res.render('home', data);
            });
        } else {
            res.render('start');
        }

    };

    let createItemCC = (req, res) => {
        console.log("entering createItemCC");
        console.log("req.body: ", req.body);
        db.item.create(req.body, (err, result) => {
            console.log("back in createItemCC");
            console.log(result)
            res.redirect('/items');
        });
    }

    let editItemCC = (req, res) => {
        console.log("entering editItemCC");
        let requestdata = {
            body: req.body,
            params: req.params
        }
        console.log("REQ DATA: ", requestdata)
        db.item.edit(requestdata, (err, result) => {
            console.log("back in editItemCC");
            console.log("edited result in editItemCC :", result);
            res.redirect('/items');
        });

    };

    let deleteItemCC = (req, res) => {
        console.log("entering deleteItemCC");
        console.log("REQ BODY: ", req.params);

        db.item.del(req.params, (err, result) => {
            console.log("back in deleteItemCC");
            console.log("Deleted: ", result);
            res.redirect('/items');
        });

    };

    let sortAllItemsCC = (req, res) =>{
        console.log("entering sortAllItemsCC");
        console.log("req query: ", req.query);
        db.item.sortAll(req.query, (err, result) =>{
            console.log("back in sortAllItemsCC");
            console.log("Sorted: ", result);
            let data = {
                itemsData: result
            };
            res.render('home', data)
        });
    };

    let searchItemCC = (req, res) =>{
        console.log("entering searchItemCC");
        console.log("REQ.QUERY: ", req.query);
        db.item.search(req.query, (err, result) =>{
            console.log("back in searchItemCC");
            console.log("Search Result(s): ", result);
            res.redirect('/items')
        });

    };

   /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getAllItems: getAllItemsCC,
        createItem: createItemCC,
        editItem: editItemCC,
        deleteItem: deleteItemCC,
        sortAllItems: sortAllItemsCC,
        searchItems: searchItemCC
    };

};