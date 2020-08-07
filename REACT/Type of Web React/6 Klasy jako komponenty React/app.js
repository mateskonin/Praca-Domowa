class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <main className='iu main text container'>
          <ContactList />
        </main>
      </div>
    );
  }
}
class AppHeader extends React.Component {
  render() {
    return (
      <nav className='ui container'>
        <a href='#' className='header item'>
          <img
            className='logo'
            src='https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png'
          />
          Lista kontaktów
        </a>
        <div className='header item'>
          <button className='ui button'>Dodaj</button>
        </div>
      </nav>
    );
  }
}
class ContactList extends React.Component {
  render() {
    return (
      <ul className='ui relaxed divided list selection'>
        <ContactItem
          login='typeofweb1'
          name='Lena'
          department='JavaScript Developer'
        />
        <ContactItem
          login='typeofweb2'
          name='Brian'
          department='Human Resources'
        />
        <ContactItem login='typeofweb3' name='Rick' department='QAS' />
      </ul>
    );
  }
}
class ContactAvatar extends React.Component {
  render() {
    const { log } = this.props;
    const imgUrl = `https://api.adorable.io/avatars/55/${log}.png`;
    return <img src={imgUrl} className='ui mini rounded image' />;
  }
}
class ContactItem extends React.Component {
  render() {
    const { login, name, department } = this.props;
    return (
      <li className='item'>
        <div className='content'>
          <ContactAvatar log={login} />
          <h4 className='header'>{name}</h4>
          <div className='description'>{department}</div>
        </div>
      </li>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
