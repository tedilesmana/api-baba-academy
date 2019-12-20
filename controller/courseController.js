const Course = require('../models/course')

exports.listCourse = async (req, res) => {
    let data = await Course.find()
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))
}

exports.detailCourse = async (req, res) => {
    const data = await Course.findById(req.params.id)
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))
}

exports.tambahCourse = async (req, res) => {
    const courses = new Course(req.body)
    const status = await courses.save()
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}

exports.ubahCourse = async (req, res) => {
    const { id } = req.params
    const status = await Course.update({ _id: id }, req.body)
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}

exports.hapusCourse = async (req, res) => {
    let { id } = req.params
    const status = await Course.remove({ _id: id })
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}