const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joshnajohn2020:joshna20@cluster0.ghlmw.mongodb.net/vimala?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))

  .catch((err) => console.log(err))