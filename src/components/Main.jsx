import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Scoreboard from './Scoreboard/Scoreboard.jsx'
import CardsGrid from './Cardsgrid/CardsGrid.jsx'
import { capitalizeFirstLetter, shuffleArray } from '../utils'

const Main = () => {

  return (
    <MainWrapper>
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
      ></Scoreboard>
      <CardsGrid
        pokemons={pokemons}
        handleCardClick={handleCardClick}
      ></CardsGrid>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`

export default Main