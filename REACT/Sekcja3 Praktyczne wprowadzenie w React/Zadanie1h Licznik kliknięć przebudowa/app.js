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
  handleMathClick = (type, number) => {
    //debugger;
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
  };
  render() {
    return (
      <>
        <MathButton
          name='-10'
          number={10}
          type='substraction'
          click={this.handleMathClick}
        />
        <MathButton
          name='Reset'
          number='10'
          type=''
          click={this.handleMathClick}
        />
        <MathButton
          name='+10'
          number={10}
          type='addition'
          click={this.handleMathClick}
        />
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

const MathButton = (props) => {
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
