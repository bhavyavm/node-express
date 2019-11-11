import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import user_router from './routes/user';

const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

router.get('/', function (req, res, next) {
  res.send('Welcome to the Kushy API');
});


app.use('/users',user_router(router))

app.listen(process.env.PORT, () => {
    console.log(`port works ${process.env.PORT}`);
})
console.log('inside index.js');
console.log(process.env.MY_SECRRET);