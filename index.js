const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')

const server = http.createServer(app)
server.listen(8080)

const users = []

class user {
    constructor(body) {
        this.name = body.name
        this.age =body.age
        this.course = body.course
        this.grade = body.grade
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
    user.users.push(new user(req.body))
    res.end('success')
})

app.use((req, res) => {
    res.end('end')
})
