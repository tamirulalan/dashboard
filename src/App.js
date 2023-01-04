
import React from 'react';
import AverageRating from './Components/AverageRating';
import Reviews from './Components/Reviews';
import SentimentAnalysis from './Components/SentimentAnalysis';
import Sidebar from './Components/Sidebar';
import WebVisitors from './Components/WebVisitors';
import Box from './Components/Box';

function App() {
  return (
    <div className="App">
    <div className="main">
       <span className="container-1"><Sidebar/></span> 
      <div className='container-2'>
        <div className="top">
          <span className='reviews'><Reviews /></span>
          <span className='rating'><AverageRating/></span>
          <span className='analysis'><SentimentAnalysis/></span>
        </div>
        <div className="bottom">
         
          <div className="visitor">
          <WebVisitors/>
          <span className="box"><Box/></span>
          </div>
          
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default App;
