'use strict';
const userController = require('../controller/userController');
module.exports = function (router) {
  router.get("/get-all",userController.getAllusers);
  router.get("/get-all2",userController.getAllusers);
  router.get("/get-all3",userController.getAllusers);
  router.get("/get-all4",userController.getAllusers);
  router.get("/get-all5",userController.getAllusers);
  router.get("/get-all6",userController.getAllusers);
  router.get("/get-all7",userController.getAllusers);
  return router;
};