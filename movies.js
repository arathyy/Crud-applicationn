const express = require("express");
const Movie = require('../models/movie') 
const routers = express.Router()

routers.get('/', async (req,res)=>{
    // console.log('Get Request');
    // res.send('get request')
    try {
        const movies = await Movie.find()
        res.json(movies);
    } catch (error) {
        res.send('error')
    }
})

routers.get('/:id', async (req,res)=>{
    
    try {
        const movie = await Movie.findById(req.params.id)
        res.json(movie);
    } catch (error) {
        res.send('No movie Found')
    }
})


routers.patch('/:id', async(req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id);
        movie.movieName = req.body.movieName
        movie.directorName = req.body.directorName
        movie.musicComposer = req.body.musicComposer
        movie.releaseDate = req.body.releaseDate
        movie.countryOrigin = req.body.countryOrigin
        
        const movie1 = await movie.save()
        res.json(movie1);
    } catch (error) {
        res.send('Error'+error)
    }
})


routers.post('/', async(req, res)=>{
    const movie = new Movie({
        "movieName" :  req.body.movieName,
        "directorName" : req.body.directorName,
        "musicComposer" : req.body.musicComposer,
        "releaseDate" : req.body.releaseDate,
        "countryOrigin" : req.body.countryOrigin,
        
    })
    try {
        const movie1 = await movie.save();
        res.json(movie1)
    } catch (error) {
        res.send('error')
    }
})

module.exports = routers