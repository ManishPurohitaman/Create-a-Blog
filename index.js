const express = require('express')
const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const BlogPost = require('./models/BlogPost.js')
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

const path = require('path');

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/post', (req, res) => {
    res.render('post')
})
app.get('/posts/new', (req, res) => {
    res.render('create')
})
app.post('/posts/store', (req, res) => {
    // model creates a new doc with browser data
    BlogPost.create(req.body, (error, blogpost) => {
        res.redirect('/')
    })
})
app.get('/', async(req, res) => {
    const blogposts = await BlogPost.find({})
    res.render('index', {
        blogposts
    });
})
app.get('/post/:id', async(req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
})