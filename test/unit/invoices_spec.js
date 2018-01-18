import InvoicesController from '../../src/controllers/invoices';
import sinon from 'sinon';

describe('Controllers: Invoices', () => {

  const defaultInvoice = [{
    name: 'Default Invoices',
    description: 'Invoices description',
    price: 100
  }];

  describe('get() invoices', () => {
    it('should return a list of Invoices', () => {
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