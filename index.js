var Twit = require('twit')
var T = new Twit({
    consumer_key:         'TLtPeoZISUXNp6zc3zu6uenZ6',
    consumer_secret:      'rC6KPLtETGqfBLsZvCfv3evclnIyPgTvPtHy2N39o9OrBaqmxq',
    access_token:         '1156305861293293571-P5lzb3V7UV9s3HN7Nz5sGAn13GzVKc',
    access_token_secret:  '9txdk9xnsEaf7vJzaKlT8cCJ8YWMiEMotixf2sfYwG5vq'
})
var users = ["1005179256589176833"];
var stream = T.stream('statuses/filter', {follow: users});
stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
})