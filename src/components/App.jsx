class App extends React.Component {
  render() {
    var style = { color: 'red' };
    return (
      <div>
        <h1 style={style}>Hello {this.props.name}!</h1>
        <p className="primary-text">This should be large blue text</p>
      </div>
    );
  }
}

export default App;