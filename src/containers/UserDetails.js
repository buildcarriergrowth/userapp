import React,{Component} from 'react';
import {connect} from 'react-redux';
import UserForm from '../components/UserForm';
import User from '../components/User'
import * as UserAction from '../actions/UserAction';
class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state={selectedUser:{}}
        this.displaySelectedUser = this.displaySelectedUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    /**
     * Display user name and role of user in form which is clicked  at left panel
     * @param {*} index 
     */
    displaySelectedUser(index){
            const {users} = this.props;
           this.setState({selectedUser:users[index], index:index})
    }
    /**
     * 1 -> It performs both add user and update user actions
     * 2 -> add user action will trigger if no user clicked at left panel else update user action will get trigger
     * @param {*} name 
     * @param {*} role 
     */
    addUser(name, role){
        const {dispatch} = this.props;
        if(this.state.index == undefined){
        dispatch(UserAction.addUser(name, role))
        }
        else{
          dispatch(UserAction.updateUser(this.state.index, name,role))
        }
        this.setState({selectedUser:{}})
    }
    /**
     *  1 -> It perform deleting the user from left panel from last and delete the selected user  as well
     *  2 -> If no user clicked then deleting the user from last and delete the user that is selected 
     */
    deleteUser(){
        const {dispatch, users} = this.props;
        if(this.state.index == undefined){
        dispatch(UserAction.removeUser(users.length-1))
        }
        else{
            dispatch(UserAction.removeUser(this.state.index))
        }
    }
    render(){
        const {dispatch, users} = this.props;
        let userComponent = users.map((user, index)=>{
            return <User key={index} userName={user.name} index={index} displaySelectedUser = {this.displaySelectedUser}/>
        });
        return (
            <div className="userDetailsDiv"> 
                <table border={1}  className="userDetails">
                  <tbody>
                     <tr>
                         <td>
                            <div>
                                {userComponent}
                            </div>
                         </td>
                         <td>
                            <div>
                            <UserForm selectedUser={this.state.selectedUser} addUser={this.addUser} deleteUser={this.deleteUser} />
                            </div>
                         </td>
                     </tr>
                    </tbody>
                    </table>
            </div>
            );
    }
}
const mapStatetoProps = state =>(
    {
      users:state
    }
  )

export default connect(mapStatetoProps)(UserDetails);