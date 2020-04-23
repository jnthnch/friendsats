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
    const { homeTeam, awayTeam, homeSpread, awaySpread } = this.props.game
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
            {awayTeam}
          </div>
          <div>
            {homeTeam}
          </div>
        </section>
        <section style={spreadColumn}>
          <div>
            {awaySpread}
          </div>
          <div>
            {homeSpread}
          </div>
        </section>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={value} onChange={this.handleChange}>
                <option value="0" hidden>select</option>
                <option value={awayTeam + awaySpread}>{awayTeam} {awaySpread}</option>
                <option value={homeTeam + homeSpread}>{homeTeam} {homeSpread}</option>
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