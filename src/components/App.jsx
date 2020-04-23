import React from 'react';
import './styles.css';

import OneMatchup from './OneMatchup.jsx'
import gameSpreads from '../data/gameSpreads'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [],
      gameSpreads: []
    }

    this.addUserSelection = this.addUserSelection.bind(this)
  }

  componentDidMount() {
    this.setState({
      gameSpreads: gameSpreads
    }, () => { console.log('set state', this.state) })
  }

  addUserSelection(selection) {
    this.setState({
      selections: [...this.state.selections, selection]
    }, () => { console.log('new state sir', this.state) })
  }

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
            <OneMatchup addUserSelection={this.addUserSelection}></OneMatchup>
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