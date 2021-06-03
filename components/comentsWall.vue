<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <comentitem
          v-for="item in coments"
          :value="item"
          :key="item._id"
        />
      </div>
    </div>
</template>
<script>
import comentItem from "@/components/partials/comentitem";



export default {
  name: "mainWall",
  components: {
    comentItem
    
    
  },
  props: {
    comments: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
   
    
  }
};
</script>