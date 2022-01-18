/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { FormB } = require('../models/FormB');

/**
* Creates the data
*
* formB FormB data to be created
* returns formB
* */
const createformB = ({ formB }) => new Promise(
  async (resolve, reject) => {
    try {
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* formBId String the Id parameter
* no response value expected for this operation
* */
const deleteformB = ({ formBId }) => new Promise(
  async (resolve, reject) => {
    try {
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllformB = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await FormB.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* formBId String the Id parameter
* returns formB
* */
const getformB = ({ formBId }) => new Promise(
  async (resolve, reject) => {
    try {
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* formBId String the Id parameter
* formB FormB data to be updated (optional)
* returns formB
* */
const updateformB = ({ formBId, formB }) => new Promise(
  async (resolve, reject) => {
    try {
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createformB,
  deleteformB,
  getAllformB,
  getformB,
  updateformB,
};
