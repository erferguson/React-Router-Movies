import React, { useState } from 'react';
import { Router, Route } from 'react-router';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" component={MovieList}/>
      <Route path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
