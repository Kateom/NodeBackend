const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello This is routing topics"); 
}); 

router.post('/items', (req, res) => {
    res.json({name: "rahul"}); 
}); 

router.put('/items/:id', (req, res) => {
    res.send("Thi is the put request"); 

})

router.delete('/items/:id', (req, res) => {
    res.send("This is the delete request");
});


module.exports = router;




router.post('/', (req, res) => {
    res.json({name: "rahul"});
})