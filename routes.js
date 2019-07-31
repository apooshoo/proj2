module.exports = (app, allModels) => {

  // require the controller
  const itemCC = require('./controllers/item-controller')(allModels);
  const accountCC = require('./controllers/account-controller')(allModels);
    /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */


  app.get('/', itemCC.getAllItems);
  app.post('/create', itemCC.createItem);


  app.get('/test', accountCC.test);
};