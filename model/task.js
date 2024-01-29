const mongoose = require('mongoose');

const Task = mongoose.model('Task', mongoose.Schema({
    title:{type: String, require: true},
    owner: {type: mongoose.Schema.Types.ObjectId},
    status: {type: String, enum:['completed', 'incomplete', 'pending'], default: 'incomplete'},
    createdAt: {type: Date}
}))

module.exports = Task;