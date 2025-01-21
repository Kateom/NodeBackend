const express = require('express'); 

const router = express.Router(); 

router.get('/', (req, res) => {
    res.send('Birds homepage!');
}); 

router.get('/about', (req, res) => {
    res.send("Birds About Page"); 
}); 

module.exports = router; 