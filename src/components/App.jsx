import React from 'react';
import './styles.css';

import OneMatchup from './OneMatchup.jsx'
import gameSpreads from '../data/gameSpreads'
import OneSelection from './OneSelection.jsx'


// selection = {
//   game_id:
//   time:
//   selectionTeam: ex) homeTeam or awayTeam
//   selectionSpread: ex) -3
//     is_won:
//   is_push
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSpreads: [],
      selections: [],
      selectionResults: [],
      selectionsMade: 0,
      wins: 0,
      losses: 0,
      pushes: 0,
    }
    this.addUserSelection = this.addUserSelection.bind(this)
    this.addWin = this.addWin.bind(this);
    this.addLoss = this.addLoss.bind(this);
    this.addPush = this.addPush.bind(this);
  }

  componentDidMount() {
    // fetch('/games')
    //   .then(response => response.json())
    //   .then(data => this.setState({
    //     gameSpreads: data
    //   }, () => { console.log('callback data is', data) }))
    this.setState({
      gameSpreads: gameSpreads
    })
  }

  addUserSelection(selection) {
    this.setState({
      selections: [...this.state.selections, selection]
    }, () => { console.log('user selections', this.state.selections) })
  }

  addWin() {
    this.setState(prevState => {
      return { wins: prevState.wins + 1 }
    })
  }

  addLoss() {
    this.setState(prevState => {
      return { losses: prevState.losses + 1 }
    }, () => {
      console.log('this State', this.state)
    })
  }

  addPush() {
    this.setState(prevState => {
      return { pushes: prevState.pushes + 1 }
    })
  }

  render() {
    const { gameSpreads, selections, wins, losses, pushes } = this.state;
    const sum = wins + losses + pushes;
    const pushesPercent = pushes * 0.5;
    const winPercent = sum === 0 ? '0.00' : (Math.round(((wins + pushesPercent) / sum) * 1000) / 1000).toFixed(3)
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
              <OneMatchup key={game.id} game={game} addUserSelection={this.addUserSelection}></OneMatchup>
            )}
          </div>
          <div className="tracked-selections">
            <header>Your selections</header>
            <section>
              <p>{wins} - {losses} - {pushes}
                <br />
              win % : {winPercent}
              </p>
            </section>
            <div className="selections-list">
              {selections.map((selection, idx) => (
                <OneSelection selection={selection} addWin={this.addWin} addLoss={this.addLoss} addPush={this.addPush} key={idx}></OneSelection>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;