const { Router } = require("express");
const express = require('express');
var os = require("os");
var hostname = os.hostname();

const app = express();

const router = Router();

router.get('/', function (req, res) {
    console.log('Ass');
    res.status(200).json('Ass')
    
})

router.get('/kill', function(req, res){
    console.error("succesfully dead: " + hostname)
    res.status(200).json("succesfully dead: "+ hostname)
    process.exit();
})

router.get('/name', function(req, res){
    console.log("I am: " + hostname)
    res.status(200).json("I am: "+ hostname)
})


app.use('/api', router);

app.listen(5000, () => {
    console.log('Server listening on port 5000.')
})
