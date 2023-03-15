<script>
export default {
    data() {
        return {
            user: {
                id: 1, // set default ID to 1
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },

            showButton: false
        }
    },
    async mounted() {
        await this.fetchUser(1) // fetch user with ID 1 by default
    },
    methods: {
        async fetchUser(id) {
            try {
                const response = await fetch(`https://localhost:3000/users/${id}`)

                if (!response.ok) {
                    throw new Error(`Failed to fetch user data for ID ${id}.`)
                }

                const userData = await response.json()
                this.user = userData
            } catch (error) {
                console.error(error.message)
            }
        },
        async updateUser() {
            try {
                const response = await fetch(`https://localhost:3000/users/${this.user.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                })

                if (!response.ok) {
                    throw new Error(`Failed to update user with ID ${this.user.id}.`)
                }

                console.log(`User with ID ${this.user.id} updated successfully.`)
            } catch (error) {
                console.error(error.message)
            }
        }
    }
}

// export default {
//     data() {
//         return {
//             input: {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: ''
//             },

//             showButton: false

//         }
//     },
//     methods: {
//         updatePost() {
//             console.warn(this.users)
//             fetch("https://localhost:3000/users" + this.$route.params.id, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ name: this.input.firstName, lastname: this.input.lastName, email: this.input.email, password: this.input.password })
//             })
//                 .then(response => response.json())
//                 .then(data => this.input = console.log(data))
//         }
//     },

//     mounted() {
//         console.warn(this.$route.params.id)
//     }
// }

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
                    <button @click="showButton = !showButton" class="edit-profile">Edit Profile</button>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="container">
                <form>
                    <input v-model="user.firstName" class="form" placeholder="Enter your first name:">
                    <input v-model="user.lastName" class=" form" placeholder="Enter your last name:">
                    <input v-model="user.email" class="form" placeholder="Email:">
                    <input v-model="user.password" class="form" placeholder="Old password:">
                </form>
            </div>
        </div>


        <div class="bottom">
            <div class="bottom-left">
                <router-link to="/profile" custom v-slot="{ navigate }">
                    <button v-if="showButton" @click="navigate" role="link" class="cancel">Cancel</button>
                </router-link>
            </div>
            <div class="bottom-right">
                <router-link to="/profile" custom v-slot="{ navigate }">
                    <button v-if="showButton" @click="updatePost" role="link" class="save">Done</button>
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
