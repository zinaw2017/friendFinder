
module.exports = function(app, friends) {

// API GET Request - Allows user to view the 
app.get('/api/:friends?', function (req, res) {
	
	var chosen = req.params.friends;

	if (chosen === 'friends') { 

		res.json(friends); 

	} else {
		console.log(chosen);

		for (var i = 0; i < friends.length; i++) {
			if (chosen === friends[i].routeName) {
				res.json(friends[i]);
				return;
			}
		}
		res.json(false);

	};
 });

// Create New Characters - takes in JSON input
app.post('/api/friends', function(req, res) {

		  // currentUser is the user that filled out the survey
      var currentUser = req.body;

      // compute best match from scores
      var bestMatch = {};

      // For Loop to checked the scores array and based on the value text it converts the value to an integer
      for(var i = 0; i < currentUser.scores.length; i++) {
        if(currentUser.scores[i] == "1 (Strongly Disagree)") {
          currentUser.scores[i] = 1;
        } else if(currentUser.scores[i] == "5 (Strongly Agree)") {
          currentUser.scores[i] = 5;
        } else {
          currentUser.scores[i] = parseInt(currentUser.scores[i]);
        }
      }
      // compare the scores of currentUser with the scores of each friend stored in the friends object 
      // and find the friend with the smallest difference when each set of scores is compared

      var bestMatchIndex = 0;
      var bestMatchDifference = 40;

      for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var index = 0; index < friends[i].scores.length; index++) {
          var differenceOneScore = Math.abs(friends[i].scores[index] - currentUser.scores[index]);
          totalDifference += differenceOneScore;
        }

        // if the totalDifference in scores is less than the best match so far
        // save that index and difference
        if (totalDifference < bestMatchDifference) {
          bestMatchIndex = i;
          bestMatchDifference = totalDifference;
        }
      }

      // the best match index is used to get the best match data from the friends index
      bestMatch = friends[bestMatchIndex];

      // Put new friend from survey in "database" array
      friends.push(currentUser);

      // return the best match friend
      res.json(bestMatch);
  });

};