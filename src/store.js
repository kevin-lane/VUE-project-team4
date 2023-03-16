import { createStore } from "vuex";

const mutations = {
  createAccount(state, newUser) {
    state.newUser = newUser;
  },

  userLogin(state, { loggedIn, loggedInUserId, firstName, lastName, email, password }) {
    state.loggedIn = loggedIn;
    state.loggedInUserId = loggedInUserId;
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
    state.password = password;
    console.log(state.loggedInUserId);
  },

  setLoggedInUserId(state, userId) {
    state.loggedInUserId = userId;
  },
  setfirstName(state, userId) {
    state.firstName = userId;
  },
  setLastName(state, lastName) {
    state.lastName = lastName;
  },
  setEmail(state, email) {
    state.email = email;
  },
  setPassword(state, password) {
    state.password = password;
  },

  editProfile(state, { firstName, lastName, email, password }) {
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
    state.password = password;
  },


  storeWish(state, product) {

    state.productPicture.push(product.picture);
    state.productPrice.push(product.price);
    state.wishClass = true;


  },
  Click(state, klick){
    state.text = klick
    },
  removeWish(state, index) {
    state.productPicture.splice(index, 1);
    state.productPrice.splice(index, 1);



    if (state.productPrice.length < 1) {
      state.wishClass = false;
    }
  }
};


const state = {
  newUser: false,
  loggedIn: false,
  loggedInUserId: null,
  firstName: '',
  lastName: '',
  email: '',
  productPicture: [],
  productPrice: [],
  wishClass: false,
  text: ''

};

//Uses strict: true
export default createStore({ mutations, state, strict: true })
