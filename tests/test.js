// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("User Accounts", () => {
    describe("GET /", () => {
        // Test to get all user accounts
        it("Should get all accounts", (done) => {
            chai.request(app)
                .get('/account')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single account
        it("Should get Dustin's account", (done) => {
            const id = '61581111f934cda67fd18803';
            chai.request(app)
                .get(`/account/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        
        // Test to fail
        it("Should not get a single account due to wrong ID", (done) => {
            const id = '1';
            chai.request(app)
                .get(`/accounts/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe("POST /", () => {
        // Test to create a new user account
        it("Should create a new user account", (done) => {
            chai.request(app)
                .post('/account')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({name: 'Bryan', email: 'bryanics004@gmail.com', gender: 'Male', phone: '9238 9322'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
    describe("PUT /", () => {
        // Test to update user account
        it("Should update existing user account", (done) => {
            const id = '61581145b6e2381279f18a49';
            chai.request(app)
                .put(`/account/${id}`)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({name: 'Jane', email:'Jane19@gmail.com', gender: 'Female', phone: '9999 9112'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
    describe("DELETE /", () => {
        // Test to delete a user account
        it("Should delete Dave's user account", (done) => {
            const id = '61581efdb6439585be3eafbf';
            chai.request(app)
                .delete(`/account/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});