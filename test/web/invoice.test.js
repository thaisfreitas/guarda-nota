describe('Routes: Invoices', () => {
  let request;

  before( ()=> {
    return setupApp()
      .then(app => {
        request = supertest(app)
      })
  });

  const defaultInvoice = {
    name : 'Posto de Gasolina',
    cnpj : '0987654321',
    price: 'R$ 100,00'
  };

  describe('GET /invoices', () => {
    it('should return a list of invoices', done => {
      request
      .get('/invoices')
      .end((err, res) => {
        console.log(res.body[0]);
        expect(defaultInvoice);
        done(err);
      });
    });
  });
});
