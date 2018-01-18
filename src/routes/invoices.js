import express from 'express';
import InvoiceController from '../controllers/invoices';

const router = express.Router();
const invoicesController = new InvoiceController();

router.get('/', (req, res) => invoicesController.get(req, res));

export default router;