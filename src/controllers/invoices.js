class InvoicesController {

  constructor(Invoice) {
    this.Invoice = Invoice;
  }

  get(req, res) {
    return this.Invoice.find({})
      .then(invoices => res.send(invoices));
  }
}

export default InvoicesController;