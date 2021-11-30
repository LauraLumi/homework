const express = require('express') //Impordime express serveri
const app = express() //Teeme rakenduse
const path = require('path') //Kaustade "liitmiseks"
//const {v4: uuid} = require('uuid') //Unikaalne ID
//const methodOverride = require('method-override') 
const fs = require('fs')
const filename = 'ExportJson.json'
const myfuncs = require('./helpers/myfuncs')

app.use(express.static(path.join(__dirname, 'node_modules/bulma')))
//app.use(express.urlencoded({extended: true})) //POST method
app.use(express.json()) //GET jaoks
//app.use(methodOverride('_method')) // Edit ja delete jaoks!

app.set('views', path.join(__dirname, 'views')) //Kaust view jaoks t2ispikk kaustatee
app.set('view engine', 'ejs') //Template https://ejs.co/

if(fs.existsSync(filename)) {
    fs.readFile(filename, 'utf-8', function (error, data) {
        if(error) throw error;
        names = JSON.parse(data)
    })
} else {
    console.log("Faili " + filename + ' ei leitud!')
}


//console.log(__dirname)
//ROUTES tegemine
//Avaleht
app.get('/', (req, res) => {
    title = 'Avaleht';
    res.render("index.ejs", {names, myfuncs});
})

app.get('*', (req, res) => {
    title = 'Avaleht';
    res.render("index.ejs", {title});
})

app.get('views/:id', (req, res) => {
    const { id } = req.params; // Urlilt saadud ID
    const name = names.find(c => c.id === id); //leitud kommentaar
    if(names.find(c => c.id === id)){
        res.render('show.ejs', {title, name}); //n2ita lehte selle id-ga
        title = 'Detailne info'; //tabi nime muutmine
    } else {
        res.render('404', {title})
        title = 'Error 404'
    }
    
})

//Serveri k2ivitamine pordil 3000
app.listen(3000, () => {
    console.log("Kuulan porti 3000")
})
