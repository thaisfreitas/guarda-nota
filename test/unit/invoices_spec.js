let InvoicesController = require('../../src/controllers/invoices');
const sinon = require('sinon');

describe('Controllers: Invoces', () => {
  const defaultInvoice = [{
    name : 'Posto de Gasolina',
    cnpj : '0987654321',
    price: 'R$ 100,00'
  }];

  describe('get() invoices', () => {
    it('should return a list of invoices', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      const invoicesController = new InvoicesController();
      invoicesController.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(defaultInvoice)).to.be.true;
    });
  });

});
