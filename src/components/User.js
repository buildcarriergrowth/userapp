import React from 'react';


const User = props =>{
    return (
        <div>
           <div className="userName">
          <input type="button" value={props.userName} onClick={()=>{props.displaySelectedUser(props.index)}} />
           
           </div>
        </div>
    ); 
}
export default User;