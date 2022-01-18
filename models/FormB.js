
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formBSchema = new Schema({
Underscoreid:String , 

formNameB:String 


})

module.exports = {
  FormB : mongoose.model('FormB', formBSchema),
}

