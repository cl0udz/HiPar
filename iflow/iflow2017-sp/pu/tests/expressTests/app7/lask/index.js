var express = require("express"),
	app = express(),
	policy = require("./Policy.js")(__dirname, app),
	bodyParser = require("body-parser"),
	db = require("./models"),
	path = require("path"),
	session = require("express-session"),
	_ = require("underscore"),
	http = require("http"),
	ejs = require("ejs"),
	keygen = require("keygenerator"),
	methodOverride = require("method-override"),
	cookieParser = require("cookie-parser");

// use ejs and method override
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// parse the posted data and cookie data
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser("A secret"));

app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

/* jc - please remove unused code in development versions */
// hardcoded data to make app post questions
// var questions = [
//   {_id: 0, question: "What is Node.js?"},
//   {_id: 1, question: "How do I render JSON objects to an HTML page?"},
//   {_id: 2, question: "What language should I learn after Javascript?"},
//   {_id: 3, question: "HELP, site is broken!"},
//   {_id: 4, question: "How do I render giphy cats to my page using their API?"}
// ];

// creating the session
app.use(session ({
	/* jc - Thank you for using keygen :) */
	secret: keygen._({specials: true}),
	resave: false,
	saveUninitialized: true
	})
);

// extends the "req" object to help manage the sessions
app.use(function (req, res, next) {
	// login user
	req.login = function (user) {
		req.session.userID = user._id;
	};
	// finds current user
	req.currentUser = function (callback) {
		db.User.findOne({_id: req.session.userID},
			function (err, user) {
				req.user = user;
				callback (null, user);
			})
	};
	// logout current user
	req.logout = function () {
		req.session.userID = null;
		req.user = null;
	}
	//call next middleware in the stack
	next();
});

// homepage route
app.get("/", function (req, res) {
	res.render("home");
});

// information about the site route
app.get("/about", function (req, res) {
	res.render("about")
});

// login route
app.get("/login", function (req, res) {
	res.render("login");
});

// signup route
app.get("/signup", function (req, res) {
	/* jc - Thank you for accessing the db :) */
	db.User.find({}, function(err, user) {
		if(err){console.log(err)}
				res.render("signup");
	});
});

//signs a user up and takes them to their profile
app.post(["/users", "/signup"], function (req, res) {

	var user = req.body.user;
	var username = user.username;
	var password = user.password;
  	db.User.createSecure(username, password, function(err, user) {
			if (user === undefined) {
				console.log("Choose another username");
				res.redirect("signup");
			} else {
			req.login(user);
	    res.redirect("questions");
	  }
	});
});

//creates a user session when login form is submitted
app.post(["/sessions", "/login"], function (req, res) {

	var user = req.body.user;
	var username = user.username;
	var password = user.password;

	db.User.authenticate(username, password, function (err, user) {
		if (user){
			req.login(user);
		 	res.cookie("guid", user._id, {signed: true});
			res.redirect("questions");
		} else if (err) {
			console.log("No access for you!");
			res.redirect("/");
		} else {
			res.redirect("login");
		}
	});
});

// profile of current user
app.get("/profile", function (req, res) {
	// user will only see profile page if logged in
	req.currentUser(function (err, currentUser) {
		if (currentUser === null) {
			res.redirect("/");
		} else {
			res.render("profile", {user: currentUser});
		}
	});
});

app.get("/questions", function (req, res) {
	// user will only see questions page if logged in
	req.currentUser(function (err, user) {
		if (user === null) {
			res.redirect("/");
		} else {
			res.render("questions");
		}
	});
});

// questions data is stored here
app.get("/questions.json", function (req, res) {
	/* jc - Thank you for accessing your db :) */
	db.Question.find({}, function (err, questions){
		if(err) {
			console.log("some err", err);
			/* jc - res.sendStatus(400) ? */
			res.send(err);
		}
		res.send(questions);
	});
});

// the questions page where users can ask and answer
app.post("/questions", function (req, res) {
	var newQuestion = req.body;
	req.currentUser(function (err, user) {
		newQuestion["owner_id"] = user.username;

		/* jc - Thank you for accessing your db :) */
		db.Question.create(newQuestion, function (err, questions) {
			if (err) {
				console.log(err);
				return res.sendStatus(400);
			}
			console.log(questions);
			res.send(questions);
		});
	});
});

// allows users to post an answer to the question
app.post("/questions/answers", function (req, res) {
	var newAnswer = req.body;
	req.currentUser(function (err, user) {
		newAnswer["owner_id"] = user.username;
		/* jc - Thank you for accessing your db :) */
		db.Answer.create(newAnswer, function (err, answers) {
			if (err) {
				console.log(err);
				return res.sendStatus(400);
			}
			console.log(answers);
			/* jc - thank you for accessing your db :) */
			//find the particular question
			db.Question.findOne({_id: newAnswer.questionID}, function (err, question){
					if (err){console.log(err);}
					question.answers.push(answers);
					question.save();
					console.log(question)
					res.sendStatus(202);
			})
		});
	});
});

app.get("/questions/answers.json", function (req, res) {
	/* jc - thank you for accessing your db :) */
	db.Answer.find({}, function (err, answers){
		if(err) {
			console.log("some err", err);
			/* jc - res.sendStatus(400) ?  */
			res.send(err);
		}
		res.send(answers);
	});
});

// enables users to logout
app.delete(["/sessions", "/logout"], function (req, res) {
	req.logout();
	res.redirect("/");
});

/* Server */
setInterval(function() {
	http.get("http://lask.herokuapp.com/");
}, 300000);
app.listen(process.env.PORT || 3000);
