export const fetchUsers=(users)=>{
    return{
        type:"FETCH_USERS",
        payload: users
    }
}

export const createUser=(users)=>{
    return{
        type:"CREATE_USER",
        payload:users
    }
}

export const updateUser=(users)=>{
return{
    type:"UPDATE_USER",
    payload: users
}
}

export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: id,
  });