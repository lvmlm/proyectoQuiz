var express = require('express');
var router = express.Router();

//redirijo al fichero de controladores que me he creado para presentar la pregunta
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//si el get es hacia la cuestion pues saco la parte del controlador .question
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
module.exports = router;
