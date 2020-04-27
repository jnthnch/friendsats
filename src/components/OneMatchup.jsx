import React from 'react';

class OneMatchup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      disabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUserSelection = this.props.addUserSelection
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.addUserSelection(this.state.value)
    if (this.state.disabled) {
      return
    } else {
      this.setState({ disabled: true })
    }
    event.preventDefault();
  }

  render() {
    const { value, disabled } = this.state
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
              <select value={value} onChange={this.handleChange} required>
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