const sha256 = require('js-sha256');
const SALT = "bonk";
const loggedInTrue = sha256('true' + SALT);

module.exports = (db) => {

    // *
    //  * ===========================================
    //  * Controller logic
    //  * ===========================================

    //get stats included in this
    let getAllItemsCC = (req, res) => {
        if(req.cookies.loggedIn === loggedInTrue){
            console.log("starting getAllItemsCC");
            let requestdata = {
                cookies: req.cookies
            }
            db.item.getAll(requestdata, (err, result) => {
                console.log("back in getAllItemsCC");
                if (result){
                        let data = {
                        itemsData: result,
                        cookies: req.cookies
                    };
                    res.render('home', data);
                } else {
                    res.render('blank-home');
                }
            });
        } else {
            res.render('start');
        }

    };

    let createItemCC = (req, res) => {
        console.log("entering createItemCC");
        let requestdata = {
            cookies: req.cookies,
            body: req.body
        };
        console.log("requestdata: ", requestdata);
        db.item.create(requestdata, (err, result) => {
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
        let requestdata = {
            cookies: req.cookies,
            query: req.query
        };
        console.log("requestdata: ", requestdata);
        db.item.sortAll(requestdata, (err, result) =>{
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
            let data = {
                itemsData: result
            };
            res.render('single-item', data);
        });
    };

    let getItemCC = (req, res) => {
        console.log("entering getItemCC");
        console.log("req. params: ", req.params);
        db.item.getItem(req.params, (err, result) => {
            console.log("back in getItemCC");
            console.log("getItem result: ", result);
            let data = {
                cookies: req.cookies,
                itemsData: result
            };
            res.render('single-item', data);
        });
    }

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
        searchItems: searchItemCC,
        getItem: getItemCC
    };

};