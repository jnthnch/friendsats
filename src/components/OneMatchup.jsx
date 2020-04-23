import React from 'react';

class OneMatchup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('your selection is ' + this.state.value);
    event.preventDefault();
  }

  render() {
    var style = {
      backgroundColor: 'gray',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    };
    var teamColumn = {
      display: 'flex',
      flexDirection: 'column'
    }
    var spreadColumn = {
      display: 'flex',
      flexDirection: 'column'
    }
    return (
      <div style={style}>
        <section style={teamColumn}>
          <div>
            49ers
          </div>
          <div>
            Rams
          </div>
        </section>
        <section style={spreadColumn}>
          <div>
            -1
          </div>
          <div>
            +1
          </div>
        </section>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>
              make a selection:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="0">mypick</option>
                <option value="49ers -1">49ers -1</option>
                <option value="Rams +1">Rams +1</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default OneMatchup;