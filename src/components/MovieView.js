import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from './Banner'
import poster from '../default-poster.png'
import github from '../github.svg'

function MovieView() {

    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    var style = {
        backgroundImage: movieDetails.backdrop_path != null ? `url("https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}")` : "linear-gradient(#EEEEEE, #00cdd7)",
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
        .then(response => response.json())
        .then(response=>{
            setMovieDetails(response)
            setIsLoading(false)
            // console.log(response)
        })
    },[id])

    function timeConvert(n) {
        return Math.floor(n / 60) + " hour " + Math.round((n / 60 - Math.floor(n / 60)) * 60) + " minute";
    }
    function getGenre(){
        return (
            <div>
                {movieDetails.genres.map(function(d, id){
                return (<h6 className="stickey-tabs geners" key={id}>{d.name}</h6>)
                })}
            </div>
          );
    }
    function getProducer(){
        return (
            <div>
                {
                    movieDetails.production_companies.map(function(d,id){
                        return (d.logo_path && <img className="producer" src={`https://image.tmdb.org/t/p/original${d.logo_path}`} alt={d.name} key={id}/>)
                    })
                }
            </div>
          );
    }

    function renderMovieDetails() {
        if(isLoading){
            return(
                <div>
                    <Banner text="Loading..."/>
                </div>
            )
        }
        if(movieDetails){
            return (
                <div>
                    <Banner text={movieDetails.original_title}/>
                    <div className="container-fluid bg-container">
                        <div className='bg-poster' style={style}></div>
                        <div className="container p-0 pt-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <img className="img-fluid detail-poster" src={ movieDetails.poster_path != null ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}` : poster} alt={movieDetails.original_title}/>
                                </div>
                                <div className="col-md-9">
                                    <h6 className="stickey-tabs">{movieDetails.vote_average.toFixed(1)} / 10</h6>&emsp;
                                    <h6 className="stickey-tabs">{timeConvert(movieDetails.runtime)}</h6>&emsp;
                                    <h6 className="stickey-tabs">{movieDetails.original_language.toUpperCase()}</h6>

                                    <br></br>

                                    <h6 className="stickey-tabs">Released on {movieDetails.release_date}</h6>

                                    <br></br><br></br>
                                    
                                    <p> {movieDetails.overview} </p>

                                    <br></br>

                                    <h6>Genres</h6>
                                    {getGenre()}

                                    <br></br>

                                    <h6>Produced By</h6>
                                    {getProducer()}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
    return renderMovieDetails()
    
}

export default MovieView