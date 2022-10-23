import React from 'react'
import Banner from './Banner'
import github from '../github.svg'

function Home() {
  return (
    <div>
      <Banner text="Welcome to JustNameIt" />
      <div className="container p-4 pt-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2><span className="about-underline">About JustNameIt</span></h2>
            <div className="mt-4">
              <p className="pd-4">
                <li>JustNameIt is a Movie Browser created in React JS and bootstrap libraries.</li>
                <li>You can simply hunt down details about favourite movies using this application. </li>
                <li>I have implemented use of useState, useEffect, useParams, Link, Route, functional components and javascript concepts. Future updates will include responsive API for the users, with the OTT platforms service where they can stream there favourite movies.</li>
                <br></br>
                The API I've used for fetching data is: <a className="api-link" href="https://developers.themoviedb.org/3/getting-started/introduction" target="_main">The Movie Database.</a>
              </p>
            </div>

            <p>Web Technologies Used: </p>
            <h6 className="tech"><a className="api-link" href="https://www.javascript.com/" target="_main">JavaScript</a></h6>
            <h6 className="tech"><a className="api-link" href="https://reactjs.org/docs/getting-started.html" target="_main">React.js</a></h6>
            <h6 className="tech"><a className="api-link" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_main">Bootstrap</a></h6>
          </div>
        </div>
      </div>
      <div class="navbar fixed-bottom">
              <footer className="container-fluid footer-style">
        <div className="container d-flex justify-content-between align-middle">
          <span>© Copyright 2022. All Rights Reserved.</span>
          <a href="https://github.com/hitaarthh/JustNameIt" target="_main"><img className="github-icon" src={github} alt="github"/></a>
        </div>
      </footer>
      </div>

    </div>
  )
}

export default Home