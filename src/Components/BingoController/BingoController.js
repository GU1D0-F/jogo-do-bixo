import React, { useState } from 'react';

const BingoController = () => {
  const [drawnNumbers, setDrawnNumbers] = useState('');

  const handleDrawNumber = () => {
    setDrawnNumbers('');

    let animal = ''
    let num = Math.floor(Math.random() * 100) + 1

    setTimeout(() => {

      switch (num) {
        case 1: case 2: case 3: case 4:
          animal = 'Avestruz'
          break;
        case 5: case 6: case 7: case 8:
          animal = 'Águia'
          break;
        case 9: case 10: case 11: case 12:
          animal = 'Burro'
          break;
        case 13: case 14: case 15: case 16:
          animal = 'Borboleta'
          break;
        case 17: case 18: case 19: case 20:
          animal = 'Cachorro'
          break;
        case 21: case 22: case 23: case 24:
          animal = 'Cabra'
          break;
        case 25: case 26: case 27: case 28:
          animal = 'Carneiro'
          break;
        case 29: case 30: case 31: case 32:
          animal = 'Camelo'
          break;
        case 33: case 34: case 35: case 36:
          animal = 'Cobra'
          break;
        case 37: case 38: case 39: case 40:
          animal = 'Coelho'
          break;
        case 41: case 42: case 43: case 44:
          animal = 'Cavalo'
          break;
        case 45: case 46: case 47: case 48:
          animal = 'Elefante'
          break;
        case 49: case 50: case 51: case 52:
          animal = 'Galo'
          break;
        case 53: case 54: case 55: case 56:
          animal = 'Gato'
          break;
        case 57: case 58: case 59: case 60:
          animal = 'Jacaré'
          break;
        case 61: case 62: case 63: case 64:
          animal = 'Leão'
          break;
        case 65: case 66: case 67: case 68:
          animal = 'Macaco'
          break;
        case 69: case 70: case 71: case 72:
          animal = 'Porco'
          break;
        case 73: case 74: case 75: case 76:
          animal = 'Pavão'
          break;
        case 77: case 78: case 79: case 80:
          animal = 'Peru'
          break;
        case 81: case 82: case 83: case 84:
          animal = 'Touro'
          break;
        case 85: case 86: case 87: case 88:
          animal = 'Tigre'
          break;
        case 89: case 90: case 91: case 92:
          animal = 'Urso'
          break;
        case 93: case 94: case 95: case 96:
          animal = 'Veado'
          break;
        case 97: case 98: case 99: case 100:
          animal = 'Vaca'
          break;
      }

      setDrawnNumbers(animal);

    }, 750)



  };

  return (
    <center>
      <div>
        <button onClick={handleDrawNumber}>Sortear Animal</button>
        <p>Animal sorteado: {drawnNumbers}</p>
      </div>
    </center>
  );
};

export default BingoController;


// NUMERO DOS ANIMAIS NO JOGO DO BIXO
// 1.Avestruz: 01, 02, 03, 04
// 2.Águia: 05, 06, 07, 08
// 3.Burro: 09, 10, 11, 12
// 4.Borboleta: 13, 14, 15, 16
// 5.Cachorro: 17, 18, 19, 20
// 6.Cabra: 21, 22, 23, 24
// 7.Carneiro: 25, 26, 27, 28
// 8.Camelo: 29, 30, 31, 32
// 9.Cobra: 33, 34, 35, 36
// 10.Coelho: 37, 38, 39, 40
// 11.Cavalo: 41, 42, 43, 44
// 12.Elefante: 45, 46, 47, 48
// 13.Galo: 49, 50, 51, 52
// 14.Gato: 53, 54, 55, 56
// 15.Jacaré: 57, 58, 59, 60
// 16.Leão: 61, 62, 63, 64
// 17.Macaco: 65, 66, 67, 68
// 18.Porco: 69, 70, 71, 72
// 19.Pavão: 73, 74, 75, 76
// 20.Peru: 77, 78, 79, 80
// 21.Touro: 81, 82, 83, 84
// 22.Tigre: 85, 86, 87, 88
// 23.Urso: 89, 90, 91, 92
// 24.Veado: 93, 94, 95, 96
// 25.Vaca: 97, 98, 99, 00

