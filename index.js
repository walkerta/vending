var express = require('express');
var app = express();
var request = require('supertest');
var mongoose = require('mongoose');
var session = require('session');
var bodyParser = require('body-parser');
var assert = require('assert');

module.exports = function(chai, utils) {
    var Assertion = chai.Assertion;


    if (require.main === "module") {
      app.listen(3000, function() {
        console.log('Express running on http://localhost:3000/.')
      });
    }

    module.exports = app;

    //list of current items with cost and quanity of each
    app.get('/items', function(req, res) {
      res.status(200).json({});
    });

    app.get('/notes', function(req, res) {
      res.json({
        notes: "This is your notebook. Edit this to start saving your notes!"
      })
    })

    app.listen(3000);


    //POST /api/customer/items/:itemId/purchases - purchase an item

    request(app)
      .post('/api/customer/items/:itemId/cost')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('cost')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

    app.post('/cost', function(req, res) {
      res.status(200).json({});
    });


    //GET /api/customer/items - get a list of items

    request(app)
      .get('/api/customer/items')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('cost')
      .expect('quanity')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

    app.post('/item', function(req, res) {
      res.status(200).json({});
    });




    request(app)
      .post('/api/customer/items/:itemId/money_given')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('cost')
      .expect('money_given')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

    app.post('/money_given', function(req, res) {
      res.status(200).json({});
    });


    request(app)
      .get('/api/customer/items/:itemId/quanity')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('description')
      .expect('quanity')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

    app.get('/quanity', function(req, res) {
      res.status(200).json({});
    });
    //GET /api/vendor/money - get a total amount of money accepted by the machine

    request(app)
      .get('/api/vendor/money_collected')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('money_collected')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
    app.get('/money_collected', function(req, res) {
      res.status(200).json({});
    });




    //POST /api/vendor/items - add a new item not previously existing in the machine
    request(app)
      .post('/api/vendor/items')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('items')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
    app.post('/items', function(req, res) {
      res.status(200).json({

      });
    });


    //GET /api/vendor/purchases - get a list of all purchases with their item and date/time

    request(app)
      .get('/api/customer/items/:itemId/purchases')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('purchses')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

    app.get('/purchases', function(req, res) {
      res.status(200).json({

      });
    });

    //PUT /api/vendor/items/:itemId - update item quantity, description, and cost

    request(app)
      .put('/api/vendor/items/:itemId')
      .expect('Content-Type', /json/)
      .expect('data', [{}])
      .expect('status', 'success')
      .expect('description')
      .expect('quanity')
      .expect('cost')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

    app.put('/:itemId', function(req, res) {
          res.status(200).json({

          });
