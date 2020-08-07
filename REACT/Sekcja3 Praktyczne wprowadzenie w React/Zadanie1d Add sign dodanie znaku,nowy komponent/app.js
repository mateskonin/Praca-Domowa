class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: '',
  //   };
  // }
  state = {
    text: '',
  };

  handleClick() {
    const letter = Math.random() * 10;
    // this.setState({
    //   text: this.state.text + letter,
    // });
    this.setState(() => {
      return {
        text: letter,
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
        <PanelResult text={this.state.text} />
      </React.Fragment>
    );
  }
}
const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
