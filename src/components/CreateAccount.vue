<script>
  export default{
    data(){
      return{
        id: Math.floor(Math.random() * 100),
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: ''
      }
    },
    methods: {
      addNewUser(e){
        e.preventDefault();
        if(this.firstName === '' || this.lastName === '' || this.email === '' || this.password === '' || this.confirmedPassword === ''){
          alert("All fields are required!");
        }
        else if(this.password !== this.confirmedPassword) {
          alert("Password and confirmed password don't match");
        }
        else{
          alert("New user added");
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              id: this.id,
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password
            })
          })
          .then((response) => response.json())
          .then((newUser) => console.log(newUser))
          .catch((error) => console.log("Error: ", error));
          this.$store.commit('createAccount', false); //Change to Log in form when user account created
        }
      }
    }
  }
</script>

<template>
  <div class="signup-flex">
  <form id="signup-form">
    <h1>Sign up</h1>
    <input v-model="firstName" class="input-forms" type="text" placeholder="First Name" required>
    <br>
    <input v-model="lastName" class="input-forms" type="text" placeholder="Last Name" required>
    <br>
    <input v-model="email" class="input-forms" type="email" placeholder="Email Address" required>
    <br>
    <input v-model="password" class="input-forms" type="password" placeholder="Password" required>
    <br>
    <input v-model="confirmedPassword" class="input-forms" type="password" placeholder="Confirm Password" required>
    <input type="checkbox" id="policy-approval" name="policy-approval" >
      <label id="policy-approval-label" for="policy-approval">I accept Terms and Privacy Policy</label>
    <button @click="addNewUser" id="signup-button">Sign up</button><br>
  </form>
</div>
</template>

<style scoped>
  h1{
    color: white;
    margin-bottom: 1rem;
  }
  .signup-flex{
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }
  #signup-form{
    background-color: #4F7598;
    width: 390px;
    height: 699px;
    left: 0px;
    top: 100px;
    padding-top: 2rem;
    text-align: center;

  }
  .input-forms{
    width: 354px;
    height: 66px;
    margin: 1rem;
    padding: 1rem;
    border: 1px;
    border-radius: 1rem;
    font-size: 20px;
  }
  #policy-approval{
    width: 26px;
    height: 20px;
  }
  #policy-approval-label{
    font-size: 20px;
    color: white;
  }
  #signup-button{
    width: 214px;
    height: 54px;
    margin-top: 1rem;
    border-radius: 1rem;
    background-color: #3AA05D;
    border: 1px;
    color: white;
    font-size: 20px;
  }
</style>
