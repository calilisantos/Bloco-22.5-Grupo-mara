const express = require('express');

const route = express.Router();

route.post('/sales', (req,res) => {
  const {productName, infos } = req.body;
 
  if(!productName) {
    return res.status(400).json({message: "O campo productName é obrigatório"}); 
   }

  if(productName.length <= 4) {
   return res.status(400).json({message: "O campo productName deve ter pelo menos 4 caracteres"}); 
  }

  if(!infos) {
    return res.status(400).json({message: "O campo infos é obrigatório"}); 
   }

  res.send('Adicionado com sucesso');
});

module.exports = route;