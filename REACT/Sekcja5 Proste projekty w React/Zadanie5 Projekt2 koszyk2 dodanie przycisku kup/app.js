class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };
  handleAddCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };
  RemoveBuyProducts = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };
  render() {
    return (
      <div>
        <button
          disabled={this.state.shoppingCart == 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span
          style={
            this.state.shoppingCart == 0
              ? {
                  opacity: 0.3,
                }
              : {}
          }
        >
          {' '}
          {this.state.shoppingCart}{' '}
        </span>
        <button
          disabled={
            this.state.shoppingCart == this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddCart}
        >
          +
        </button>
        {this.state.shoppingCart > 0 && (
          <button onClick={this.RemoveBuyProducts}>Kup</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
