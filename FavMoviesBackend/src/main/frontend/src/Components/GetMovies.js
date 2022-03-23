import axios from "axios";
import rsstojson from "rss-to-json";

const API_KEY="3deb54e8";
var userInput="Moon Knight";

function getMovies(){
    var config = {
        method: 'post',
        url: 'http://www.omdbapi.com/?apikey='+API_KEY+'&s='+userInput,
        headers: { }
      };  
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });      
}

const newmovies_rss = "https://www.fandango.com/rss/newmovies.rss";

var json= await rsstojson(newmovies_rss);
export var movies = json.items

for(var i in json.items){
    console.log(json.items[i].title);
}