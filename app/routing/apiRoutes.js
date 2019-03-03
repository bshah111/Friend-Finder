var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../data/friends.js");
var app = express();
var apiRouter = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

apiRouter.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var totalDiff = 0;
    var totalDiffArr = [];
    var match = 0;;
    
    for (var i = 0; i < newFriend.scores.length; i++) {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
    friends.push(newFriend);
    
    for (var i = 0; i < friends.length - 1; i++) { // for the length of all friend objects minus the last one entered (current user)
        for (var j = 0; j < newFriend.scores.length; j++) { //loops through the length of scores to compare the correct inputs
            totalDiff =+ Math.abs(newFriend.scores[j] - friends[i].scores[j])
        }
        totalDiffArr.push(totalDiff);
    }
    match = (totalDiffArr.indexOf(Math.min.apply(Math, totalDiffArr)));
    bestMatch = friends[match];
    //find lowest totalDiff and set that person to match
    res.json(bestMatch);
});

apiRouter.get("/api/friends", function(req, res) {
	res.json(friends);
});

module.exports = apiRouter;