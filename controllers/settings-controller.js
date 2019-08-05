const sha256 = require('js-sha256');
const SALT = "bonk";
const loggedInTrue = sha256('true' + SALT);

module.exports = (db) => {

    let showSettingsCC = (req, res) => {
        console.log("entering showSettingsCC");
        console.log("req.params: ", req.params);
        db.settings.show(req.params, (err, result) => {
            console.log("back in showSettingsCC");
            if(result){
                let x = result[0];
                let data = {
                    user_id: x.user_id,
                    pay_day: x.pay_day.toISOString().substring(0, 10),
                    next_pay_day: x.next_pay_day.toISOString().substring(0, 10),
                    pay_amount: x.pay_amount,
                    save_amount: x.save_amount,
                    cookies: req.cookies
                };
                console.log("DATA: ", data);
                res.render('settings', data);
            } else {
                //this really shouldnt happen if you prompt them early
                console.log('no settings yet!')
                let data = {
                    cookies: req.cookies
                };
                res.render('settings', data);
            }
        });
    };

    let editCC = (req, res) => {
        console.log("entering editCC");
        console.log("req.params: ", req.params);
        console.log("req.body: ", req.body);
        let requestdata = {
            params: req.params,
            body:req.body
        };
        db.settings.edit(requestdata, (err, result) => {
            console.log("back in editCC");
            if(result){
                console.log("edited result: ", result);
                res.redirect(`/${req.params.id}/settings`);
            } else {
                console.log('error in editing!');
            };

        });
    };

    let setSettingsCC = (req, res) => {
        console.log("entering setSettingsCC");
        console.log("req.params: ", req.params);
        console.log("req.body: ", req.body);
        let requestdata = {
            params: req.params,
            body:req.body
        };
        db.settings.setSettings(requestdata, (err, result) => {
            console.log("back in setSettingsCC");
            if(result){
                console.log("set settings: ", result);
                res.redirect(`/${req.params.id}/settings`);
            } else {
                console.log('error in setting settings!');
            };
        });
    };

    return {
        showSettings: showSettingsCC,
        edit: editCC,
        setSettings: setSettingsCC
    };

};