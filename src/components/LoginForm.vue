<template>
  <form id="login-form">
    <h1>Sign in</h1>
    <input class="input-forms" type="email" placeholder="Email Address">
    <br>
    <input class="input-forms" type="password" placeholder="Password">
    <br>
    <a id="create-account-link" class="links" href="">Create an account</a>
    <br>
    <button id="login-button">Login</button><br>
    <a class="links" href="">Forgot Password?</a>
  </form>
</template>

<style scoped>
  h1{
    color: white;
    margin-bottom: 1rem;
  }
  #login-form{
    background-color: #4F7598;
    font-size: 20px;
    padding-top: 2rem;
    width: 390px;
    height: 564px;
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
  .links{
    color: white;
  }
  #create-account-link{
    position: absolute;
    right: 2rem;
  }
  #login-button{
    width: 214px;
    height: 54px;
    margin-top: 3rem;
    border-radius: 1rem;
    background-color: #3AA05D;
    border: 1px;
    color: white;
    font-size: 20px;
  }
</style>
