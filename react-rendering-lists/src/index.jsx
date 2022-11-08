import React from 'react';
import ReactDOM from 'react-dom/client';

function Pokedex(props) {
  const pokedexList = props.pokedex.map(pokedex =>
    <li key={pokedex.number}>
      {pokedex.name}
    </li>
  );
  return (
    <ul>
      {pokedexList}
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Pokedex pokedex={pokedex} />);
