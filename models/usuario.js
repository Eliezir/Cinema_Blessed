module.exports = function(app) {
    const mongoose = require('mongoose');

    let Schema = require("mongoose").Schema;

    let comentario = Schema({
        filme: String,
        review: String,
        nota: Number,
        poster: String,
    });

    let users = Schema({
        user: {type: String, required: true, index:{unique: true}},
        nome: String,
        instagram: String,
        twitter: String,
        bio: String,
        senha: {type: String, required: true},
        icon: String,
        followers: Array,
        following: Array,
        watchlist: Array,
        comentarios: [comentario],
        });

       return mongoose.model('users', users);
    
}

