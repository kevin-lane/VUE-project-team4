import { createStore } from "vuex";

const mutations = {
  createAccount(state, newUser){
    state.newUser = newUser;
  },
  userLogin(state, {loggedIn, loggedInUserId}){
    state.loggedIn = loggedIn;
    state.loggedInUserId = loggedInUserId;
    console.log(state.loggedInUserId);
  },

  storeWish(state, product){
  state.productPicture.push(product.picture);
  state.productPrice.push(product.price);
  state.wishClass = true;
  },
  removeWish(state, index) {
    state.productPicture.splice(index, 1);
  state.productPrice.splice(index, 1);

  if(state.productPrice.length < 1){
    state.wishClass = false;
    }
  }
};


const state = {
  newUser: false,
  loggedIn: false,
  loggedInUserId: null,
    productPicture: [],
  productPrice: [],
  wishClass: false
}

//Uses strict: true
export default createStore({ mutations, state, strict: true })
