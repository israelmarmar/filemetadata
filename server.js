var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });


app.get('/', function (req, res) {
	res.write("<p>Submit a file to view its filesize.</p>");
	res.write("<form action='/get-file-size' method='post' enctype='multipart/form-data'>");
	res.write("<input type='file' name='file'>");
	res.write("<input type='submit'>");
	res.write("</form>");
	
})

app.post('/get-file-size', upload.single('file'), function (req, res) {
  res.json({size:req.file.size});
})


app.listen(port, function () {
 console.log("ligado");
});
