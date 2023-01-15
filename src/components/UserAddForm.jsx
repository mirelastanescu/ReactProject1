import React from 'react';

class UserAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background: 'white',
      color: 'black',
      id: '',
      name: '',
      email: '',
      salariu: '',
      imagine: ''
    };
  }

  handleNameChange(event) {
    const inputValue = event.target.value;
    this.setState({name: inputValue});
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({email: inputValue});
  }

  handleSalariuChange(event) {
    const inputValue = event.target.value;
    this.setState({salariu: inputValue});
  }

  handleImagineChange(event) {
    const inputValue = event.target.value;
    this.setState({imagine: inputValue});
  }

  handleSubmit(event){
    event.preventDefault();

    console.log("maxId: ",this.props.maxId);

    const newUser = {
      id: this.props.maxId,
      name: this.state.name,
      email: this.state.email,
      salariu: this.state.salariu,
      imagine: this.state.imagine
    };

    var isValidSubmit = true;
    if(newUser.name.length === 0)
      isValidSubmit = false;
    if(newUser.email.length === 0 || !newUser.email.includes("@") || !newUser.email.includes("."))
      isValidSubmit = false;
    if(newUser.salariu.length === 0)
      isValidSubmit = false;
    if(newUser.imagine.length === 0)
      isValidSubmit = false;

    console.log("isValidSubmit: ",isValidSubmit);

    if(isValidSubmit){
      this.props.updateUsersList(newUser);
      console.log("new user: ",newUser);
    }
    else{
      console.log("Invalid form data");
    }

  }

  render() {
    return (
      <form class="user-add-form" onSubmit={(event) => {this.handleSubmit(event)}}>
        <h2>Adauga utilizatori:</h2>
        <br />
        <label>Nume:</label>
        <input type="text" placeholder="Nume si prenume" value={this.state.name} onChange={(event) => {this.handleNameChange(event)}}/>
        <br />
        <label>Email:</label>
        <input type="text" placeholder="Adresa de email" value={this.state.email} onChange={(event) => {this.handleEmailChange(event)}}/>
        <br />
        <label>Salariu:</label>
        <input type="text" placeholder="Salariu" value={this.state.salariu} onChange={(event) => {this.handleSalariuChange(event)}}/>
        <br />
        <label>Imagine:</label>
        <input type="text" placeholder="Imagine" value={this.state.imagine} onChange={(event) => {this.handleImagineChange(event)}}/>
        <br />
        <input type="submit" value="Submit" background-color='green'/>
        <br />
        <br />
        <br />
      </form>
    );
  }
}
  
export default UserAddForm;