const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    
    movieName:{
        type: String,
        required : true
    },
    
    directorName:{
        type: String,
        required : true
    },
    
    musicComposer:{
        type: String,
        required : true
    },
    releaseDate:{
        type: String,
        required : true
    },
    countryOrigin:{
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Movie',movieSchema)