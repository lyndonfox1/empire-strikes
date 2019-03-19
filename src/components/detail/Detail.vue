<template>
  <div>
    <MyHeader />
       <Planet v-if="type === 'planet'"  />
      <Character v-if="type === 'character'"  />
       <Starships v-if="type === 'Starships'"  />
  
   
  </div>
</template>

<script>
import MyHeader from "../MyHeader"
import Character from "./Character";
import Planet from "./Planet";
import Starships from "./Starships"

export default {
  name: "Detail",
  data: function() {
    return {
      type: '',
    };
  },
  components: {
    MyHeader,
    Character,
    Planet,
    Starships

  },
    created: function() {
    console.log(this.$route.params);
    if (this.$route.params.type) {
       this.type = this.$route.params.type;
    }
  }

};
</script>

<style scoped></style>
