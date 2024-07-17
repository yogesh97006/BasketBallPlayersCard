import React from 'react'
import PlayerCards from './PlayerCards'

function PlayerDetails() {
    const PlayerStatus={
        PointsPerGame:24.5,ReboundsPerGame:11.8,AssistsPerGame:9.8
    }
  return (
    <div>
        <PlayerCards Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXKS_LZ7iTUbWjE5t4KQNXb5dYzoOE94qAA&s" Name="Nikola Jokić" Position="C"  PlayerStatus={PlayerStatus} />
    </div>
  )
}

export default PlayerDetails