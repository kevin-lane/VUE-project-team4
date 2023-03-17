<script>

import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['loggedInUserId', 'firstName', 'lastName', 'email', 'password'])
    },

    data() {
        return {
            showButton: false,
            inputDisabled: true
        }
    },

    mounted() {
        this.fetchData();
    },

    watch: {
        firstName(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$store.commit('editProfile', { firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password });
                // this.updateData();
            }
        },
    },


    methods: {
        fetchData() {
            fetch(`http://localhost:3000/users/${this.$store.state.loggedInUserId}`)
                .then(response => response.json())
                .then(data => {
                    this.firstName = data.firstName;
                    this.email = data.email;
                    this.lastName = data.lastName;
                    this.password = data.password;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        updateData() {
            const data = {
                firstName: this.firstName,
                email: this.email,
                lastName: this.lastName,
                password: this.password
            };

            fetch(`http://localhost:3000/users/${this.$store.state.loggedInUserId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Data updated successfully');
                        console.log(this.$store.state.firstName);
                        console.log(this.$store.state.lastName);
                        this.$store.commit('editProfile', data);
                    } else {
                        console.log('Failed to update data');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },

        handleClick() {
            if (this.showButton) {
                this.inputDisabled = false; // Enable input field
            }
        },

        handleButton() {
            this.showButton = !this.showButton;
            this.inputDisabled = !this.showButton; // Disable input field if buttons are hidden
        },

        reloadPage() {
            window.location.reload();
        }
    }
}


</script>

<template>
    <div class="wrapper">
        <div class="top">
            <div class="top-left">
                <div class="container">
                    <img src="" alt="" class="profile-pic">
                    <button class="upload">Upload New Image</button>
                </div>
            </div>
            <div class="top-right">
                <div class="container">
                    <button @click="handleButton(); handleClick();" class="edit-profile">Edit Profile</button>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="container">
                <form>
                    <input v-model="firstName" class="form" placeholder="Enter your first name:" :disabled="inputDisabled">
                    <input v-model="lastName" class=" form" placeholder="Enter your last name:" :disabled="inputDisabled">
                    <input v-model="email" class="form" placeholder="Email:" :disabled="inputDisabled">
                    <input v-model="password" class="form" placeholder="Old password:" :disabled="inputDisabled">
                </form>
            </div>
        </div>


        <div class="bottom">
            <div class="bottom-left">
                <router-link to="/profile" custom v-slot="{ navigate }">
                    <button v-if="showButton" @click="reloadPage();" role="link" class="cancel">Cancel</button>
                </router-link>
            </div>
            <div class="bottom-right">
                <router-link to="/profile" custom v-slot="{ navigate }">
                    <button v-if="showButton" @click="updateData();" role="link" class="save">Done</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Arial';
}

body {
    height: 100%;
    padding: 120px 0px;
}

input {
    outline: none;
}

.wrapper {
    background-color: white;
    margin: auto;
    width: 40%;
    height: 70vh;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
    text-align: center;
}

.top {
    height: 35%;
    display: flex;
    border-bottom: 1px solid black;
}

.top-left {
    width: 30%;
    height: 100%;
}

.profile-pic {
    height: 140px;
    width: 140px;
    border-radius: 100%;
    margin-bottom: 10px;
}

button {
    width: 120px;
    height: 35px;
    font-size: 10px;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.4s;
    border-radius: 5px;
}

button:hover {
    background-color: #a6e1e9;
    /* Green */
    color: rgb(76, 79, 80);
}

img {
    display: block;
    text-align: center;
    margin: auto;
}


.top-right {
    width: 70%;
    height: 35%;
}

.top-right button {
    float: right;
    align-items: center;
}

.mid {
    display: flex;
    height: 55%;
    width: 100%;
}

.container {
    padding: 25px 25px;
    width: 100%;
}

.form {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid black;
    appearance: none;
    margin-top: 15px;
    margin-bottom: 0px;
}

.bottom {
    height: 10%;
    width: 100%;
    display: flex;
}

.bottom-left {
    width: 50%;
}

.bottom-right {
    width: 50%;
}

.cancel {
    border: none;
    font-weight: lighter;
    font-size: 16px;
    color: rgb(61, 61, 61);
}

.save {
    border: none;
    background-color: #4F7598;
    font-weight: lighter;
    font-size: 16px;
    color: white;
}

.upload {
    border: none;
    background-color: #4F7598;
    font-weight: lighter;
    font-size: 10px;
    color: white;
}

.edit-profile {
    border: none;
    font-weight: lighter;
    font-size: 10px;
    color: rgb(61, 61, 61);
}

@media screen and (max-width: 1300px) {
    .wrapper {
        width: 90%;
        height: 100%;
    }

    button {
        width: 100px;
    }

    .bottom {
        padding: 25px 0px;
    }

    .top-left {
        width: 50%;
    }

    .top-right {
        width: 50%;
    }
}
</style>
