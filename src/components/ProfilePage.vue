 <template>

    <div v-for="(item, index) in items" :key="item.id" id="flex-container">
       <template v-if="index === 0">
         <div id="profile-container">
           <section id="profile-section">
             <!-- <img src="../assets/happy-ge5620ff7a_1920.jpg" alt="man"> -->
             <img :src="item.profilBild" id="img" />
             <h2>{{ item.profilName }}</h2>
             <h2></h2>
           </section>
           <!-- <button>Redigera</button> -->
           <input type="submit" value="Redigera profil" id="button" />
           <hr />
           <div id="card-container">
             <section id="product-grid">
               <img :src="getImageById(1).picture" alt="shoes" />
               <img :src="getImageById(2).picture" alt="ring" />
               <img :src="getImageById(4).picture" alt="bed" />
               <img :src="getImageById(5).picture" alt="ball" />
               <img :src="getImageById(6).picture" alt="bracelet" />
               <img :src="getImageById(7).picture" alt="bike" />
               <img :src="getImageById(8).picture" alt="lamp" />
               <img :src="getImageById(9).picture" alt="sweater" />
               <img :src="getImageById(10).picture" alt="ball" />
             </section>
           </div>
         </div>
       </template>
     </div>
   </template>


   <script>
   import products from '/public/products.json'
   export default {
     data() {
       return {
         items: products
       }
     }, // Get the pcitures by the id number
     computed: {
       getImageById: function () {
         return function (id) {
           return this.items.find((item) => item.id === id)
         }
       }
     }
   }
   </script>


   <style scoped>
   #flex-container {
     display: flex;
     justify-content: center;
   }

   #profile-container {
     width: 730px;
     height: auto;
     border-radius: 6px;
     background-color: rgb(255, 255, 255);
     border: none;
     margin-bottom: 3em;
     margin-top: 10vh;
     box-shadow: 1px 2px 2px  rgb(205, 204, 204);
   }

   #profile-section {
     display: flex;
     gap: 8em;
     margin: 3em 0 0.5em 6em;
   }

   #img {
     width: 193px;
     height: 193px;
     border-radius: 96.5px;
     background-color: rgb(237, 237, 237);
   }


   img {
     object-fit: cover;
   }

   #button {
     margin: 1em 0 1em 7.8em;
     border-radius: 1em;
     background-color: rgb(79, 117, 152, 1);
     color: rgb(248, 248, 248);
     border: rgb(79, 117, 152, 1);
     padding: 0.3em 0.8em 0.3em 0.8em;
     font-weight: 400;
   }


   hr {
     width: 692px;
     margin: 1em 0 0 1.2em;
   }


   #card-container {
     display: flex;
     justify-content: center;
     margin: 6em 0 2em 0;
   }

   #product-grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: auto;
     gap: 2em;
   }

   p {
     width: 200px;
     height: 275.38px;
     border: solid black 1.5px;
     border-radius: 6px;
     background-color: blueviolet;
   }
   #product-grid img {
     height: 280px;
     width: 210px;
     border-radius: 7px;
   }

   /* Responsive  */
   @media only screen and (max-width: 730px) {
     #flex-container {
       max-width: 100%;
     }
    #product-grid img {
       width: 165px;
       margin-bottom: 10px;
     }
     #profile-container {
       max-width: 100%;
       overflow: hidden;
       column-gap: 2px;
       height: auto;
       border-radius: 6px;
       background-color: rgb(255, 255, 255);
       border: none;
       margin-bottom: 3em;
     }
     #product-grid {
       display: grid;
       grid-template-columns: repeat(2, 2fr);
       column-gap: 20px;
     }
     #profile-section {
       display: flex;
       flex-direction: column;
       gap: 1%;
       justify-content: center;
       overflow: hidden;
     }
     #card-container {
       display: grid;
       column-gap: 10px;
       margin-top: 50px;
     }
   }
   </style>
