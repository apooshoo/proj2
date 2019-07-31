const sha256 = require('js-sha256');
const SALT = "sAlT aNd PePpEr";

module.exports = (db) => {

    // *
    //  * ===========================================
    //  * Controller logic
    //  * ===========================================


    // let getAllQuotesCC = (req, res) => {
    //     console.log("entering controller");
    //     db.quote.getAllQuotes((err, result) => {
    //         console.log("RESULT IN CC: ", result);
    //         let data = {
    //             quotesData: result
    //         };
    //         res.render('home', data);
    //     });
    // };

    // let createQuoteCC = (req, res) => {
    //     console.log("entering createQuoteCC");
    //     console.log("REQ.BODY: ", req.body);
    //     db.quote.createQuote(req.body, (err, result) => {
    //         console.log("RESULT IN CC: ", result);
    //     });
    // };

    let getAllItemsCC = (req, res) => {
        console.log("entering getAllItemsCC");
        db.item.getAll((err, result) => {
            console.log("back in getAllItemsCC")
            console.log("result in getAllItemsCC: ", result);
            let data = {
                itemsData: result
            };
            res.render('home', data);
        });

    };

    let createItemCC = (req, res) => {
        console.log("entering createItemCC");
        console.log("req.body: ", req.body);
        db.item.create(req.body, (err, result) => {
            console.log("back in createItemCC")
        });
        res.redirect('/');
    }

   /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getAllItems: getAllItemsCC,
        createItem: createItemCC
    };

};