import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import models from './models';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school'
});
connection.connect();
connection.query('SELECT * FROM student', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows)
  })
  
  connection.end()

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});
app.use('/users', routes.user);

app.listen(process.env.PORT, () => {
    console.log(`port works ${process.env.PORT}`);
})
console.log('inside index.js');
console.log(process.env.MY_SECRRET);