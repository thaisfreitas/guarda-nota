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
  describe('GET /invoices', () => {
    it('should return a list of invoices', done => {
      request
        .get('/invoices')
        .end((err, res) => {
          expect(res.body[0]).to.eql(defaultInvoice);
          done(err);
        });
    });
  });
});