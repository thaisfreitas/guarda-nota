class InvoicesController {

  constructor(Invoice) {
    this.Invoice = Invoice;
  }

  get(req, res) {
    return this.Invoice.find({})
      .then(invoices => res.send(invoices))
      .catch(err => res.status(400).send(err.message));
  }
}

export default InvoicesController;