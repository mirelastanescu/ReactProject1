import React from 'react';
// import UserList from './UserList';

// function UserItem({user}) {
    
//     console.log({user});
//     const {name, email, salariu, imagine} = user;
//     return(
//         <>
//             <table><tr>
//                 <td width={250}><b>{ name }</b></td>
//                 <td width={250}>{ email }</td>
//                 <td width={100}>{ salariu }</td>
//                 <td width={100}><img src={ imagine } alt="sample" width="30" height="30"></img></td>
//                 <td width={100}><button onClick={() => UserList.deleteUser(user)}>Delete</button></td>
//             </tr></table>
//         </>
//     );
// }

class UserItem extends React.Component {

    deleteUser(event) {
        event.preventDefault();
        this.props.deleteFromUserList(this.props.user);
    };
   
    render() {

        const {name, email, salariu, imagine} = this.props.user;
        return(
            <>
                <table><tr>
                    <td width={250}><b>{ name }</b></td>
                    <td width={250}>{ email }</td>
                    <td width={100}>{ salariu }</td>
                    <td width={100}><img src={ imagine } alt="sample" width="30" height="30"></img></td>
                    <td width={100}><button onClick={(event) => {this.deleteUser(event)}}>Delete</button></td>
                </tr></table>
            </>
        );
    }
}

export default UserItem;