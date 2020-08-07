class ShoppingList extends React.Component {
  state = {
    items1: "ogórki",
    items2: "sok",
    items3: "coś do picia",
  };
  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          <ItemList name={this.state.items1} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    );
  }
}
//Za pomocą funkcji
// const ItemList = (props) => {
//   return <li>{props.name}</li>;
// };

//Za pomocą klasy
class ItemList {
  render() {
    return <li>{this.props.name}</li>;
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
