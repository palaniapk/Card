
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
 const getCard=(req, res)=>{
    if( myCache.keys()) {
     res.status(200).send( myCache.mget(myCache.keys()));
    }
 }
 const postCard = (req, res)=> {
   cardDetails = req.body;
   success = myCache.set(req.body.id, cardDetails);
   if (success) { 
       res.status(200).send(cardDetails);
   }
   };

// Export of all methods as object
module.exports = {
   getCard,
   postCard
}