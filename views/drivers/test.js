var PubNub = require("pubnub");

var pubnub = new PubNub({
    subscribeKey: "sub-c-db832570-885f-11ea-a961-f6bfeb2ef611",
    publishKey: "pub-c-4fe2d8f8-74ed-4d6a-93c4-149e68832d07",
    uuid: "myUniqueUUIDServer",
    secretKey: "sec-c-YWM1MzAyMGYtODljNi00MGJmLWFhM2MtNWVkNjBiNGI5NzEy"
});

var jatin = "Japani";
var mahir = "Basoda";

pubnub.publish({
    channel: 'orderBroadcast', 
    message:jatin+ mahir
  }, function(status, response) {
      if(status.error) {
          console.log(status);
          
      } else {
          console.log(response, "jatin");
          
      }
  });