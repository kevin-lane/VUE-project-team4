<template>
  <form id="signup-form">
    <h1>Sign up</h1>
    <input class="input-forms" type="text" placeholder="First Name">
    <br>
    <input class="input-forms" type="text" placeholder="Last Name">
    <br>
    <input class="input-forms" type="email" placeholder="Email Address">
    <br>
    <input class="input-forms" type="password" placeholder="Password">
    <br>
    <input class="input-forms" type="password" placeholder="Confirm Password">
    <input type="checkbox" id="policy-approval" name="policy-approval" >
      <label id="policy-approval-label" for="policy-approval">I accept Terms and Privacy Policy</label>
    <button id="signup-button">Sign up</button><br>
  </form>
</template>

<style scoped>
  h1{
    color: white;
    margin-bottom: 1rem;
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
