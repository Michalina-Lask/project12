<template>

  <base-container title="Vuex"></base-container>
  <the-counter></the-counter>
   <favorite-value></favorite-value>
   <button @click="addOne">Add One</button>
   <change-counter></change-counter>
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';


export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue 
    
  },
     methods:{
    
    addOne(){
      this.$store.dispatch('addOne')
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 1000;
}
button:hover,
button :active {
background-color:aqua ;
border-color: black;
}
</style>