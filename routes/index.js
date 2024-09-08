var express = require('express');
var router = express.Router();
const UserTodo = require('../models/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todo', async (req, res) => {
  const todos = await UserTodo.find();
  res.render('todo' , {todos});
})

router.post("/createTodo", async (req, res) => {
  const { name , email , description , status} = req.body;
  const todo = await UserTodo.create({
    name,
    email,
    description,
    status
  });
  res.redirect('/todo');
});

router.get('/deleteTodo/:id', async (req, res) => {
  const todo = await UserTodo.findByIdAndDelete({ _id: req.params.id });
  res.redirect('/todo');
});

module.exports = router;
