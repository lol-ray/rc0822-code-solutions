import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const carousel = [
  { id: 1, src: 'https://images.unsplash.com/photo-1667802694056-3dd951aba710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', alt: 'Gift' },
  { id: 2, src: 'https://images.unsplash.com/photo-1668000819543-ec8a570939ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Toast' },
  { id: 3, src: 'https://images.unsplash.com/photo-1667926964370-840afdde03e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Drinks' },
  { id: 4, src: 'https://images.unsplash.com/photo-1667601140900-1b65f8a9533c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Mouse' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Carousel carousel={carousel} />);
