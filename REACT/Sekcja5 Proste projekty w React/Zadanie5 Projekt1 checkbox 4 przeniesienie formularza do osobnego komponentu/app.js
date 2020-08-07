// const PositiveMessage = () => <p>Mozesz obejrzec film. Zapraszamy!</p>;

// const NegativeMessage = () => (
//   <p>Nie możesz obejrzeć filmu, masz za mało lat</p>
// );

const ValidationMessage = (props) => <p>{props.txt}</p>;
const OrderForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type='checkbox'
        id='age'
        onChange={props.change}
        checked={props.isConfirmed}
      />
      <label htmlFor='age'>Mam conajmniej 16 lat</label>
      <br />
      <button type='submit'>Kup bilet</button>
    </form>
  );
};
class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt='Mozesz obejrzec film. Zapraszamy!' />;
      } else {
        return (
          <ValidationMessage txt='Nie możesz obejrzeć filmu, masz za mało lat' />
        );
      }
    } else {
      return null;
    }
  };
  render() {
    const { isConfirmed } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}
ReactDOM.render(<TicketShop />, document.getElementById('root'));
