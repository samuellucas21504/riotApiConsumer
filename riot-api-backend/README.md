# Riot API Consumer

This API consults the data the Riot API using a summoner name and returns a json with the summoner id, profileIconURL, puuid, the summoner rank
data and the information of his 5 last matches.

This backend consists of a express server, with two controllers: match and summoner.

Both controllers are used on the only endpoint of the site which is /:summonerName.

When the server starts it will automatically run on http://localhost:8000, so put the summonerName you want to search in front of it like: 
http://localhost:8000/summonerNameGoesHere

To run the server simply use
`npm run dev`
and nodemon will automatically do all the hard work for you, in case you want to change something.

Feel free to pull request if you have something to implement!
