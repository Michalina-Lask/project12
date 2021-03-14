

<template>
  <button @click="addOne">Guzik</button>
</template>

<script>
export default {
    methods:{
        addOne(){
            this.$store.state.counter = this.$store.state.counter + 11
        }
    }

}
</script>

<style>

</style>