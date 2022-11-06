const express=require('express');
//in app it has got all the express related properties
const app=express();

app.get('/', (req , res) => {
res.send('Hello world');
})


app.get('/about', (req , res) => {
    res.send('Hello world about');
    })

    app.get('/contact', (req , res) => {
        res.send('Hello world contact');
        })

        app.get('/signin', (req , res) => {
            res.send('Hello world signin');
            })

            app.get('/signup', (req , res) => {
                res.send('Hello world signup');
                })
    
app.listen(3000 , ()=>{
    console.log('server is running at port no 3000');

})