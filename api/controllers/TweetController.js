var mongoose = require('mongoose'),
    Tweet = mongoose.model('Tweet');

exports.list_all_tweets = (req, res) => {
    Tweet.find({}, (err, tweets) => {
        if (err)
            res.send(err);
        res.json(tweets);
    });
};

exports.create_a_tweet = (req, res) => {
    var new_tweet = new Tweet(req.body);
    new_tweet.save((err, tweet) => {
        if (err)
            res.send(err);
        res.json(tweet);
    });
};

exports.read_a_tweet = (req, res) => {
    Tweet.findById(req.params.tweetId, (err, tweet) => {
        if (err)
            res.send(err);
        res.json(tweet);
    });
};
  
exports.update_a_tweet = (req, res) => {
    Tweet.findOneAndUpdate({_id: req.params.tweetId}, req.body, {new: true}, (err, tweet) => {
        if (err)
            res.send(err);
        res.json(tweet);
    });
};
  
exports.delete_a_tweet = (req, res) => {
    Tweet.remove({
        _id: req.params.tweetId
    }, (err, tweet) => {
        if (err)
            res.send(err);
        res.json({ message: 'Tweet successfully deleted' });
    });
};
  