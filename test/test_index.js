/*
* Filename: test_index.js
* Purpose: Test the index.js file
*
*/

// Import the files required for test
const index = require('../routes/index');
var path = require('path');

// Import testing library
const supertest = require('supertest');

// Setup an express app
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use('/', index);

// Run the test case for How To Use Page
describe("GET method for the /howtouse endpoint", function() {
    beforeEach(() => {
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'ejs');
    })
    it("should have status code of 200", function(done) {
        supertest(app)
            .get('/howtouse')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200)
            .end(function(err, res) {
                if (err) done(err);
                done();
            });
    });
});

// Run the test case for Contact Us Page
describe("GET method for the /contactus endpoint", function() {
    beforeEach(() => {
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'ejs');
    })
    it("should have status code of 200", function(done) {
        supertest(app)
            .get('/contactus')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200)
            .end(function(err, res) {
                if (err) done(err);
                done();
            });
    });
});