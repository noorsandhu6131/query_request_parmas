const express = require('express');
const app =express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    const id = req.params.id;
    const username = req.params.username;
    res.send(`user id: ${id}. Username: ${username}`);
});

app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`);
});
