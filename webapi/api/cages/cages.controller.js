var _ = require('lodash')
//var datastore = require('../datastore');
var Cage = require('./cage.model');

// Get list of cagess
function handleError(res, err) {
    return res.status(500).json(err);
}

exports.index = function (req, res) {
    Cage.find(function (err, cages) {
        if (err) { return handleError(res, err); }
        console.log('index ok' + cages[0]);
        return res.status(200).json(cages);
    });
};

// Creates a new contact in datastore.
exports.create = function (req, res) {
    Cage.create(req.body, function (err, cage) {
        if (err) { return handleError(res, err); }
        return res.status(201).json(cage);
    });
};


// Update an existing contact in datastore.
exports.update = function (req, res) {
    Cage.findById(req.params.id, function (err, cage) {
        if (err) { return handleError(res, err); }
        cage.price = req.body.price
        cage.name = req.body.name
        cage.imageUrl = req.body.imageUrl
        cage.snippet = req.body.snippet
        cage.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.sendStatus(200, 'Update successful');
        });
    });
}

exports.destroy = function (req, res) {
    Cage.findById(req.params.id, function (err, cage) {
        if (err) { return handleError(res, err); }
        cage.remove(function (err) {
            if (err) { return handleError(res, err); }
            return res.sendStatus(200, 'Deleted');
        });
    })
}