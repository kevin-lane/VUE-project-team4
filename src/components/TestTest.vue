<script setup>
</script>

<script>

 export default{ 
 
 data(){
    return{
        outs:[],
        textbox:'',
    }
 },
 created(){
 fetch('../public/products.json') 
  .then((response) => response.json())
  .then((result) => {
    this.outs = result 
  })
  },
computed:{
Itemlist(){
  if(this.textbox.length > 0){

  return this.outs.filter((item => item.title.toLowerCase()
  .includes(this.textbox.toLowerCase())))
  }

  return this.outs
}

}

}

</script>

<template>
  <div id="wrapp">
  <div v-for=" out in Itemlist" :key="out"> 
    <!-- <h2 v-if="this.textbox.length > 0">
    {{ out.filter[0]}}
  </h2> -->
  <h3 v-if="this.textbox.length > 0">{{ out.title}}</h3> 
  </div>
</div>
<input type="text" v-model="textbox">
</template>

