/**
 * Created by latika sinha
*/

const express = require('express');
const app = express()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');

app.use(express.json());

app.use('/', indexRouter);
app.use('/user', usersRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    error: true,
    code: 500,
    e: err.stack,
  });
});

module.exports = app;
