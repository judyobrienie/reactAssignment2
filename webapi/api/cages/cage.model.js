var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CageSchema = new Schema({
    price: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    snippet:{type:String, required:true}
});

module.exports = mongoose.model('cages', CageSchema);