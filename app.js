const server = require('express');
const app = server();
const port =3030;
const path =require('path')

app.use(server.static('public'))

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','home.html')))
app.listen(3030,() => console.log('Servidor ejecutado en el puerto '+port)) 