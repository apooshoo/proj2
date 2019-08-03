const pg = require('pg');
const url = require('url');

var configs;

configs = {
        user: 'apooshoo',
        password: 'neilgaiman1',
        host: '127.0.0.1',
        database: 'proj2',
        port: 5432
    };


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});


/**
 * ===========================================
 * Require Model Files
 * ===========================================
 */
const allItemsModelsFunction = require('./models/item-model');
const allAccountModelsFunction = require('./models/account-model');
const allSettingsModelsFunction = require('./models/settings-model');


const itemsModelsObject = allItemsModelsFunction(pool);
const accountModelsObject = allAccountModelsFunction(pool);
const settingsModelsObject = allSettingsModelsFunction(pool);


/**
 * ===========================================
 * Module Exports
 * ===========================================
 */
module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool,

    /*
     * ADD APP MODELS HERE
     */

    item: itemsModelsObject,
    account: accountModelsObject,
    settings: settingsModelsObject
};