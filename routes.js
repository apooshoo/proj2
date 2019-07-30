module.exports = (app, allModels) => {
  /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */

  // require the controller
  const itemCC = require('./controllers/item-controller')(allModels);
  const accountCC = require('./controllers/account-controller')(allModels);


  app.get('/', itemCC.getAllItems);
  app.get('/test', accountCC.test);


};