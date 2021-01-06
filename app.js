// require express and create an instance
const express = require('express');
const app = new express();




// nav bar
const nav = [
    {
        link:'/books',name:'books'
    },
    {
        link:'/authors',name:'authors'
    }
];
// requiring book handler from bookhandler.js
const bookhandler = require('./src/routes/bookrouter')(nav)
const author = require('./src/routes/author')(nav)
const signin = require('./src/routes/signin')
const login= require('./src/routes/login')
// const login = require('./src/routes/')(nav)

// setting route handler
app.use('/books',bookhandler)
app.use('/authors',author)
app.use('/signin',signin)
app.use('/login',login)
// app.use('/login',login)

// setting static files
app.use(express.static('./public'));

// setting template engine ejs
app.set('view engine','ejs');
app.set('views','./src/views');



// routing
app.get('/',(req,res)=>{
    res.render('index',
    {    nav,
        title:'library app'

    }
    );
    res.end();
})
app.get('/home',(req,res)=>{
    res.render('home',
    {    nav,
        title:'library app'

    }
    );
    res.end();
})

app.listen(5000);