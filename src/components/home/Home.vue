<template>
  <div><p @click="navigateTo('character')">Character</p>
  <p @click="navigateTo('planet')">Planet</p>
  <p @click="navigateTo('Starships')">Starships</p>
  </div>
  
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
   
    };
  },
  methods: {
    navigateTo: function(type) {
      this.$router.push({ name: "detail", params: { type: type } });
    }
  },
  created: function() {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>