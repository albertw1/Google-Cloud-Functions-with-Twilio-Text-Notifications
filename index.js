/**
 * Triggered by a change to a Firestore document.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
var twilio = require('twilio');
var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);
exports.helloFirestore = (event, context) => {
  const resource = context.resource;
  console.log('Function triggered by change to: ' +  resource);
  client.messages.create({
    // You can report details of the event in your text message body.
    // For example, my data structure may contain the username, content, storage location, date creation, and thread id.
    // These may be parsed out using JSON.parse().
    // Example -- body: 'There is a new posted threat! \n\n Username: '+JSON.parse(JSON.stringify(event)).value.fields.username.stringValue+'.\n\nComment: '+JSON.parse(JSON.stringify(event)).value.fields.commentContent.stringValue+'.\n\nLocation: '+JSON.parse(JSON.stringify(event)).value.name+'.\n\nDate Created: '+JSON.parse(JSON.stringify(event)).value.fields.dateUpdated.timestampValue+'.\n\nThread ID: '+JSON.parse(JSON.stringify(event)).value.fields.id.stringValue,
    body: '', // Message goes here
    to: '+15555555555',  // The number you wish to text
    from: '+15555555554' // Put your Twilio number here
    }).then((message) => console.log(message.sid));
};
