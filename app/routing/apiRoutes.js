const friends = require("../data/friends");

module.exports = (app) => {
    app.get("api/friends",(req, res) => {
        res.json(friends);
    });

    app.post("/api/friends",(req,res) => {
        var newScore = req.body.scores;
            var scoreArray = [];
        var bestMatch = 0;

        for(var i=0; i< friends.length; i++){
            var scoreDifference = 0;

            for(var j=0; j< newScore.length; j++){
                scoreDifference += (Math.abs(parseInt(friends[i].scores[j])));
            }
            scoreArray.push(scoreDifference);
        }

        for(var i=0; i< scoreArray.length; i++){
            if (scoreArray[i]<= scoreArray[bestMatch]){
                bestMatch = i;
            }
        }

        var bm = friends[bestMatch]
        res.json(bm);
        friends.push(req.body);
    });



}