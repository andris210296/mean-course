const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {

  const posts = [
    {
      id:'6a85s7d6',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id:'6875sd1cf',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    }
  ];

  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});

module.exports = app;
