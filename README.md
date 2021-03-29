# Google-Cloud-Functions-with-Twilio-Text-Notifications-in-NodeJS

Suppose you have an iOS/Android app with a Firebase backend and you wish to be notified each time a user posts a new thread/message on your app, by text message. The code allows you to integrate Twilio's API with Google Cloud Functions, so that text messages can be sent when a qualifying event is triggered.

1) Obtain Twilio credentials for accessing their API. These will be your account SID and your Auth Token, which you obtain from www.twilio.com/console.

2) Go to https://console.cloud.google.com/functions and select `Create Function`.

3) You will then create a function name, the type of trigger, and the path to the triggering document, as shown below. Depending on your event type, select the appropriate type from the drop-down menu.

<img width="468" alt="create" src="https://user-images.githubusercontent.com/31450556/112792433-4cfa0280-9018-11eb-9edf-dd9c6fb92054.png">

4) You will then come across a page asking you to specify the Runtime, Entry point, and code for `index.js` and `package.json`. Paste in the two files, changing them to have the valid authentication credentials and structure for the messages. 

<img width="1423" alt="code" src="https://user-images.githubusercontent.com/31450556/112792916-330cef80-9019-11eb-94aa-22ea0c78b807.png">

5) I've included an commented out example in `index.js` with a way to parse through the details of the event to obtain the username, content, storage location, date creation, and thread id attributes of a newly posted thread. Change this to reflect your data structure.

6) Put in the code for `package.json`. You may need to update the versions of the packages to reflect what is currently up to date.

7) Hit `Deploy` to start receiving text messages for your specified events occuring!
