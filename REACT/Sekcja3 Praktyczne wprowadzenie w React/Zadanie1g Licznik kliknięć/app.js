class Counter extends React.Component {
  state = {
    count: 0,
    result: 0,
  };
  // handleClickMinus = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     result: this.state.result - 1,
  //   });
  // };
  // handleClickReset = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     result: 0,
  //   });
  // };
  // handleClickPlus = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     result: this.state.result + 1,
  //   });
  // };
  handleMathClick(type, number) {
    debugger;
    if (type === 'substraction') {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === 'addition') {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    } else {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: 0,
      }));
    }
  }
  render() {
    return (
      <>
        <button onClick={this.handleMathClick.bind(this, 'substraction', 1)}>
          -1
        </button>
        <button onClick={this.handleMathClick.bind(this)}>Reset</button>
        <button onClick={() => this.handleMathClick('addition', 10)}>
          +10
        </button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
