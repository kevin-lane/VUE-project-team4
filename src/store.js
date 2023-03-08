import { createStore } from "vuex";

const mutations = {
  createAccount(state, newUser){
    state.newUser = newUser;
  }
},
state = {
  newUser: false,
  loggedIn: false
}

//Uses strict: true
export default createStore({ mutations, state, strict: true })
