const courseController = require('../controller/courseController')
const userController = require('../controller/userController')
const auth = require('../middleware/auth.js')

module.exports = app => {

    //api course
    app.get('/course', courseController.listCourse)
    app.get('/course/:id', courseController.detailCourse)
    app.post('/course/', courseController.tambahCourse)
    app.put('/course/:id', courseController.ubahCourse)
    app.delete('/course/:id', courseController.hapusCourse)

    //api users
    app.get('/user', userController.listUser)
    app.get('/user/:id', userController.detailUser)
    app.post('/user/', userController.tambahUser)
    app.put('/user/:id', userController.ubahUser)
    app.delete('/user/:id', userController.hapusUser)

    //get token
    app.post('/gettoken', userController.getToken)

}