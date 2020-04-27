import React from 'react';

class OneSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.disabled) {
      return
    } else {
      this.setState({ disabled: true })
    }
  }

  render() {
    const { selection, addWin, addLoss, addPush } = this.props;
    const { disabled } = this.state;
    const handleResult = (callback) => {
      this.handleClick();
      callback();
    }
    return (
      <div className="single-selection" >
        <p>{selection}</p>
        <div className="selection-result" >
          <button
            disabled={disabled}
            onClick={() => { handleResult(addWin) }}>win</button>
          <button
            disabled={disabled}
            onClick={() => {
              handleResult(addLoss)
            }
            }>loss</button>
          <button
            disabled={disabled}
            onClick={() => {
              handleResult(addPush)
            }
            }>push</button>
        </div>
      </div >
    )
  }
}

export default OneSelection;