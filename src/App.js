import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import likeButton from './likeButton';

function App() {
  return (
    <div className="App">
     
        <p>
        Hello World!        
        </p>
        <p>

          <FirstComponent displaytext ="First Component Data"/>
          <likeButton displaytextarea = ""/>
        </p>
      
    </div>
  );
}

export default App;
