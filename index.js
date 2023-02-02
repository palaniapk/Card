const express = require('express');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const app = express();
const card = require('./routes/card.js');
app.use(express.json());
 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  // Routes will be written here
app.use('/api', card); 
app.use('/api/card', card);
// app.get('/', (req, res)=>{
//    if( myCache.keys()) {
//     res.status(200).send( myCache.mget(myCache.keys()));
//    }
// })
 
//CREATE Request Handler
// app.post('/api/cards', (req, res)=> {
// cardDetails = req.body;
// console.log(cardDetails);
// success = myCache.set(req.body.id, cardDetails);
// if (success) { 
//     res.status(200).send(cardDetails);
// }
// });
 

 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
