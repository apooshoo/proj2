const sha256 = require('js-sha256');
const SALT = "bonk";
const loggedInTrue = sha256('true' + SALT);

module.exports = (db) => {

    let showSettingsCC = (req, res) => {
        console.log("entering showSettingsCC");
        console.log("req.params: ", req.params);
        db.settings.show(req.params, (err, result) => {
            console.log("back in showSettingsCC");
            console.log("settings: ", result);
            res.redirect('/items');
        });

    };

    return {
        showSettings: showSettingsCC
    };

};