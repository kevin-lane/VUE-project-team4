import { createStore } from "vuex";

const mutations = {
  createAccount(state, newUser){
    state.newUser = newUser;
  },
  userLogin(state, {loggedIn, loggedInUserId}){
    state.loggedIn = loggedIn;
    state.loggedInUserId = loggedInUserId;
    console.log(state.loggedInUserId);
  }
},
state = {
  newUser: false,
  loggedIn: false,
  loggedInUserId: 0
}

//Uses strict: true
export default createStore({ mutations, state, strict: true })
