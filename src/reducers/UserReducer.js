import * as UserActionType from '../actiontypes/UserActionTypes';
let initialState =  [
  {
    name: 'User 1',
    role: 'Role 1'
  },
  {
    name: 'User 2',
    role: 'Role 2'
  },
  {
    name: 'User 3',
    role: 'Role 3'
  }
];
export default function UserReducer(state = initialState, action){
switch (action.type) {
  case UserActionType.ADD_USER:
       return [
         ...state,
         {
           name:action.payload.userName,
           role:action.payload.userRole
         }
       ]
  case UserActionType.REMOVE_USER:
       return [
         ...state.slice(0,action.payload.index),
         ...state.slice(action.payload.index+1)
       ]
  case UserActionType.UPDATE_USER:
  console.log("the new player score is "+action.payload.name+" and index is "+action.payload.index);
            return state.map((user, userIndex)=>{
              if(userIndex == action.payload.index)
              {
                return {
                  ...user,
                  name: action.payload.userName,
                  role: action.payload.userRole
                }
              }
              return user;
            });

  default: return state;
}
}
