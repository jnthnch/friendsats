import React from 'react';
import './styles.css';

import OneMatchup from './OneMatchup.jsx'

class App extends React.Component {
  render() {
    var style = {
      backgroundColor: '#f4eee1',
      height: '100vh'
    };
    return (
      <div style={style}>
        <section className="section-header">
          <h1>NFL Week 1</h1>
        </section>
        <section className="main">
          <div className="make-selections">
            <OneMatchup></OneMatchup>
          </div>
          <div className="tracked-selections">
            <h1>Your submissions</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default App;