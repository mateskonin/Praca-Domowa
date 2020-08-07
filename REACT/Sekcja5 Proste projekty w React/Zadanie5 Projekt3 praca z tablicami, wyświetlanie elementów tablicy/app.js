const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: 'Arek',
      sex: 'male',
    },
    {
      id: 2,
      age: 49,
      name: 'Marta',
      sex: 'female',
    },
    {
      id: 3,
      age: 19,
      name: 'Stasia',
      sex: 'female',
    },
  ],
};

const Item = ({ user }) => (
  <div className='userInfo'>
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika: {user.age}</p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  // state = {
  //   items: ['jabłko', 'śliwka', 'gruszka'],
  // };
  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === 'female');
    const Items = users.map((user) => <Item key={user.id} user={user} />);
    return <div>{Items}</div>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));
