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
    const { shoppingCart, availableProducts } = this.state; //destrukturyzacja-wyciagniecie this.state
    return (
      <div>
        <button
          disabled={shoppingCart == 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span
          style={
            shoppingCart == 0
              ? {
                  opacity: 0.3,
                }
              : {}
          }
        >
          {' '}
          {shoppingCart}{' '}
        </span>
        <button
          disabled={shoppingCart == availableProducts ? true : false}
          onClick={this.handleAddCart}
        >
          +
        </button>
        {shoppingCart > 0 && (
          <button onClick={this.RemoveBuyProducts}>Kup</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
