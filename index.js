require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const dns = require('dns');
const url = require('url'); 
const lookupUrl = "https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787";


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
  const parsedLookupUrl = url.parse(lookupUrl);
  console.log(parsedLookupUrl);
  dns.lookup(parsedLookupUrl.hostname,(error,address,family)=>{
    console.log(error,address,family)
  });
});

app.post('/api/shorturl', function(req, res, next) {
  const name = req.query.name;
    res.redirect("/documents");
  dns.lookup(host, cb) 

  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send("original url", "short url" );
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
