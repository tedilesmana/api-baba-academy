const courseController = require('../controller/courseController')
// const auth = require('../middleware/auth.js')

module.exports = app => {

    //api course
    app.get('/course', courseController.listCourse)
    app.get('/course/:id', courseController.detailCourse)
    app.post('/course/', courseController.tambahCourse)
    app.put('/course/:id', courseController.ubahCourse)
    app.delete('/course/:id', courseController.hapusCourse)

    //get token
    // app.post('/gettoken', userController.getToken)

}