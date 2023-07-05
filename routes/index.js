var express = require('express');
var router = express.Router();

const API_KEY = process.env.API_KEY
console.log(API_KEY)
router.get(("/movies"), (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => res.json({movies : data.results}))
}
) 


module.exports = router;
