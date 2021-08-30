const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));

app.use("/js",express.static("js"));
app.use("/css",express.static("css"));
app.use("/images",express.static("images"));
app.use("/fonts",express.static("fonts"));

router.get('/',function(_,res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', router);
app.listen(port);
console.log('Server started at http://127.0.0.1:' + port);
