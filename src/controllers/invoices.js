class InvoicesController {

  get(req, res) {
    return res.send([{
      name: 'Default Invoices',
      description: 'Invoices description',
      price: 100
    }])
  }

}

export default InvoicesController;