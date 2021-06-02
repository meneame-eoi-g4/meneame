<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <articleCard
          v-for="item in articles"
          :value="item"
          :key="item._id"
        />
      </div>
    </div>
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
