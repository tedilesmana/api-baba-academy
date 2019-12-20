var mongoose = require('mongoose')

var CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
}, {
    timestamps: true
})

var Course = module.exports = mongoose.model('courses', CourseSchema)