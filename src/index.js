
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDZitZD5baQRtjaKTSQj--2oEJubH6Ak1Y';

// Create a new component and this component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// Take this component's generated HTML and put in on the page(in th DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));
