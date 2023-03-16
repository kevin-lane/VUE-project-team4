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

  editProfile(state, { firstName, lastName, email, password }) {
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
    state.password = password;
    console.log(state.firstName);
    console.log(state.lastName);

  },

  storeWish(state, product) {

    state.productPicture.push(product.picture);
    state.productPrice.push(product.price);
    state.wishClass = true;


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
  loggedInUserId: 0,
  firstName: '',
  lastName: '',
  email: '',
  productPicture: [],
  productPrice: [],
  wishClass: false,

};

//Uses strict: true
export default createStore({ mutations, state, strict: true })
