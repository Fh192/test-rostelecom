import React from 'react';
import './App.css';
import { Filters } from './Filters/Filters';
import { Photos } from './Photos/Photos';
import { Search } from './Search/Search';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Search />
        <Filters />
        <Photos />
      </div>
    </div>
  );
};

export default App;
