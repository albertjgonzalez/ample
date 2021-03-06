const db = require("../models");

// Defining methods for the samplessController
module.exports = {
  findAll: function(req, res) {
    db.samples
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByType: function(req, res) {
    console.log(req.params)
    db.samples
      .find(req.params)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  create: function(req, res) {
    db.samples
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.samples
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.samples
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
