const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Gimme'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// Todo: 
    //* Content: 
        //* -Name
        //* -Email
        //* -Password
        //* -Favorites
        //* -Settings
    //* Favorites: 
        //* -index
        //* -player
const groupSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  email: String,
  favorites: {
    type: String,
  }
});

// creats a model for the 'species' collection that will be part of the export
const Group = mongoose.model('group', groupSchema);



// exports all the models in an object to be used in the controller
module.exports = {
  Group,
};
