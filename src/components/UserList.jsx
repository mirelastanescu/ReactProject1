import React from 'react';
import UserItem from "./UserItem";

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    deleteFromUserList(user) {

        const { users } = this.props;
        console.log('Delete user list', this.props);
        console.log('Delete user', user);
        console.log('Delete user index', users.indexOf(user));

        users.splice(users.indexOf(user), 1);
        this.setState({users: users});
      };

    render() {
        const { users } = this.props;
        // this.setState({users: this.props});
        console.log('Delete user5', users);
        return (
            <div>
                <h1>Lista utilizatorilor:</h1>
                {   
                    users.map((user, index) => {
                        return <UserItem key={index} user={user} deleteFromUserList={(user) => {
                            this.deleteFromUserList(user)}}></UserItem>
                    })
                }
            </div>
        );
  }
}

export default UserList;