import React from 'react';
import BingoCard from "../Components/BingoCard/BingoCard";
import BingoController from "../Components/BingoController/BingoController";
import Navigation from '../Components/Navigation/Navigation';

const Home = () => {
  return (
    <div>
      <center>
        <Navigation />
        <h1>Jogo do Bixo Online</h1>
      </center>
      <BingoCard />
      <BingoController />
    </div>
  );
}

export default Home;