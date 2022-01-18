/**
 * The FormBController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/FormBService');
const createformB = async (request, response) => {
  await Controller.handleRequest(request, response, service.createformB);
};

const deleteformB = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteformB);
};

const getAllformB = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllformB);
};

const getformB = async (request, response) => {
  await Controller.handleRequest(request, response, service.getformB);
};

const updateformB = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateformB);
};


module.exports = {
  createformB,
  deleteformB,
  getAllformB,
  getformB,
  updateformB,
};
