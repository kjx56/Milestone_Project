
const express = require('express');
       const app = express();
const fs = require('fs');
       const PORT = 8000;
       app.use(express.static(__dirname));
       app.listen(PORT);
       app.get('/Milestone', (request, response) => {
           response.sendFile(__dirname + '/index.html');
           
       });
       
          
       