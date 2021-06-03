<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <coment-item
          v-for="(item,i) in value"
          :value="item"
          :key="i"
        />
      </div>
     
    </div>
</template>
<script>
import ComentItem from "@/components/partials/comentitem";





export default {
  name: "mainWall",
  components: {
   
   
    ComentItem
    
    
  },
   data() {
    return {
    
     
    };
   },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
 
  
  methods: {
     
  },
};
</script>