const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.listAllWords = (req, res) => {
  Vocab.find({}, (err, words) => {
    if (err) {
      res.send(err);
    }
    res.json(words);
  });
};

exports.createWord = (req, res) => {
  const newWord = new Vocab(req.body);
  newWord.save((err, word) => {
    if (err) {
      res.send(err);
    }
    res.send(word);
  });
};

exports.readWord = (req, res) => {
  Vocab.findById(req.params.id, (err, word) => {
    if (err) {
      res.send(err);
    }
    res.json(word);
  });
};

exports.updateWord = (req, res) => {
  Vocab.findOneAndUpdate(
    {_id: req.params.id}, // id
    req.body, // new values
    (err, word) => {
      if (err) {
        res.send(err);
      }
      res.json(word);
    }
  );
};

exports.deleteWord = (req, res) => {
  Vocab.deleteOne({_id: req.params.id}, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'Word successfully deleted',
      _id: req.params.id
    });
  })
};
