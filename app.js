const express = require("express");
var app = express();
const http = require("http");
const path = require("path");
var bodyParser = require("body-parser");
var fs = require('fs');
var validator = require('validator'); // 유효성을 검사하는 package


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', __dirname);
//app.set('views', './public');
//app.set('views', 'public');

http.createServer(app).listen(8080, function() {
	console.log("Server connected!");
});

app.post("/main_page.html", function(req, res) {
	
	var psw = req.body.psw;
	var id = req.body.id;

	fs.readFile('data/user', 'utf8', function(err, data) {
		var data_ = data.split("\n");
		for(var i = 0; i < data_.length; i++) {
			//console.log(data_[i]);
			var splitLine = data_[i].split("|");
			//console.log(splitLine[0] === id);
			//console.log(splitLine[1] == psw);
			if(splitLine[0] === id && splitLine[1] == psw) {
				console.log("로그인 되었습니다.");
				res.send("<script> sessionStorage.setItem('user', '"+ id +"'); window.location='./announcement_page.html';</script>");
			}
		}
	});
});


app.post("/signup_page.html", function(req, res) {
	fs.appendFile('./data/user' , req.body.id + "|" + req.body.psw + "\n", function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
	res.redirect("/main_page.html");
});

// 잘됨
app.post("/announcement_page.html", function(req, res) {
	console.log(req.body.register_);

	var user_id = req.body.user_id;

	if(req.body.register_ === "register") {
		fs.writeFile("./register/" + user_id, req.body.restaurant + "/" + req.body.where + "/" + req.body.time + "|" + req.body.user_delivery_amount + "/" + req.body.minimum_order_amount +"\n" ,function(err) {
			if(err) throw err;
			console.log('New Registration!');
		});
	}

	res.redirect("/announcement_page.html");
});


app.get('/announcement_page.html', function(req, res) {

	var name = 'hello';
  
	res.render(__dirname + "/views/layouts/main.html", {name:name});
  
  });
  
// app.get('/announcement_page.html', function(req, res) {
// 	console.log("announcement_page");
// 	var name = 'hello';
// 	res.render("/announcement_page.html", {name: name});
// });