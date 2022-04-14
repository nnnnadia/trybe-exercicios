import React from 'react';
import './App.css';
import Cores from './Cores';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
  }

  handleChange(event) {
    this.setState({
      filter: event.target.value,
    })
  }

  render() {
    return (
      <div className="container-sm card">
        <h5 className="card-header">Cores</h5>
        <div className="col card-body g-3">
          <h5 className="card-title">Encontre uma cor</h5>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Digite uma cor..." aria-label="Searched color" aria-describedby="button-addon2" onChange={(e) => this.handleChange(e)} />
          </div>
          <Cores filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default App;
