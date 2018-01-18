import InvoiceController from '../../src/controllers/invoices';
import sinon from 'sinon';
import Invoice from '../../src/models/invoice'

describe('Controllers: Invoices', () => {

  const defaultInvoice = [{
    name: 'Default Invoices',
    description: 'Invoices description',
    price: 100
  }];

  describe('get() invoices', () => {
    it('should call send with a list of invoices', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };
      
      Invoice.find = sinon.stub();
      Invoice.find.withArgs({}).resolves(defaultInvoice);

      const invoiceController = new InvoiceController(Invoice);
      return invoiceController.get(request, response)
        .then(() => {
          sinon.assert.calledWith(response.send, defaultInvoice);
        });
    });

  });
});