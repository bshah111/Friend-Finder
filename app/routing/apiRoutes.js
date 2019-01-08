var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        console.log("Reading API");
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        friendArray.push(req.body);
        
        //variable will hold the current best match friend in the friendArray
        var bestMatch;
        //variable to hold the current difference between best match friend
        var bestMatchTotal = 1000;
    
        //loop to see which friend matches
        for (var i = 0; i < friendArray.length-1; i ++){
          var q1 = Math.abs(friendArray[i].scores[0] - req.body.scores[0]);
          var q2 = Math.abs(friendArray[i].scores[1] - req.body.scores[1]);
          var q3 = Math.abs(friendArray[i].scores[2] - req.body.scores[2]);
          var q4 = Math.abs(friendArray[i].scores[3] - req.body.scores[3]);
          var q5 = Math.abs(friendArray[i].scores[4] - req.body.scores[4]);
          var q6 = Math.abs(friendArray[i].scores[5] - req.body.scores[5]);
          var q7 = Math.abs(friendArray[i].scores[6] - req.body.scores[6]);
          var q8 = Math.abs(friendArray[i].scores[7] - req.body.scores[7]);
          var q9 = Math.abs(friendArray[i].scores[8] - req.body.scores[8]);
          var q10 = Math.abs(friendArray[i].scores[9] - req.body.scores[9]);
          var total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
          console.log(total);
          if (total < bestMatchTotal){
            bestMatchTotal = total;
            bestMatch = friendArray[i];
          }
          
        }
    
        res.json(bestMatch);
      });
    }
    
    
