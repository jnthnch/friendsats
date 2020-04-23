import React from 'react';
import './styles.css';

import OneMatchup from './OneMatchup.jsx'
import gameSpreads from '../data/gameSpreads'
import OneSelection from './OneSelection.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSpreads: [],
      selections: [],
      selectionsMade: 0,
    }
    this.addUserSelection = this.addUserSelection.bind(this)
  }

  componentDidMount() {
    this.setState({
      gameSpreads: gameSpreads
    })
  }

  addUserSelection(selection) {
    this.setState({
      selections: [...this.state.selections, selection]
    }, () => { console.log('new state sir', this.state) })
  }

  render() {
    const { gameSpreads, selections } = this.state
    const style = {
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
            {gameSpreads.map((game) =>
              <OneMatchup key={game.gameId} game={game} addUserSelection={this.addUserSelection}></OneMatchup>
            )}
          </div>
          <div className="tracked-selections">
            <div>
              <h1>Your selections</h1>
              {selections.map((selection) => (
                <OneSelection selection={selection}></OneSelection>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;