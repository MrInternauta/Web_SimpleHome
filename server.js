const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;
//midelware
app.use(express.static(__dirname + '/public'))
    //HBS
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs')



let helper = {
    nombre: 'Felipe',
    anio: new Date().getFullYear()
}
app.get('/', (req, res) => {
    res.render('home', )
})

app.get('/about', (req, res) => {
    res.render('about', )
})


//usar puerto por defecto
app.listen(port, () => console.log('Example app listening on port ' + port))