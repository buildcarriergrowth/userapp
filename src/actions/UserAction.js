import * as UserActionType from '../actiontypes/UserActionTypes';

export const addUser = (userName, userRole) => {
  return{
    type:UserActionType.ADD_USER,
    payload:{userName, userRole}
  };
};

export const removeUser = index =>{
  return{
    type:UserActionType.REMOVE_USER,
    payload:{index}
  };
};

export const updateUser = (index,userName, userRole)=>{
  return{
    type:UserActionType.UPDATE_USER,
    payload:{index, userName, userRole}
  };
};
