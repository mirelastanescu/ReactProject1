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
        console.log('Delete user1', this.props);
        console.log('Delete user2', user);

        const { users } = this.props;
        console.log('Delete user3', users);

        users.splice(1, 1);
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