var _ = require('lodash')
var datastore = require('../datastore');

// Get list of cagess
exports.index = function (req, res) {
    return res.status(200).json(datastore.cages);
};

// Creates a new cage in datastore.
exports.create = function (req, res) {
    var nextId = 0
    var last = _.last(datastore.cages)
    if (last != undefined) {
        nextId = last.id + 1
    } else {
        nextId = 1
    }
    var cage = {
        id: nextId,
        price:req.body.price,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        snippet: req.body.snippet
    };
    datastore.cages.push(cage)
    return res.status(201).json(cage);
};

// Update an existing cage in datastore.
exports.update = function (req, res) {
    var index = _.findIndex(datastore.cages, function (cage) {
        return cage.id == req.params.id;
    });
    if (index !== -1) {
        var id = datastore.cages[index].id;
        datastore.cages.splice(index, 1,
            {
                id:id,
                price: req.body.price, name: req.body.name, imageUrl: req.body.imageUrl,
                snippet: req.body.snippet
            });
        return res.sendStatus(200);
    }
    return res.sendStatus(404);
};

// Deletes a contact from datastore.
exports.destroy = function (req, res) {
    var elements = _.remove(datastore.cages,
        function (cage) {
            return cage.id == req.params.id;
        });
    if (elements.length == 1) {
        return res.sendStatus(200);
    } else {
        return res.sendStatus(404);
    }
};