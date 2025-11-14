const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/hello', (req,res)=>res.json({message:'Hello'}));

app.listen(5000, ()=>console.log('Backend running'));