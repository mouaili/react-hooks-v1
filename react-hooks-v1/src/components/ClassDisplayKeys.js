import React, { Component } from 'react';

class ClassDisplayKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyCode: null,
    };
  }

  handleKeyCode = e => {
    console.log(e);
    this.setState({ keyCode: e.code });
  };

  componentDidMount = () => {
    document.addEventListener('keyup', this.handleKeyCode);
  };

  componentWillUnmount = () => {
    console.log('AddEventListener est annulé..!');
    document.removeEventListener('keyup', this.handleKeyCode);
  };

  render() {
    const { keyCode } = this.state;

    return (
      <div className="row">
        <div className="col">
          <h3>ClassDisplayKeys</h3>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{keyCode}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassDisplayKeys;
