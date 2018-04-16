var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
  username: {
    type: String,
    required: 'Please enter the name of the user',
    default: "Joe Montana"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: 'Please enter the name of the user'
  }
});

module.exports = mongoose.model('Tweet', TweetSchema);