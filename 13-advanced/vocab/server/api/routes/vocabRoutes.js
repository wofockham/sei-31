const vocabBuilder = require('../controllers/vocabController');

// Magic here
module.exports = (app) => {
  app
    .route('/words')
    .get(vocabBuilder.listAllWords)
    .post(vocabBuilder.createWord);

  app
    .route('/words/:id')
    .get(vocabBuilder.readWord)
    .put(vocabBuilder.updateWord)
    .delete(vocabBuilder.deleteWord);
}
