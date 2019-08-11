const { Schema, model } = require('mongoose');

const devSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
        timestamps: true // Cria uma coluna createdAt, e outra updateAt automáticamente em cada registro salvo no bd.
    });

module.exports = model('Dev', devSchema); //model('NomeUtilizado',EsquemaUtilizado);