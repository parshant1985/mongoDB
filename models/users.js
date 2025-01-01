const { default: mongoose, model } = require('mongoose');

const userScema = mongoose.Schema({
    name: { type: String, required:true, default: 'prashant' },
    age: { type: Number, min: 18, index: true },
    email: {type:String},
    
  }, {
    timestamps:true
 });

 const user =  mongoose.model('user', userScema)

  module.exports = user