import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUsers, updateUser } from '../../helpers/store/actions';

export const ListItem = (props) => {
    const {item} = props;
    return <li>
        {item.email}
    </li>
}

export const UserList = (props) => {
    let loading = true;
    let users = [];
    if(props.users) {
        loading = props.loading;
        users = props.users;
    }
    const listItem = loading === false ? users.map(item => 
        <ListItem key={item.id} item = {item}></ListItem>
    ) : '';
    return <ul>
        {listItem}
    </ul>
}

class RenderItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            create_at: '',
            update_at: ''
        }
    }

    componentDidMount() {
        this.props.getUsers();
        let anyUser = this.props.users[0];
        console.log(anyUser);
    }

    render() {
        const {loading, users} = this.props.users;
        return <UserList loading = {loading} users = {users}></UserList>
    }
}
// class ListItem extends Component
// {
//     componentDidMount(){
//         this.props.getUsers();
//     }

//     render(){
//         console.log(this.props);
//         const {loading, users} = this.props.users;
//         const listItem = loading === false ? users.map((item,index) => <li key={index}>{item.name}</li>) : '';
//         return <div>
//             <ul>
//                 {listItem}
//             </ul>
//         </div>
//     }
// }

const mapStateToProps = (state) => {
    console.log(state);
    return{
        users: state.sagaReducer,
    }
}

const mapDispatchToProps = {
    getUsers: getUsers,
    updateUser: updateUser

}

export default connect(mapStateToProps,mapDispatchToProps)(RenderItem);
  
