import Invoice from '../../../src/models/invoice';

describe('Routes: Invoices', () => {

  let request;

  before(() => {
    return setupApp()
      .then(app => {
        request = supertest(app)
      })
  });

  const defaultInvoice = {
    name: 'Default Invoices',
    description: 'Invoices description',
    price: 100
  };

  const expectedInvoice = {
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    name: 'Default Invoices',
    description: 'Invoices description',
    price: 100
  };

  //setting up for database
  beforeEach(() => {
    const invoice = new Invoice(defaultInvoice);
    invoice._id = '56cb91bdc3464f14678934ca';
    return Invoice.remove({})
      .then(() => invoice.save());
  });

  //clear the database
  afterEach(() => {
    Invoice.remove({});
    Invoice.db.close();
  });

  describe('GET /invoices', () => {
    it('should return a list of invoices', done => {
      request
        .get('/invoices')
        .end((err, res) => {
          expect(res.body).to.eql([expectedInvoice]);
          done(err);
        });
    });
  });
});