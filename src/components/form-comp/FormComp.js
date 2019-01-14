import React, {Component} from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { getUsers, updateUser } from '../../helpers/store/actions';


class FormComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: 1,
            name: '',
            email: '',
            create_at: '',
            update_at: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
        let anyUser = {}
    }

    handleChange(event) {
        this.setState({name: event.target.value});
        console.log(this.state)
    }

    handleSubmit() {
        debugger
        updateUser(this.state);
    }

    render() {
        
        const {loading, users} = this.props.users;
        // if(loading === false) {
        //     this.anyUser = users[0];
        // }
        // console.log(this.anyUser);
        // console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" value="Submit" disabled={!this.state.name}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.sagaReducer,
        userUpdated: state.updateSagaReducer.userUpdated,
    }
}

const mapDispatchToProps = {
    getUsers: getUsers,
}

export default connect(mapStateToProps,mapDispatchToProps)(FormComp);