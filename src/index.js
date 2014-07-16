var connect = require('connect'),
	http    = require('http'),
	serveStatic = require('serve-static'),
	ShareJS = require('share').server,
	morgan  = require('morgan');

var app = connect();
// Serve up public/ folder
app.use(serveStatic('../public', {'index': ['index.html', 'index.htm']}));
app.use(morgan());

// sharejs

var ShareJSOpts = {
    browserChannel: {// set pluggable transport to BrowserChannel
        cors: "*"
    },
    db: {type: "none" }, // no persistence
    auth: function(client, action) {
        // This auth handler rejects any ops bound for docs starting with 'readonly'.
        if (action.name === 'submit op' && action.docName.match(/^readonly/)) {
        	action.reject();
        } else {
          	action.accept();
        }
    }
};

console.log("Options", ShareJSOpts);

ShareJS.attach(app, ShareJSOpts);

var port = 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
})