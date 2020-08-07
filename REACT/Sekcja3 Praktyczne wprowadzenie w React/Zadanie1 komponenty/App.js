//komponent funkcyjny, bezstanowy
const App = () => {
  return (
    <div>
      <h1>Pierwszy komponent</h1>
    </div>
  );
};

//komponent klasowy, stanowy

class App2 extends React.Component {
  state = {
    number: "jkjks",
  };
  render() {
    return (
      <section>
        <h2>Komponent klasowy {this.state.number}</h2>
      </section>
    );
  }
}

const App3 = () => {
  return (
    <>
      <App />
      <App2 />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App3 />, document.getElementById("root"));
