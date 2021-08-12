const { Router } = require("express");
const express = require('express');

const app = express();

const router = Router();

router.get('/', function (req, res) {
    console.log('Ass');
    res.status(200).json('Ass')
    
})
app.use('/api', router);

app.listen(5000, () => {
    console.log('Server listening on port 5000.')
})

// Kill route to demonstrate? 