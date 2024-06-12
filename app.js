require('dotenv').config()

const express = require('express')
const app = express()
//const articles = [{title: "Example 0"}, {title: "Example 1"}, {title: "Example 2"}]
const Article = require('./db').Article
const bodyParser = require('body-parser')

app.set('port', process.env.PORT||3001)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/articles', (req, res, next)=> {
    Article.all((err, articles)=> {
        if (err) return next(err)
        res.send(articles)
    })
})

app.post('/articles', (req, res, next)=> {
    const article = { title: req.body.title}
    articles.push(article)
    res.send(article)
})

app.get('/articles/:id', (req, res, next)=> {
    const id = req.params.id
    Article.find(id, (err)=>{
        if (err) return next(err)
        res.send(articles)
    })
})

app.delete('/articles/:id', (req, res, next)=> {
    const id = req.params.id
    Article.find(id, (err)=>{
        if (err) return next(err)
        res.send({message: 'deleted'})
    })
})

app.listen(app.get('port'), ()=> {
    console.log(`Web app available at http://127.0.0.1:${app.get('port')}`)
})

module.exports = app