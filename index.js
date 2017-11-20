const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')
const simplemysql = require('./simple-mysql')

const server = http.createServer(app)
server.listen(8080)

const info = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wechart_upload'
}
const sql = 'select * from user'
const mysql = simplemysql(info)
mysql.middleware(sql)

const users = []

class user {
    constructor(name, age, course, grade) {
        this.name = name
        this.age = age
        this.course = course
        this.grade = grade
    }
    static get['users']() {
        return users
    }
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/user', (req, res) => {
    res.json(user.users)
})
app.post('/user', (req, res) => {
    user.users.push(new user(req.body.name, req.body.course, req.body.grade))
    res.json(user.users)
})

app.use((req, res) => {
    res.end('end')
})