import React from 'react'
import {Link} from 'react-router-dom'
import poster from '../default-poster.png'
import github from '../github.svg'

function MovieCard({movie}) {

var description = movie.overview.substring(0, 140) + "...";
var imagePath = `http://image.tmdb.org/t/p/w500${movie.poster_path}`
if(movie.poster_path == null){
  imagePath = poster
}
const movieDetails = `/movies/${movie.id}`

  return (
    <Link to={movieDetails} className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex justify-content-center p-3 movie-card">
        <div className="grow">
            <img className="poster-img img-fluid" src={imagePath} alt={movie.original_title}/>
            <div className="movie-details">
              <h6 className="movie-title">{movie.original_title}</h6>
              <p className="description">{description}</p>
              <span className="description-bottom">{movie.vote_average} / 10 &emsp;{movie.original_language.toUpperCase()} &emsp; {movie.release_date}</span>
            </div>
        </div>
        
    </Link>
  )
}

export default MovieCard