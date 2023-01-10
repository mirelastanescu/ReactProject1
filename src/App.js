import React from 'react';
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: "black",
      users: [],
      posts: [],
      isPostsDisplayed: false
    };
  }

  componentDidMount() {
    console.log("Component did mount.");
    //Get users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonUsers) => {
        const dataUsers = jsonUsers;

        dataUsers.forEach((user) => {
          user.salariu = '100 lei'
          user.imagine = 'sample.jpg'
        })
        this.setState({users: dataUsers})
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('Finally....'));

    //Get posts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonPosts) => {
        const dataPosts = jsonPosts;
        this.setState({posts: dataPosts})
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('Finally....'));
  }

  changeColor(event) {
    console.log(event.target.value);
    this.setState({background: event.target.value});
  }

  changeTextColor(event) {
    console.log(event.target.value);
    this.setState({color: event.target.value});
  }

  afiseazaUseri() {
    console.log(this.state.isPostsDisplayed);
    this.setState({ isPostsDisplayed: false });
  };

  afiseazaPostari() {
    console.log(this.state.isPostsDisplayed);
    this.setState({ isPostsDisplayed: true });
  };

  updateUsersList(user){
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          user
        ]
      }
    });
  }

  getMaxId(users) {
    let maxId = 0;

    // parcurge fiecare user si verifica daca id-ul lui e mai mare decat cel mai mare id de pana atunci
    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <UserAddForm updateUsersList={(user) => {
          this.maxId = this.getMaxId(this.state.users) + 1
          this.updateUsersList(user)}}/>
        {
          this.state.isPostsDisplayed === false
          ? <UserList users={this.state.users} />
          : null
        }
        {
          this.state.isPostsDisplayed === true
          ? <PostList posts={this.state.posts} />
          : null
        }
        <br/><br/>
        <button onClick={() => this.afiseazaUseri()}>Afiseaza useri</button>&emsp;
        <button onClick={() => this.afiseazaPostari()}>Afiseaza postari</button>
        <br/>
        <br/>
        <br/>
        <input type="color" onChange={(event) => this.changeColor(event)}/>&emsp;
        <input type="color" onChange={(event) => this.changeTextColor(event)}/>

        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
