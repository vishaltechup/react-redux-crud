import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
            addUser:(state,action) =>{
                state.push(action.payload)
                console.log("action",action)
            },
            updateUser:(state,action)=>{
                const{id,name,email} = action.payload;
                const updatedUser = state.find(user => user.id == id)
                if(updatedUser){
                    updatedUser.name = name;
                    updatedUser.email = email;
                }
            },
            deleteUser:(state,action)=>{
                const {id} = action.payload;
                const deletedUser = state.find(user => user.id == id);
                if(deletedUser){
                    return state.filter(f => f.id !== id);
                }
            }
    }
})

export const{addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer;