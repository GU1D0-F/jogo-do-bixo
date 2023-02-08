import React from "react";
import BingoCard from "./Components/BingoCard/BingoCard";
import BingoController from "./Components/BingoController";

function App() {
  return (
    <div className="App">
      <center>
      <h1>Jogo do Bixo Online</h1>
      </center>
      <BingoCard />
      <BingoController />
    </div>
  );
}

export default App;