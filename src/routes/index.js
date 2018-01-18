import express from 'express';
import invoicesRoute from './invoices';

const router = express.Router();

router.use('/invoices', invoicesRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;