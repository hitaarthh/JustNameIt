import React from 'react'

function Banner({text}) {
  return (
    <div className="banner">
        <div className="container p-0">
            <h1 className="banner-title" style={{textAlign: "center"}}>{text}</h1>
        </div>
    </div>
  )
}

export default Banner