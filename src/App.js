import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfCategories from './components/ListOfCategories/index'
import {GlobalStyle} from './GlobalStyles'
import {ListOfPhotoCards} from './components/ListOfPhotoCards'
function App() {
  return (
    <div>
      <GlobalStyle/>
      <ListOfCategories/>
      <ListOfPhotoCards/>
    </div>
  );
}

export default App;
