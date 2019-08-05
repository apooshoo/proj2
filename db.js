const pg = require('pg');
const url = require('url');

// var configs;

// configs = {
//         user: 'apooshoo',
//         password: 'neilgaiman1',
//         host: '127.0.0.1',
//         database: 'proj2',
//         port: 5432
//     };

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{

  //otherwise we are on the local network
  var configs = {
      user: 'apooshoo',
      password: 'neilgaiman1'
      host: '127.0.0.1',
      database: 'proj2',
      port: 5432
  };
}


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