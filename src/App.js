import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer.js'
import { Route } from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
         <Route exact path="/" component={DogsListContainer} />
         <Route path="/dog-breeds/:breed" component={DogBreedImages} />
         <Route exact path="/" component={DogBreedImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
