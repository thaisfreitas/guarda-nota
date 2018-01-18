import express from 'express';
import InvoiceController from '../controllers/invoices';
import Invoice from '../models/invoice';

const router = express.Router();
const invoicesController = new InvoiceController(Invoice);

router.get('/', (req, res) => invoicesController.get(req, res));

export default router;