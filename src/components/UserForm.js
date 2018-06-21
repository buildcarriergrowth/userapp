import React, {Component} from 'react';
class UserForm extends Component{
    constructor(props){
        super(props);
        this.state={name:this.props.selectedUser.name, role:this.props.selectedUser.role}
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleData = this.handleData.bind(this);
    }
    componentWillReceiveProps(nextProps){
         this.setState({name:nextProps.selectedUser.name, role:nextProps.selectedUser.role});
    }
    handleData(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }
    addUser(){
        this.props.addUser(this.state.name, this.state.role);
    }
    deleteUser(){
        this.props.deleteUser();
    }
    render(){
        return (
            <div className="userform">
                 <div className="userName">
                     <b>Name</b>: <input type="text" name="name" value={this.state.name} onChange={this.handleData} />
                 </div>
                 <div>
                    <b> User </b>: <input type="text" name="role" value={this.state.role} onChange={this.handleData} />
                 </div>
                 <div className="button">
                     <input type="button" value="Remove" onClick={this.deleteUser} className="buttonRem"/> 
                     <input type="button" value="Submit" onClick={this.addUser} className="buttonSub"/>
                 </div>
            </div>
        );
    }
}
export default UserForm;