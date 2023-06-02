const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const port = 3000;


app.get('/', (req, res) => {
  res.send('API is working');
})
//usuario
app.post('/user',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO usuarios(id_usuario, nombres, apellidos, num_cel, correo, ciudad) 
  VALUES ('${body.ci}','${body.firstName}','${body.lastName}','${body.telf}','${body.email}','${body.city}');`;
  //connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

//conductor
app.post('/driver',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO conductores(id_conductor, num_placa, nombre, apellido, num_cel, correo, ciudad) 
  VALUES ('${body.ci}','${body.placa}','${body.firstName}','${body.lastName}','${body.telf}','${body.email}','${body.city}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})


//Vehiculo
app.get('/vehicle', (req, res) => {
  res.send('API is working');
})

app.post('/vehicle',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO vehiculo(placa, marca, color, capacidad) 
  VALUES ('${body.placa}','${body.marca}','${body.color}','${body.capacidad}');`;
  
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//pagos
app.get('/pagos', (req, res) => {
  res.send('API is working');
})
app.post('/pagos',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO pagos(id_pago, monto, tipo_pago, id_conductor,id_usuario) 
  VALUES ('${body.id_pago}','${body.monto}','${body.tipo_pago}','${body.id_conductor}','${body.id_usuario}');`;
  
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

//comentarios
app.post('/comentarios',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO comentarios(id_comentario,id_usuario,id_conductor,comentario) 
  VALUES ('${body.id_comentario}','${body.id_usuario}','${body.id_conductor}','${body.comentario}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})


const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'pass',
  database: 'db1'

  
})

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`);
});

connection.connect();
