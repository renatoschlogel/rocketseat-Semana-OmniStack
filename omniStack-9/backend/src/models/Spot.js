const { Schema, model } = require('mongoose'); 

const SpotSchema = new Schema({
    thumbnail: String,
    company: String,
    price: String,
    techs: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = model('Spot', SpotSchema);