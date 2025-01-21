const express = require('express');
const app = express();
const port = 3000;
const item = require('./Rourter/item'); 
const birds = require('./Rourter/birds'); 


app.use('/api', item);

app.use('/bird', birds);

// api/ => This is the get request
// api/items => this is the post request
// api/items/12 => this is the put request...


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});