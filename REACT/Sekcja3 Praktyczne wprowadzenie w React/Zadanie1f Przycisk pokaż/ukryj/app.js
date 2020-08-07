class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messsageIsActive: false,
    };
  }
  handleMessageButton = () => {
    this.setState({
      messsageIsActive: !this.state.messsageIsActive,
    });
  };
  render() {
    const text =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque porro, repudiandae eaque qui esse culpa similique. Ut sapiente facilis fuga illum culpa quidem necessitatibus iusto ipsum. Voluptatem, qui quos.';
    return (
      <>
        <button onClick={this.handleMessageButton}>
          {this.state.messsageIsActive ? 'Ukryj' : 'Pokaż'}
        </button>
        {/* <p>{this.state.messsageIsActive && text}</p> */}
        {this.state.messsageIsActive && <p>{text}</p>}
      </>
    );
  }
}
ReactDOM.render(<Message />, document.getElementById('root'));
