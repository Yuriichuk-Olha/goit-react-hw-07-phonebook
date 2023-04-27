// import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { createContactsThunk, deleteContactsThunk, getContactsThunk } from "./thunk";
// import { initialStateContacts } from "./initial";


// const handelPending = (state)=>{
//     state.isLoading = true
// }
// const handelFulfilled = (state) => {
//     state.isLoading=false
//     state.error=''
// }
// const handelFulfilledGet = (state,{payload})=>{
//     state.contacts=payload
//     state.isLoading=false
//     state.error=''
   
// }
// const handelFulfilledCreate = (state,{payload})=>{
//     state.contacts.push(payload)
//     state.isLoading=false
//     state.error=''
// }
// const handelFulfilledDelete = (state,{payload})=>{
//     state.contacts = state.contacts.filter(el=>el.id!==payload.id)
//     state.isLoading=false
//     state.error=''
// }
// const handleRejected = (state,{payload})=>{
//     state.isLoading=false
//     state.error= payload
// }



// export const contactsSlice = createSlice({
//     name:'contacts',
//     initialState: initialStateContacts,
//     reducers:{
//         setFilter:(state, action)=>{
//             state.filter = action.payload
//         },
//     },
//     extraReducers:(builder) => {
//         builder
//             .addCase(getContactsThunk.fulfilled, handelFulfilledGet)
//             .addCase(createContactsThunk.fulfilled, handelFulfilledCreate)
//             .addCase(deleteContactsThunk.fulfilled, handelFulfilledDelete)
//             .addMatcher
//                 (isAnyOf(
//                 getContactsThunk.pending, 
//                 createContactsThunk.pending, 
//                 deleteContactsThunk.pending
//                 ),
//             handelPending
//             )
//             .addMatcher(
//                 isAnyOf(
//                 getContactsThunk.rejected, 
//                 createContactsThunk.rejected, 
//                 deleteContactsThunk.rejected
//                 ),
//             handleRejected
//             )
//             .addMatcher(
//                 isAnyOf(
//                 getContactsThunk.fulfilled, 
//                 createContactsThunk.fulfilled, 
//                 deleteContactsThunk.fulfilled
//                 ),
//             handelFulfilled
//             )
//     }
// })

// export const contactsReducer = contactsSlice.reducer
// export const { setFilter } = contactsSlice.actions