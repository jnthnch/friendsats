import React from 'react';

class OneMatchup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      disabled: false,
      gameId: this.props.game.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createSelectionObject = this.createSelectionObject.bind(this);
    this.addUserSelection = this.props.addUserSelection
  }

  // selection object
  // id	PRIMARY KEY
  // game_id	FOREIGN KEY
  // time	TIME
  // date	DATE
  // selection	TEXT
  // is_won	BOOLEAN
  // is_push	BOOLEAN
  handleChange(event) {
    this.setState({ selection: event.target.value });
  }

  createSelectionObject() {
    let object = {
      game_id: this.state.gameId,
      time: null,
      date: null,
      selection: this.state.selection,
      is_won: null,
      is_push: null
    }
    console.log('SELECTION OBJECT IS', object)
  }

  handleSubmit(event) {
    this.createSelectionObject();
    this.addUserSelection(this.state.selection)
    if (this.state.disabled) {
      return
    } else {
      this.setState({ disabled: true })
    }
    event.preventDefault();
  }

  render() {
    const { selection, disabled } = this.state
    const { home_team, away_team, home_spread, away_spread } = this.props.game
    const style = {
      backgroundColor: 'gray',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    };
    const teamColumn = {
      display: 'flex',
      flexDirection: 'column'
    }
    const spreadColumn = {
      display: 'flex',
      flexDirection: 'column'
    }
    return (
      <div style={style}>
        <section style={teamColumn}>
          <div>
            {away_team}
          </div>
          <div>
            {home_team}
          </div>
        </section>
        <section style={spreadColumn}>
          <div>
            {away_spread}
          </div>
          <div>
            {home_spread}
          </div>
        </section>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={selection} onChange={this.handleChange} required>
                <option value="" hidden>select</option>
                <option value={`${away_team} ${away_spread}`}>{away_team} {away_spread}</option>
                <option value={`${home_team} ${home_spread}`}>{home_team} {home_spread}</option>
              </select>
            </label>
            <input type="submit" disabled={disabled} value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default OneMatchup;