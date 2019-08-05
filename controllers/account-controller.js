const sha256 = require('js-sha256');
const SALT = "bonk";
const loggedInTrue = sha256('true' + SALT);


module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let startCC = (req, res) => {
        console.log('starting');
        if (req.cookies.loggedIn === loggedInTrue){
            console.log('already logged in!');
            res.redirect('items');
        } else {
            res.render('start');
        }
    }

    let registerCC = (req, res) => {
        console.log("entering registerCC");
        console.log("checking cookies");
        console.log(req.cookies);
        if (req.cookies.loggedIn === loggedInTrue){
            console.log("already logged in!");
            res.redirect('/items');
        }else{
            console.log("REQ QUERY: ", req.query);
            db.account.register(req.query, (err, result) => {
                if(result){
                    console.log("result in registerCC", result);
                    res.cookie('userid', result[0].id);
                    res.cookie('loggedIn', loggedInTrue);
                    res.cookie('username', result[0].username);
                    res.redirect('/items');
                }else{
                    console.log('user already exists');
                    res.redirect('/');
                }
            });
        }
    };
    //----------------------------------------------in progress----------------------------------------
    let loginCC = (req, res) =>{
        if (req.cookies.loggedIn === loggedInTrue){
            console.log("already logged in!");
            res.redirect('/items');
        }else{
            console.log("logging in!");
            console.log("REQ QUERY: ", req.query);
            db.account.login(req.query, (err, result) =>{
                if(result){
                    console.log("Logged in user: ", result);
                    res.cookie('userid', result[0].id);
                    res.cookie('loggedIn', loggedInTrue);
                    res.cookie('username', result[0].username);
                    res.redirect('/items');
                }else{
                    console.log('login failed!');
                    res.redirect('/');
                }
            });
        }
    };

    let logoutCC = (req, res) =>{
        console.log("logging out!");
        res.clearCookie('userid');
        res.clearCookie('loggedIn');
        res.clearCookie('username');
        res.redirect('/');
    };

    //THIS USES SETTINGS SHOW MODELS
    let getAllStatsCC = (req, res) =>{
        console.log("entering getAllStatsCC");
        console.log("req.param: ", req.params);
        db.settings.show(req.params, (err, stats) => {
            // console.log("Stats: ", stats);
            if(stats){
                db.item.getCreditors(req.params, (err, creditors) => {
                    console.log("items grouped by creditors: ", creditors);
                    if(creditors){
                        db.item.getTotalSpend(req.params, (err, totalSpend) => {
                            console.log("total spend: ", totalSpend);
                            let data = {
                                stats: stats[0],
                                creditors: creditors,
                                totalSpend: totalSpend[0],
                                cookies: req.cookies
                            };
                            res.render('user', data);
                        });
                    } else {
                        console.log("no items yet!");
                        res.redirect('/items');
                    };
                });
            } else {
                console.log("no settings yet!");
                let data = {
                    cookies: req.cookies
                };
                res.render('blank-settings', data);
            };
        });


        // res.redirect('/items');
    };



    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        start: startCC,
        register: registerCC,
        login: loginCC,
        logout: logoutCC,
        getAllStats: getAllStatsCC,
    };

};