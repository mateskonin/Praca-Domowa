class App extends React.Component {
  render() {
    return (
      <div onMouseOver={this.onHandleMouseOver}>
        <button onClick={this.onHandleClick}>Naciśnij</button>
        <input onInput={this.onHandleInput} type='text' />
      </div>
    );
  }
  onHandleClick() {
    console.log('Nacisnąłeś przycisk');
  }
  onHandleMouseOver() {
    console.log('Najechałeś na obiekt');
  }
  onHandleInput() {
    console.log('Zmieniłeś zawartość');
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
