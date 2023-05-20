const express = require("express")
const app = express();
var cors = require('cors')
const mongoose = require("mongoose")
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://yoyashmeet:yashu_123@cluster0.gpngvfu.mongodb.net/movieDB?retryWrites=true&w=majority");

const movieSchema = {
    name: String,
    id: String
}

const Movie = mongoose.model("MovieList",movieSchema);

app.get("/wishlist", async function(req,res){
    var movie_list=[];
    await Movie.find({})
    .then((movies)=>{
        movies.forEach(function(movie){
            var obj = {"name": movie.name,"id": movie.id}
            movie_list.push(obj);
        })
    })
    res.send(movie_list);
})




app.post("/wishlist",async function(req,res){
    await Movie.find({id: req.body.id})
    .then((result)=>{
        if(result.length>0)
        console.log("already added");
        else
        Movie.create({name: req.body.movie.original_title,id: req.body.id})
        .then((res)=>{
        console.log(res);
    })
    })
    
    
    
})



app.listen(process.env.PORT || 5000,()=>{
    console.log("Server started on port 3000");
})