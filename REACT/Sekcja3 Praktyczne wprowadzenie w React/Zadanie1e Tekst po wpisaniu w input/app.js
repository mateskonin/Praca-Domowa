class App extends React.Component {
  state = {
    value: '',
  };
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value.toUpperCase(),
    });
  };

  handleResetClick = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <>
        <input
          placeholder='wpisz...'
          value={this.state.value}
          onChange={this.handleInputChange}
          type='text'
        ></input>
        <button onClick={this.handleResetClick}>Reset</button>
        <h1>{this.state.value}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
