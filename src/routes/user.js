import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    let student = {
        name: 'bhavya',
        language: 'maths'
    }
    return res.send(student);
});
router.put('/:userId', (req, res) => {
    const response = {
        status: 'success',
        data: req.context.models.users[req.params.userId],
      };
    return res.send(response);
  //  return res.send(`http put with params ${req.params.userId} from the request ${req.context.models.users[req.params.userId]}`);
});


router.post('/save', (req, res) => {
    return res.send('http post method');
});
router.put('/save', (req, res) => {
    return res.send("http put method");
});
router.delete('/delete', (req, res) => {
    return res.send("http method post");
});
export default router;