<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      userId: null
    }
  },
  methods: {
    fetchUser(e) {
      e.preventDefault();
      console.log("Logged in");
      fetch("../public/users.json")
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response[0])))
    },
    loginUser(e) {
      e.preventDefault();
      fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(result => {
          // console.log(result[0].id);
          const loggedInUser = result.filter(user => user.email === this.email)
          console.log(loggedInUser[0].id);
          result.find(usr => {
            if (usr.email === this.email && usr.password === this.password) {
              alert("Logged in");
              this.$store.commit('userLogin', {
                "loggedIn": true,
                "loggedInUserId": loggedInUser[0].id,
                "firstName": loggedInUser[0].firstName,
                "lastName": loggedInUser[0].lastName,
                "email": loggedInUser[0].email,
                "password": loggedInUser[0].password
              },
                this.$router.push(`/users/${loggedInUser[0].id}`)
              );
              this.$router.push('/home');
            }
            else {
              document.getElementById('wrong-login-details').style.visibility = 'visible'
            }
          });
        })
        .catch(err => console.log(err.message))
    }
  },
  //Watcher inplemented to get rid of Wrong log in details when user starts typing
  watch: {
    email(newVal, oldVal) {
      if (newVal !== oldVal) {
        document.getElementById('wrong-login-details').style.visibility = 'hidden'
      }
    },
    password(newVal, oldVal) {
      if (newVal !== oldVal) {
        document.getElementById('wrong-login-details').style.visibility = 'hidden'
      }
    }
  }
}
</script>

<template>
    <!-- <form id="login-form">
      <h1>Sign in</h1>
      <input v-model="email" class="input-forms" type="email" placeholder="Email Address">
      <br>
      <input v-model="password" class="input-forms" type="password" placeholder="Password">
      <br>
      <a @click.prevent="$store.commit('createAccount', true)" id="create-account-link" class="links" href="">Create an
        account</a>
      <br>
      <button @click.prevent="loginUser" id="login-button">Login</button><br>
      <a class="links" href="">Forgot Password?</a>
      <p id="wrong-login-details">Wrong email or password</p>
    </form> -->

    <div class="login-flex">
  <form id="login-form">
    <h1>Sign in</h1>
    <input v-model="email" class="input-forms" type="email" placeholder="Email Address">
    <br>
    <input v-model="password" class="input-forms" type="password" placeholder="Password">
    <br>
    <a @click.prevent="$store.commit('createAccount', true)" id="create-account-link" class="links" href="">Create an account</a>
    <br>
    <button @click.prevent="loginUser" id="login-button">Login</button><br>
    <a class="links" href="">Forgot Password?</a>
    <p id="wrong-login-details">Wrong email or password</p>
  </form>
</div>
</template>

<style scoped>
h1 {
  color: white;
  margin-bottom: 1rem;
}

  .login-flex{
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }
  #login-form{
    background-color: #4F7598;
    font-size: 20px;
    padding-top: 2rem;
    width: 390px;
    height: 564px;
    text-align: center;
    border-radius: 6px;


  }

.links {
  color: white;
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
  .links{
    color: white;
  }
  #create-account-link{
    position: absolute;
  }

#login-form {
  background-color: #4F7598;
  font-size: 20px;
  padding-top: 2rem;
  width: 390px;
  height: 564px;
  text-align: center;
}

.input-forms {
  width: 354px;
  height: 66px;
  margin: 1rem;
  padding: 1rem;
  border: 1px;
  border-radius: 1rem;
  font-size: 20px;
}

.links {
  color: white;
}

#create-account-link {
  position: absolute;

}

#login-button {
  width: 214px;
  height: 54px;
  margin-top: 3rem;
  border-radius: 1rem;
  background-color: #3AA05D;
  border: 1px;
  color: white;
  font-size: 20px;
}

#wrong-login-details {
  visibility: hidden;
  color: rgb(200, 255, 0);
}
</style>
