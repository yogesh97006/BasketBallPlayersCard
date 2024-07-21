import React from 'react'
import './PlayerCards.css'

function PlayerCards({Img,Name,Position,PlayerStatus}) {

  return (
    <div className='container'>
       <img src={Img} alt="Nikola Jokić"/> 
        <h2>Name : {Name}</h2>
        <h2>Position : {Position}</h2>
       <hr/>
       <div className='Player-Stats'>
           <p>Points Per Game : {PlayerStatus.PointsPerGame}</p>
           <p>Rebounds Per Game : {PlayerStatus.ReboundsPerGame}</p>
           <p>Assists Per Game : {PlayerStatus.AssistsPerGame} </p>
       </div>
    </div>
  )
}

export default PlayerCards