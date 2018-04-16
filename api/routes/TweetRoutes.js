module.exports = function(app) {
    var tweets = require('../controllers/TweetController');

    app.route('/tweets')
      .get(tweets.list_all_tweets)
      .post(tweets.create_a_tweet);

    app.route('/tweets/:tweetId')
      .get(tweets.read_a_tweet)
      .put(tweets.update_a_tweet)
      .delete(tweets.delete_a_tweet);
};