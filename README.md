# phone-T9-task

## Task

Implement a number to word list converter as a Node backend and React fronted. The backend
should provide a rest endpoint that converts a given numeric string into a list of corresponding
words in the style of T9 or Phonewords. For example, given the input 23 the output should be:
ad, ae, af, bd, be, bf, cd, ce, cf The frontend should allow the user to enter a number, query the
backend for the corresponding expansions, and display them.

The solution should be shared with us in a git repository with real history included. It's OK not to
deliver 100%, but the more working parts the better. For example if you struggle with the
backend, focus on frontend and just mock the API calls.

Take this task as a chance to present your skills. If you are good in UI, let us see that. If you are
more into the backend, it's OK to have simple FE.

If you know what tests are for, don't keep it for yourself, show it in the code.
Ways to go beyond the minimal solution could include for example:

- phone keyboard -like UI
- great project setup
- mobile app in React Native
- filtering to include only real words based on a suitable word l


## How to run application

First install dependencies. To install dependecies run command `npm install` in __root__ folder and also in __client__ folder!

To run server use command `npm run server:start`. Server will start listening on your localhost on port `3001`.

Use `npm run client:start` to start client application. It will open a new tab in browser with url `http://localhost:3000/`.

For more information check `package.json` file in root folder.

## How to work with application

Use the phone keypad to enter the number sequence. Each new number entered sends a request to the server and receives word sets. Words are made up of all possible combinations of given inputs. The server also responds with the most common words that match the input entered. The most common words are displayed in bold at the top of the list. Use the mouse or the phone buttons to select words. The words then appear at the top of the screen.

## Structure

```
client/             = client application
├── node_modules    = node modules folder for client
├── public          = public folder
└── src             = folder containing a client code
    ├── components  = react components
    ├── services    = services
    └── styles      = application styles
node_modules        = node modules folder for server
server              = server application
├── assets          = assets of server application
├── controllers     = server controllers
├── services        = server services
├── utils           = folder with utlility functions
└── index.js        = initial server file
```