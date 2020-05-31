var PubNub = require("pubnub");


var pubnub = new PubNub({
    subscribeKey: "sub-c-db832570-885f-11ea-a961-f6bfeb2ef611",
    publishKey: "pub-c-4fe2d8f8-74ed-4d6a-93c4-149e68832d07",
    uuid: "myUniqueUUIDServer",
    secretKey: "sec-c-YWM1MzAyMGYtODljNi00MGJmLWFhM2MtNWVkNjBiNGI5NzEy"
});


pubnub.addListener({
    message: function(m) {
        // handle message
        console.log("message recieved of position " + JSON.stringify(m.message));
    }
});

pubnub.subscribe({
    channels: ['orderBroadcast'],
}, function (err) {
    console.log(err);
});
