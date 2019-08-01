module.exports = (app, allModels) => {

  // require the controller
  const itemCC = require('./controllers/item-controller')(allModels);
  const accountCC = require('./controllers/account-controller')(allModels);
    /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */


  app.get('/items/', itemCC.getAllItems);
  app.post('/items/new', itemCC.createItem);
  app.put('/items/:id', itemCC.editItem);
  app.delete('/items/:id', itemCC.deleteItem);


  app.get('/test', accountCC.test);
};