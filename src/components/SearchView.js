import React from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'
import MovieNotFound from './MovieNotFound'

function SearchView({keyword, searchResult}) {

  const bannerText = `Search Result of ${keyword}`

  const resultsHtml = searchResult.map((obj,id)=>{
    return <MovieCard movie={obj} key={id}/>
  })
  if(keyword.length === 0){
    return <MovieNotFound text="Type something in searchbox"/>
  }
  if(searchResult.length === 0){
    return <MovieNotFound text="The Movie you're searching for is not found!"/>
  }

  return (
    <div>
        <Banner text={bannerText}/>
        <div className="container p-0 pt-3">
          <div className="row justify-content-center">
            {resultsHtml}
          </div>
        </div>
    </div>
  )
}

export default SearchView