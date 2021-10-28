const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//Define paths foe Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome to Nodejs Server'
    })
})

//404 handling for help
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Detorav Technolgies',
        errorMessage: 'Help article not found'
    })
})

//404 error handling
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Detorav Technologies',
        errorMessage: 'Page not found.'

    })
})

//Starting the express server
app.listen(port, () => {
    console.log('Server is running on port 3000')
})
