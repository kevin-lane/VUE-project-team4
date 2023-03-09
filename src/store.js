import { createStore } from "vuex";

const mutations = {
  createAccount(state, newUser){
    state.newUser = newUser;
  },
  userLogin(state, loggedIn){
    state.loggedIn = loggedIn;
  }
},
state = {
  newUser: false,
  loggedIn: false
}

//Uses strict: true
export default createStore({ mutations, state, strict: true })
