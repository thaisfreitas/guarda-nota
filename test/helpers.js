const chai = require ('chai');
const supertest = require ('supertest');
const setupApp = require('../src/app.js');

global.setupApp = setupApp;
global.supertest = supertest;

global.expect  = chai.expect;
