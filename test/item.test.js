var app = require('../app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('API tests', function() {
    it('should have return Server health checks', function(done) {
        request(app)
            .get('/')
            .end(function(err, res) {
                expect(body).to.equal('Server is healthy!.');
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
});

describe('API tests', function() {
    it('should have return ItemList', function(done) {
        request(app)
            .get('/')
            .end(function(err, res) {
                // expect(res.body.version).to.be.ok;
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
});