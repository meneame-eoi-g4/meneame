<template>
</template>
<script>
import articleCard from "@/components/partials/article-card";


export default {
  name: "mainWall",
  components: {
    articleCard,
    
  },
  props: {
    articles: {
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
