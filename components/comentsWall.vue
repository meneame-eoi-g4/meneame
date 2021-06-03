<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <comentitem
          v-for="(item,i) in value"
          :value="item"
          :key="i"
        />
      </div>
      <textarea v-model="content" class="textarea" placeholder="comenta"></textarea>
      <button class="button is-warning" @click.prevent="$emit('coment')">coment</button>
    </div>
</template>
<script>
import comentItem from "@/components/partials/comentitem";



export default {
  name: "mainWall",
  components: {
    comentItem
    
    
  },
   data() {
    return {
      content: "",
     
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