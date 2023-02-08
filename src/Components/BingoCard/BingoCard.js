import React, { useState } from 'react';
import animalImages from '../../Utils/animalImages'
import './BingoCard.css'



const BingoCard = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

  return (
    <center>
      <table>
        <tbody>
          {numbers.slice(0, 5).map((number, i) => (
            <tr key={i}>
              {numbers.slice(i * 5, i * 5 + 5).map((number, j) => (
                <td key={j}>
                  <center>
                    <img src={`${animalImages[number]}`} alt={number} />
                  </center>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default BingoCard;


