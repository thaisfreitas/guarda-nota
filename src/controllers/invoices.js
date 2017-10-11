class InvoicesController {

  get(req, res) {
    return res.send([{
      name : 'Posto de Gasolina',
      cnpj : '0987654321',
      price: 'R$ 100,00'
    }])
  }

}

module.exports = InvoicesController;
