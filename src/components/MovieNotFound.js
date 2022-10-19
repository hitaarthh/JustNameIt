import React from 'react'
import Banner from './Banner'
import github from '../github.svg'

function MovieNotFound({text}) {
  return (
    <div>
        <Banner text={text}/>
        <div className="container p-5">
            <div className="row p-5">
                <div className="col d-flex align-items-center justify-content-center">
                    <h3><em>OOPS!! No Movie Found. Check for spelling errors.</em> </h3>
                </div>           
            </div>
        </div>
        <footer className="container-fluid footer-style">
        <div className="container d-flex justify-content-between align-middle">
          <span>© Copyright 2022. All Rights Reserved.</span>
          <a href="https://github.com/hitaarthh/Movie-Mania" target="/blank"><img className="github-icon" src={github} alt="github" /></a>
        </div>
      </footer>
    </div>
    
  )
}

export default MovieNotFound