// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var queueURL = "https://sqs.us-east-1.amazonaws.com/551425147024/test123";

// var params3 = {
//     QueueName: 'test123',
//     Attributes: {
//       'DelaySeconds': '60',
//       'MessageRetentionPeriod': '86400'
//     }
//   };
  
//   sqs.createQueue(params3, function(err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data.QueueUrl);
//     }
//   });

var params2 = {
    // Remove DelaySeconds parameter and value for FIFO queues
   DelaySeconds: 10,
   MessageAttributes: {
     "Title": {
       DataType: "String",
       StringValue: "The Avengers"
     },
     "Author": {
       DataType: "String",
       StringValue: "Russo Brothers"
     },
     "WeeksOn": {
       DataType: "Number",
       StringValue: "7"
     }
   },
   MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
   // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
   // MessageGroupId: "Group1",  // Required for FIFO queues
   QueueUrl: "https://sqs.us-east-1.amazonaws.com/551425147024/test123"
 };
 
 sqs.sendMessage(params2, function(err, data) {
   if (err) {
     console.log("Error", err);
   } else {
     console.log("Success", data.MessageId);
   }
 });

var params = {
    AttributeNames: [
       "Title",'Author','WeeksOn'
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
       "All"
    ],
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0
   };
   
   sqs.receiveMessage(params, function(err, data) {
    if (err) {
      console.log("Receive Error", err);
    } else {
      console.log(data.Messages[0]);
      
    }
  });