const express = require('express')
const routes = express.Router()

const multer = require('multer')


const cookieParser = require("cookie-parser");

routes.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/uploads`)
    },
    filename: function (req, file, cb) {
        const type = file.mimetype.split("/")[1]
        const random = Math.floor(Math.random() * (500 - 1)) + 1
      cb(null, `${Date.now()}_${random}.${type}`)
    }
  })

const upload = multer({storage: storage})

const UserController = require('./controllers/UserController')
const AuthenticationController = require('./controllers/AuthenticationController')
const ApplicationController = require('./controllers/ApplicationController')
const OngController = require('./controllers/OngController')


routes
    //Users Routes
    .post('/user', UserController.selectById)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    //Login
    .post('/login', AuthenticationController.auth)
    //Application
    .post('/application', upload.fields([{ name: 'rg_front', maxCount: 1 }, { name: 'rg_verse', maxCount: 1 }]), ApplicationController.create) 
    .delete('/application/:id', ApplicationController.delete)
    .put('/application/:id', ApplicationController.done)
    .get('/application/:id', ApplicationController.selectById)
    .get('/application/ong/:ong_id', ApplicationController.selectByOngId)
    .get('/application/user/:user_id', ApplicationController.selectByUserId)
    .post('/application/confirm/:id', ApplicationController.ong_confirm)
    //Ongs
    .get('/ong/:id', OngController.GetOngs)
    .post('/ong', OngController.auth)


module.exports = routes;